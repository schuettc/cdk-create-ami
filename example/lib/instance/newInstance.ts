import { Duration } from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import * as path from 'path';

interface NewInstanceProps {
  vpc: ec2.Vpc;
  securityGroup: ec2.SecurityGroup;
  ec2Role: iam.Role;
  imageName: string;
}
export class NewInstance extends Construct {
  public instanceId: string;

  constructor(scope: Construct, id: string, props: NewInstanceProps) {
    super(scope, id);
    console.log(props.imageName);
    const customAmi = ec2.MachineImage.lookup({
      name: props.imageName,
    });

    const ec2Instance = new ec2.Instance(this, 'Instance', {
      vpc: props.vpc,
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T4G,
        ec2.InstanceSize.MEDIUM,
      ),
      machineImage: customAmi,
      init: ec2.CloudFormationInit.fromConfigSets({
        configSets: {
          default: ['install'],
        },
        configs: {
          install: new ec2.InitConfig([
            ec2.InitFile.fromFileInline(
              '/home/ec2-user/install.sh',
              path.join(__dirname, '../../resources/new_install.sh'),
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
