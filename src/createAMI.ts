import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CreateAMICustomResource } from './customResource';

export enum VolumeType {
  STANDARD = 'standard',
  IO1 = 'io1',
  IO2 = 'io2',
  GP2 = 'gp2',
  SC1 = 'sc1',
  ST1 = 'st1',
  GP3 = 'gp3',
}

export enum ResourceType {
  IMAGE = 'image',
  SNAPSHOT = 'snapshot',
}

export interface CreateAMIProps {
  readonly description?: string;
  readonly instanceId: string;
  readonly name?: string;
  readonly blockDeviceMappings?: Array<BlockDeviceMapping>;
  readonly tagSpecifications?: Array<TagSpecification>;
  readonly deleteInstance?: boolean;
  readonly deleteAmi?: boolean;
}

export interface BlockDeviceMapping {
  readonly deviceName?: string;
  readonly virtualName?: string;
  readonly ebs?: Ebs;
  readonly noDevice?: string;
}

export interface Ebs {
  readonly deleteOnTermination?: boolean;
  readonly iops?: number;
  readonly snapshotId?: string;
  readonly volumeSize?: number;
  readonly volumeType?: VolumeType;
  readonly kmsKeyId?: string;
  readonly throughput?: number;
  readonly outpostArn?: string;
  readonly encrypted?: boolean;
}

export interface Tags {
  readonly key: string;
  readonly value: string;
}

export interface TagSpecification {
  readonly resourceType?: ResourceType;
  readonly tags?: Array<Tags>;
}

export class CreateAMI extends Construct {
  public readonly imageId: string;
  public readonly imageName: string;
  constructor(scope: Construct, id: string, props: CreateAMIProps) {
    super(scope, id);

    const uid: string = cdk.Names.uniqueId(this);

    const {
      description,
      instanceId,
      name,
      blockDeviceMappings,
      tagSpecifications,
      deleteInstance,
      deleteAmi,
    } = props;

    const createAMIRequest = new CreateAMICustomResource(
      this,
      'createAMIRequest',
      {
        uid: uid,
        properties: {
          description: description,
          instanceId: instanceId,
          dryRun: false,
          name: name ?? uid,
          noReboot: false,
          blockDeviceMappings: blockDeviceMappings,
          tagSpecifications: tagSpecifications,
          deleteInstance: deleteInstance ?? false,
          deleteAmi: deleteAmi ?? false,
        },
      },
    );

    this.imageId =
      createAMIRequest.createAMICustomResource.getAttString('imageId');
    this.imageName =
      createAMIRequest.createAMICustomResource.getAttString('imageName');
  }
}
