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
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
    return d


def modify_tag_specifications(d):
    for k, v in d.copy().items():
        if isinstance(v, dict):
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
            modify_tag_specifications(v)
        else:
            d.pop(k)
            d[f"{k[0].upper() +k[1:]}"] = v
    return d


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
        params["BlockDeviceMapping"] = fixed_block_device_mappings
    if tagSpecifications:
        fixed_tag_specifications = []
        for tag_specification in tagSpecifications:
            fixed_tag_specifications.append(modify_tag_specifications(tag_specification))
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

    try:
        ssm.put_parameter(
            Name="/createAMI/imageId" + uid,
            Description="imageId",
            Overwrite=True,
            Value=image_id,
            Type="String",
        )
    except Exception as e:
        error = {"error": f"Exception thrown: {e}"}
        logger.error(error)
        raise RuntimeError(error)

    return image_id


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
    instance_status = ec2.describe_instance_status(InstanceIds=[instance_id,])["InstanceStatus"][0][
        "InstanceState"
    ]["Name"]

    logger.info(f"Current status: {instance_status}")
    timeout = 0
    while not instance_status == "stopped":
        timeout += 1
        time.sleep(5)
        instance_status = ec2.describe_instance_status(InstanceIds=[instance_id,], MaxResults=1,)["InstanceStatus"][0][
            "InstanceState"
        ]["Name"]
        logger.info(f"Current status: {instance_status}")
        if timeout == 15:
            raise RuntimeError("Could not stop instance")

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
            responseData = create_ami(uid, **properties)
            return {"PhysicalResourceId": uid, "Data": responseData}
        except Exception as e:
            error = {"error": f"Exception thrown: {e}"}
            print(error)
            raise Exception(error)

    else:
        responseData = {"Message": "Update and Delete are no-op. Returning success status."}
        return {"PhysicalResourceId": uid, "Data": responseData}
