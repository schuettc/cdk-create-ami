import { Duration } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import * as path from 'path';

interface BaseInstanceProps {
  vpc: ec2.Vpc;
  securityGroup: ec2.SecurityGroup;
  ec2Role: iam.Role;
}
export class BaseInstance extends Construct {
  public instanceId: string;

  constructor(scope: Construct, id: string, props: BaseInstanceProps) {
    super(scope, id);

    const ami = new ec2.AmazonLinuxImage({
      generation: ec2.AmazonLinuxGeneration.AMAZON_LINUX_2,
      cpuType: ec2.AmazonLinuxCpuType.ARM_64,
    });

    const ec2Instance = new ec2.Instance(this, 'Instance', {
      vpc: props.vpc,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T4G,
        ec2.InstanceSize.MEDIUM,
      ),
      machineImage: ami,
      init: ec2.CloudFormationInit.fromConfigSets({
        configSets: {
          default: ['install'],
        },
        configs: {
          install: new ec2.InitConfig([
            ec2.InitFile.fromFileInline(
              '/home/ec2-user/install.sh',
              path.join(__dirname, '../../resources/base_install.sh'),
            ),
            ec2.InitCommand.shellCommand('chmod +x /home/ec2-user/install.sh'),
            ec2.InitCommand.shellCommand(
              '/home/ec2-user/install.sh 2>&1 | tee /home/ec2-user/install.log',
            ),
          ]),
        },
      }),
      initOptions: {
        timeout: Duration.minutes(5),
        includeUrl: true,
        includeRole: true,
        printLog: true,
      },
      securityGroup: props.securityGroup,
      role: props.ec2Role,
    });

    this.instanceId = ec2Instance.instanceId;
  }
}
