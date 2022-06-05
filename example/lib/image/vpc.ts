import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class VPC extends Construct {
  public ec2Role: iam.Role;
  public vpc: ec2.Vpc;
  public securityGroup: ec2.SecurityGroup;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.vpc = new ec2.Vpc(this, 'VPC', {
      natGateways: 0,
      subnetConfiguration: [
        {
          cidrMask: 24,
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
    });

    this.securityGroup = new ec2.SecurityGroup(this, 'ExmapleSecurityGroup', {
      vpc: this.vpc,
      description: 'Security Group',
      allowAllOutbound: true,
    });
    this.securityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(22),
      'SSH Access',
    );

    this.ec2Role = new iam.Role(this, 'ec2Role', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          'AmazonSSMManagedInstanceCore',
        ),
      ],
    });
  }
}
