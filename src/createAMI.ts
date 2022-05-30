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
  CAPACITY_RESERVATION = 'capacity-reservation',
  CLIENT_VPN_ENDPOINT = 'client-vpn-endpoint',
  CUSTOMER_GATEWAY = 'customer-gateway',
  CARRIER_GATEWAY = 'carrier-gateway',
  DEDICATED_HOST = 'dedicated-host',
  DHCP_OPTIONS = 'dhcp-options',
  EGRESS_ONLY_INTERNET_GATEWAY = 'egress-only-internet-gateway',
  ELASTIC_IP = 'elastic-ip',
  ELASTIC_GPU = 'elastic-gpu',
  EXPORT_IMAGE_TASK = 'export-image-task',
  EPORT_INSTANCE_TASK = 'export-instance-task',
  FLEET = 'fleet',
  FPGA_IMAGE = 'fpga-image',
  HOST_RESERVATION = 'host-reservation',
  IMAGE = 'image',
  IMPORT_IMAGE_TASK = 'import-image-task',
  IMPORT_SNAPSHOT_TASK = 'import-snapshot-task',
  INSTANCE = 'instance',
  INSTANCE_EVENT_WINDOW = 'instance-event-window',
  INTERNET_GATEWAY = 'internet-gateway',
  IPAM = 'ipam',
  IPAM_POOL = 'ipam-pool',
  IPAM_SCOPE = 'ipam-scope',
  IPV4POOL_EC2 = 'ipv4pool-ec2',
  IPV6POOL_EC2 = 'ipv6pool-ec2',
  KEY_PAIR = 'key-pair',
  LAUNCH_TEMPLATE = 'launch-template',
  LOCAL_GATEWAY_ROUTE_TABLE = 'local-gateway-route-table',
  LOCAL_GATEWAY = 'local-gateway',
  LOCAL_GATEWAY_VIRTUAL_INTERFACE = 'local-gateway-virtual-interface',
  LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP = 'local-gateway-virtual-interface-group',
  LOCAL_GATEWAY_ROUTE_TABLE_VPC_ASSOCIATION = 'local-gateway-route-table-vpc-association',
  LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP_ASSOCIATION = 'local-gateway-route-table-virtual-interface-group-association',
  NATGATEWAY = 'natgateway',
  NETWORK_ACL = 'network-acl',
  NETWORK_INTERFACE = 'network-interface',
  NETWORK_INSIGHTS_ANALYSIS = 'network-insights-analysis',
  NETWORK_INSIGHTS_PATH = 'network-insights-path',
  NETWORK_INSIGHTS_ACCESS_SCOPE = 'network-insights-access-scope',
  NETWORK_INSIGHTS_ACCESS_SCOPE_ANALYSIS = 'network-insights-access-scope-analysis',
  PLACEMENT_GROUP = 'placement-group',
  PREFIX_LIST = 'prefix-list',
  REPLACE_ROOT_VALUE_TASK = 'replace-root-volume-task',
  RESERVED_INSTANCES = 'reserved-instances',
  ROUTE_TABLE = 'route-table',
  SECURITY_GROUP = 'security-group',
  SECURITY_GROUP_RULE = 'security-group-rule',
  SNAPSHOT = 'snapshot',
  SPOT_FLEET_REQUEST = 'spot-fleet-request',
  SPOT_INSTANCES_REQUEST = 'spot-instances-request',
  SUBNET = 'subnet',
  SUBNET_CIDR_RESERVATION = 'subnet-cidr-reservation',
  TRAFFIC_MIRROR_FILTER = 'traffic-mirror-filter',
  TRAFFIC_MIRROR_SESSION = 'traffic-mirror-session',
  TRAFFIC_MIRROR_TARGET = 'traffic-mirror-target',
  TRANSIT_GATEWAY_ATTACHMENT = 'transit-gateway-attachment',
  TRANSIT_GATEWAY_CONNECT_PEER = 'transit-gateway-connect-peer',
  TRANSIT_GATEWAY_MULTICAST_DOMAIN = 'transit-gateway-multicast-domain',
  TRANSITE_GATEWAY_ROUTE_TABLE = 'transit-gateway-route-table',
  VOLUME = 'volume',
  VPC = 'vpc',
  VPC_ENDPOINT = 'vpc-endpoint',
  VPC_ENDPOINT_SERVICE = 'vpc-endpoint-service',
  VPC_PEERING_CONNECTION = 'vpc-peering-connection',
  VPN_CONNECTION = 'vpn-connection',
  VPN_GATEWAY = 'vpn-gateway',
  VPC_FLOW_LOG = 'vpc-flow-log',
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
  readonly deviceName: string;
  readonly virtualName: string;
  readonly ebs: Ebs;
  readonly noDevice: string;
}

export interface Ebs {
  readonly deleteOnTermination: boolean;
  readonly iops: number;
  readonly snapshotId: string;
  readonly volumeSize: number;
  readonly volumeType: VolumeType;
  readonly kmsKeyId: string;
  readonly throughput: number;
  readonly outpostArn: string;
  readonly encrypted: boolean;
}

export interface Tags {
  readonly [key: string]: string;
}

export interface TagSpecification {
  readonly resourceType: ResourceType;
  readonly tags: Array<Tags>;
}

export class CreateAMI extends Construct {
  public readonly imageId: string;

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
  }
}
