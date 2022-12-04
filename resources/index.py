import boto3
import logging
import os
import time

logger = logging.getLogger()
try:
    log_level = os.environ["LogLevel"]
    if log_level not in ["INFO", "DEBUG"]:
        log_level = "INFO"
except:
    log_level = "INFO"
logger.setLevel(log_level)

ec2 = boto3.client("ec2")
ssm = boto3.client("ssm")


def modify_block_device_mappings(d):
    for k, v in d.copy().items():
        if isinstance(v, dict):
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
            modify_block_device_mappings(v)
        else:
            if k == "iops" or k == "volumeSize" or k == "throughput":
                v = int(v)
            if k == "deleteOnTermination" or k == "encrypted":
                if v == "true":
                    v = True
                else:
                    v = False
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
    return d


def modify_tag_specifications(d):
    for k, v in d.copy().items():
        if isinstance(v, dict):
            print(f"k: {k} v: {v}")
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
            modify_tag_specifications(v)
        else:
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
    return d


def modify_tags(d):
    for k, v in d.copy().items():
        if isinstance(v, dict):
            print(f"k: ${k} v: ${v}")
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
            modify_tags(v)
        else:
            print(f"k: {k} v: {v}")
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
    return d


def check_ami(image_id):
    ami_status = ec2.describe_images(ImageIds=[image_id],)["Images"][
        0
    ]["State"]
    print(f"AMI Status: {ami_status}")
    return ami_status


def create_ami(
    uid,
    description=None,
    instanceId=None,
    name=None,
    blockDeviceMappings=None,
    tagSpecifications=None,
    dryRun=None,
    noReboot=None,
    **kwargs,
):
    logger.info(f"Creating AMI for UID: {uid}")
    params = {}
    params["Name"] = name
    params["InstanceId"] = instanceId
    if description:
        params["Description"] = description
    if blockDeviceMappings:
        fixed_block_device_mappings = []
        for mapping in blockDeviceMappings:
            fixed_block_device_mappings.append(modify_block_device_mappings(mapping))
        params["BlockDeviceMappings"] = fixed_block_device_mappings
    if tagSpecifications:
        print(f"tagSpecifications: {tagSpecifications}")
        fixed_tag_specifications = []
        for tag_specification in tagSpecifications:
            print(f"tag_specification: {tag_specification}")
            fixed_tag_specification = {}
            fixed_tag_specification["ResourceType"] = tag_specification["resourceType"]
            fixed_tags = []
            for tag in tag_specification["tags"]:
                print(f"tag: {tag}")
                fixed_tags.append(modify_tags(tag))
            fixed_tag_specification["Tags"] = fixed_tags

        fixed_tag_specifications.append(fixed_tag_specification)
        params["TagSpecifications"] = fixed_tag_specifications

    if dryRun == "true":
        params["DryRun"] = True
    else:
        params["DryRun"] = False

    if noReboot == "true":
        params["NoReboot"] = True
    else:
        params["NoReboot"] = False

    logger.info(f"Params to use: {params}")
    try:
        image_id = ec2.create_image(**params)["ImageId"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    check_ami_count = 0
    while check_ami(image_id) != "available":
        check_ami_count += 1
        if check_ami_count == 30:
            raise RuntimeError("AMI did not become available")
        time.sleep(15)

    try:
        ssm.put_parameter(
            Name="/createAMI/imageId/" + uid,
            Description="imageId for " + uid,
            Overwrite=True,
            Value=image_id,
            Type="String",
            DataType="aws:ec2:image",
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return image_id, name


def delete_ami(uid):
    logger.info(f"Deleting AMI: {uid}")
    try:
        image_id_to_delete = ssm.get_parameter(Name="/createAMI/imageId/" + str(uid))["Parameter"]["Value"]
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        ssm.delete_parameter(Name="/createAMI/imageId/" + str(uid))
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    try:
        ec2.deregister_image(ImageId=image_id_to_delete)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return True


def stop_instance(instance_id):
    logger.info(f"Stopping Instance: {instance_id}")
    params = {"InstanceIds": [instance_id], "Hibernate": False, "DryRun": False, "Force": True}
    logger.info(f"Params to use: {params}")
    try:
        ec2.stop_instances(**params)
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)
    time.sleep(10)
    instance_status = ec2.describe_instance_status(InstanceIds=[instance_id], IncludeAllInstances=True)[
        "InstanceStatuses"
    ][0]["InstanceState"]["Name"]

    logger.info(f"Current status: {instance_status}")
    timeout = 0
    while not instance_status == "stopped":
        timeout += 1
        time.sleep(5)
        instance_status = ec2.describe_instance_status(InstanceIds=[instance_id], IncludeAllInstances=True)[
            "InstanceStatuses"
        ][0]["InstanceState"]["Name"]

        logger.info(f"Current status: {instance_status}")
        if timeout == 15:
            raise RuntimeError("Could not stop instance")

    return True


def delete_instance(instance_id):

    ec2.terminate_instances(
        InstanceIds=[
            instance_id,
        ],
    )

    return True


def handler(event, context):
    print(event)
    responseData = {}
    properties = event["ResourceProperties"]["properties"]
    uid = event["ResourceProperties"]["uid"]
    logger.info(f"Starting Custom Resource for UID: {uid} with properties: {properties}")
    if event["RequestType"] == "Create":
        try:
            stop_instance(event["ResourceProperties"]["properties"]["instanceId"])
            responseData["imageId"], responseData["imageName"] = create_ami(uid, **properties)
            if event["ResourceProperties"]["properties"]["deleteInstance"] == "true":
                delete_instance(event["ResourceProperties"]["properties"]["instanceId"])
            return {"PhysicalResourceId": uid, "Data": responseData}
        except Exception as e:
            error = {"error": f"Exception thrown: {e}"}
            print(error)
            raise Exception(error)
    if event["RequestType"] == "Update":
        responseData = {"Message": "Update is no-op. Returning success status."}
        return {"PhysicalResourceId": uid, "Data": responseData}

    if event["RequestType"] == "Delete":
        if event["ResourceProperties"]["properties"]["deleteAmi"] == "true":
            logger.info("Deleting AMI")
            responseData["Message"] = "AMI Deleted"
            delete_ami(uid)
        else:
            responseData["Message"] = "AMI Retained"
        return {"Data": responseData}
