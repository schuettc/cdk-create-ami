import { App, Stack, StackProps, CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { VPC, Instance } from '.';
import * as ami from 'cdk-create-ami';

export class AMIExample extends Stack {
  constructor(scope: Construct, id: string, props: StackProps) {
    super(scope, id, props);

    const vpc = new VPC(this, 'VPC');
    const ec2Instance = new Instance(this, 'Instance', {
      vpc: vpc.vpc,
      securityGroup: vpc.securityGroup,
      ec2Role: vpc.ec2Role,
    });

    const amiImage = new ami.CreateAMI(this, 'amiImage', {
      instanceId: ec2Instance.instanceId,
    });
    new CfnOutput(this, 'instanceId', { value: ec2Instance.instanceId });
    new CfnOutput(this, 'imageId', { value: amiImage.imageId });
  }
}
