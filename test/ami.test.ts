import * as cdk from 'aws-cdk-lib';
import { CreateAMI, ResourceType, VolumeType } from '../src';

const app = new cdk.App();
const stack = new cdk.Stack(app, 'testing-stack', {
  env: {
    region: 'us-east-1',
    account: '1234567890123',
  },
});

test('GoodAMI', () => {
  new CreateAMI(stack, 'GoodAMI', {
    instanceId: 'instanceId',
    deleteAmi: true,
    deleteInstance: true,
    blockDeviceMappings: [
      {
        deviceName: '/dev/sdh',
        ebs: {
          volumeSize: 20,
          volumeType: VolumeType.GP3,
          deleteOnTermination: true,
        },
      },
    ],
    tagSpecifications: [
      {
        resourceType: ResourceType.IMAGE,
        tags: [{ key: 'TagKey', value: 'TagValue' }],
      },
    ],
  });
});
