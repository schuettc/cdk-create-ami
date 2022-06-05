import { Stack, CfnOutput, Names } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { VPC, BaseInstance } from '.';
import * as ami from 'cdk-create-ami';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export class AMIExample extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const vpc = new VPC(this, 'VPC');
    const baseInstance = new BaseInstance(this, 'Instance', {
      vpc: vpc.vpc,
      securityGroup: vpc.securityGroup,
      ec2Role: vpc.ec2Role,
    });

    const amiImage = new ami.CreateAMI(this, 'amiImage', {
      instanceId: baseInstance.instanceId,
      deleteAmi: true,
      deleteInstance: true,
      blockDeviceMappings: [
        {
          deviceName: '/dev/sdh',
          ebs: {
            volumeSize: 20,
            volumeType: ami.VolumeType.GP3,
            deleteOnTermination: true,
          },
        },
      ],
      tagSpecifications: [
        {
          resourceType: ami.ResourceType.IMAGE,
          tags: [{ key: 'TagKey', value: 'TagValue' }],
        },
      ],
    });

    new CfnOutput(this, 'baseInstanceId', {
      value: baseInstance.instanceId,
    });
    new CfnOutput(this, 'imageId', { value: amiImage.imageId });
    new CfnOutput(this, 'imageName', {
      value: amiImage.imageName,
      exportName: 'imageName',
    });
    new CfnOutput(this, 'vpcId', {
      value: vpc.vpc.vpcId,
    });
  }
}
