# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CreateAMI <a name="CreateAMI" id="@schuettc/cdk-create-ami.CreateAMI"></a>

#### Initializers <a name="Initializers" id="@schuettc/cdk-create-ami.CreateAMI.Initializer"></a>

```typescript
import { CreateAMI } from '@schuettc/cdk-create-ami'

new CreateAMI(scope: Construct, id: string, props: CreateAMIProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMI.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMI.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMI.Initializer.parameter.props">props</a></code> | <code><a href="#@schuettc/cdk-create-ami.CreateAMIProps">CreateAMIProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@schuettc/cdk-create-ami.CreateAMI.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@schuettc/cdk-create-ami.CreateAMI.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@schuettc/cdk-create-ami.CreateAMI.Initializer.parameter.props"></a>

- *Type:* <a href="#@schuettc/cdk-create-ami.CreateAMIProps">CreateAMIProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMI.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@schuettc/cdk-create-ami.CreateAMI.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMI.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@schuettc/cdk-create-ami.CreateAMI.isConstruct"></a>

```typescript
import { CreateAMI } from '@schuettc/cdk-create-ami'

CreateAMI.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@schuettc/cdk-create-ami.CreateAMI.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMI.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMI.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@schuettc/cdk-create-ami.CreateAMI.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="@schuettc/cdk-create-ami.CreateAMI.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### BlockDeviceMapping <a name="BlockDeviceMapping" id="@schuettc/cdk-create-ami.BlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@schuettc/cdk-create-ami.BlockDeviceMapping.Initializer"></a>

```typescript
import { BlockDeviceMapping } from '@schuettc/cdk-create-ami'

const blockDeviceMapping: BlockDeviceMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.BlockDeviceMapping.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.BlockDeviceMapping.property.ebs">ebs</a></code> | <code><a href="#@schuettc/cdk-create-ami.Ebs">Ebs</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.BlockDeviceMapping.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.BlockDeviceMapping.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@schuettc/cdk-create-ami.BlockDeviceMapping.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@schuettc/cdk-create-ami.BlockDeviceMapping.property.ebs"></a>

```typescript
public readonly ebs: Ebs;
```

- *Type:* <a href="#@schuettc/cdk-create-ami.Ebs">Ebs</a>

---

##### `noDevice`<sup>Required</sup> <a name="noDevice" id="@schuettc/cdk-create-ami.BlockDeviceMapping.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Required</sup> <a name="virtualName" id="@schuettc/cdk-create-ami.BlockDeviceMapping.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

### CreateAMIProps <a name="CreateAMIProps" id="@schuettc/cdk-create-ami.CreateAMIProps"></a>

#### Initializer <a name="Initializer" id="@schuettc/cdk-create-ami.CreateAMIProps.Initializer"></a>

```typescript
import { CreateAMIProps } from '@schuettc/cdk-create-ami'

const createAMIProps: CreateAMIProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMIProps.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMIProps.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#@schuettc/cdk-create-ami.BlockDeviceMapping">BlockDeviceMapping</a>[]</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMIProps.property.deleteAmi">deleteAmi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMIProps.property.deleteInstance">deleteInstance</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMIProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMIProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.CreateAMIProps.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#@schuettc/cdk-create-ami.TagSpecification">TagSpecification</a>[]</code> | *No description.* |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@schuettc/cdk-create-ami.CreateAMIProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="@schuettc/cdk-create-ami.CreateAMIProps.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: BlockDeviceMapping[];
```

- *Type:* <a href="#@schuettc/cdk-create-ami.BlockDeviceMapping">BlockDeviceMapping</a>[]

---

##### `deleteAmi`<sup>Optional</sup> <a name="deleteAmi" id="@schuettc/cdk-create-ami.CreateAMIProps.property.deleteAmi"></a>

```typescript
public readonly deleteAmi: boolean;
```

- *Type:* boolean

---

##### `deleteInstance`<sup>Optional</sup> <a name="deleteInstance" id="@schuettc/cdk-create-ami.CreateAMIProps.property.deleteInstance"></a>

```typescript
public readonly deleteInstance: boolean;
```

- *Type:* boolean

---

##### `description`<sup>Optional</sup> <a name="description" id="@schuettc/cdk-create-ami.CreateAMIProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="@schuettc/cdk-create-ami.CreateAMIProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="@schuettc/cdk-create-ami.CreateAMIProps.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: TagSpecification[];
```

- *Type:* <a href="#@schuettc/cdk-create-ami.TagSpecification">TagSpecification</a>[]

---

### Ebs <a name="Ebs" id="@schuettc/cdk-create-ami.Ebs"></a>

#### Initializer <a name="Initializer" id="@schuettc/cdk-create-ami.Ebs.Initializer"></a>

```typescript
import { Ebs } from '@schuettc/cdk-create-ami'

const ebs: Ebs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.Ebs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.Ebs.property.encrypted">encrypted</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.Ebs.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.Ebs.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.Ebs.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.Ebs.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.Ebs.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.Ebs.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.Ebs.property.volumeType">volumeType</a></code> | <code><a href="#@schuettc/cdk-create-ami.VolumeType">VolumeType</a></code> | *No description.* |

---

##### `deleteOnTermination`<sup>Required</sup> <a name="deleteOnTermination" id="@schuettc/cdk-create-ami.Ebs.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean;
```

- *Type:* boolean

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@schuettc/cdk-create-ami.Ebs.property.encrypted"></a>

```typescript
public readonly encrypted: boolean;
```

- *Type:* boolean

---

##### `iops`<sup>Required</sup> <a name="iops" id="@schuettc/cdk-create-ami.Ebs.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@schuettc/cdk-create-ami.Ebs.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Required</sup> <a name="outpostArn" id="@schuettc/cdk-create-ami.Ebs.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@schuettc/cdk-create-ami.Ebs.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@schuettc/cdk-create-ami.Ebs.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@schuettc/cdk-create-ami.Ebs.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@schuettc/cdk-create-ami.Ebs.property.volumeType"></a>

```typescript
public readonly volumeType: VolumeType;
```

- *Type:* <a href="#@schuettc/cdk-create-ami.VolumeType">VolumeType</a>

---

### Tags <a name="Tags" id="@schuettc/cdk-create-ami.Tags"></a>

#### Initializer <a name="Initializer" id="@schuettc/cdk-create-ami.Tags.Initializer"></a>

```typescript
import { Tags } from '@schuettc/cdk-create-ami'

const tags: Tags = { ... }
```


### TagSpecification <a name="TagSpecification" id="@schuettc/cdk-create-ami.TagSpecification"></a>

#### Initializer <a name="Initializer" id="@schuettc/cdk-create-ami.TagSpecification.Initializer"></a>

```typescript
import { TagSpecification } from '@schuettc/cdk-create-ami'

const tagSpecification: TagSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.TagSpecification.property.resourceType">resourceType</a></code> | <code><a href="#@schuettc/cdk-create-ami.ResourceType">ResourceType</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.TagSpecification.property.tags">tags</a></code> | <code><a href="#@schuettc/cdk-create-ami.Tags">Tags</a>[]</code> | *No description.* |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@schuettc/cdk-create-ami.TagSpecification.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* <a href="#@schuettc/cdk-create-ami.ResourceType">ResourceType</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@schuettc/cdk-create-ami.TagSpecification.property.tags"></a>

```typescript
public readonly tags: Tags[];
```

- *Type:* <a href="#@schuettc/cdk-create-ami.Tags">Tags</a>[]

---



## Enums <a name="Enums" id="Enums"></a>

### ResourceType <a name="ResourceType" id="@schuettc/cdk-create-ami.ResourceType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.CAPACITY_RESERVATION">CAPACITY_RESERVATION</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.CLIENT_VPN_ENDPOINT">CLIENT_VPN_ENDPOINT</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.CUSTOMER_GATEWAY">CUSTOMER_GATEWAY</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.CARRIER_GATEWAY">CARRIER_GATEWAY</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.DEDICATED_HOST">DEDICATED_HOST</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.DHCP_OPTIONS">DHCP_OPTIONS</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.EGRESS_ONLY_INTERNET_GATEWAY">EGRESS_ONLY_INTERNET_GATEWAY</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.ELASTIC_IP">ELASTIC_IP</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.ELASTIC_GPU">ELASTIC_GPU</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.EXPORT_IMAGE_TASK">EXPORT_IMAGE_TASK</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.EPORT_INSTANCE_TASK">EPORT_INSTANCE_TASK</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.FLEET">FLEET</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.FPGA_IMAGE">FPGA_IMAGE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.HOST_RESERVATION">HOST_RESERVATION</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.IMAGE">IMAGE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.IMPORT_IMAGE_TASK">IMPORT_IMAGE_TASK</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.IMPORT_SNAPSHOT_TASK">IMPORT_SNAPSHOT_TASK</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.INSTANCE">INSTANCE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.INSTANCE_EVENT_WINDOW">INSTANCE_EVENT_WINDOW</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.INTERNET_GATEWAY">INTERNET_GATEWAY</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.IPAM">IPAM</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.IPAM_POOL">IPAM_POOL</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.IPAM_SCOPE">IPAM_SCOPE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.IPV4POOL_EC2">IPV4POOL_EC2</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.IPV6POOL_EC2">IPV6POOL_EC2</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.KEY_PAIR">KEY_PAIR</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.LAUNCH_TEMPLATE">LAUNCH_TEMPLATE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_ROUTE_TABLE">LOCAL_GATEWAY_ROUTE_TABLE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY">LOCAL_GATEWAY</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_VIRTUAL_INTERFACE">LOCAL_GATEWAY_VIRTUAL_INTERFACE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP">LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_ROUTE_TABLE_VPC_ASSOCIATION">LOCAL_GATEWAY_ROUTE_TABLE_VPC_ASSOCIATION</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP_ASSOCIATION">LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP_ASSOCIATION</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.NATGATEWAY">NATGATEWAY</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.NETWORK_ACL">NETWORK_ACL</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.NETWORK_INTERFACE">NETWORK_INTERFACE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.NETWORK_INSIGHTS_ANALYSIS">NETWORK_INSIGHTS_ANALYSIS</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.NETWORK_INSIGHTS_PATH">NETWORK_INSIGHTS_PATH</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.NETWORK_INSIGHTS_ACCESS_SCOPE">NETWORK_INSIGHTS_ACCESS_SCOPE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.NETWORK_INSIGHTS_ACCESS_SCOPE_ANALYSIS">NETWORK_INSIGHTS_ACCESS_SCOPE_ANALYSIS</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.PLACEMENT_GROUP">PLACEMENT_GROUP</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.PREFIX_LIST">PREFIX_LIST</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.REPLACE_ROOT_VALUE_TASK">REPLACE_ROOT_VALUE_TASK</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.RESERVED_INSTANCES">RESERVED_INSTANCES</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.ROUTE_TABLE">ROUTE_TABLE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.SECURITY_GROUP">SECURITY_GROUP</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.SECURITY_GROUP_RULE">SECURITY_GROUP_RULE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.SNAPSHOT">SNAPSHOT</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.SPOT_FLEET_REQUEST">SPOT_FLEET_REQUEST</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.SPOT_INSTANCES_REQUEST">SPOT_INSTANCES_REQUEST</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.SUBNET">SUBNET</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.SUBNET_CIDR_RESERVATION">SUBNET_CIDR_RESERVATION</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.TRAFFIC_MIRROR_FILTER">TRAFFIC_MIRROR_FILTER</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.TRAFFIC_MIRROR_SESSION">TRAFFIC_MIRROR_SESSION</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.TRAFFIC_MIRROR_TARGET">TRAFFIC_MIRROR_TARGET</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.TRANSIT_GATEWAY_ATTACHMENT">TRANSIT_GATEWAY_ATTACHMENT</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.TRANSIT_GATEWAY_CONNECT_PEER">TRANSIT_GATEWAY_CONNECT_PEER</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.TRANSIT_GATEWAY_MULTICAST_DOMAIN">TRANSIT_GATEWAY_MULTICAST_DOMAIN</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.TRANSITE_GATEWAY_ROUTE_TABLE">TRANSITE_GATEWAY_ROUTE_TABLE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.VOLUME">VOLUME</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.VPC">VPC</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.VPC_ENDPOINT">VPC_ENDPOINT</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.VPC_ENDPOINT_SERVICE">VPC_ENDPOINT_SERVICE</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.VPC_PEERING_CONNECTION">VPC_PEERING_CONNECTION</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.VPN_CONNECTION">VPN_CONNECTION</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.VPN_GATEWAY">VPN_GATEWAY</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.ResourceType.VPC_FLOW_LOG">VPC_FLOW_LOG</a></code> | *No description.* |

---

##### `CAPACITY_RESERVATION` <a name="CAPACITY_RESERVATION" id="@schuettc/cdk-create-ami.ResourceType.CAPACITY_RESERVATION"></a>

---


##### `CLIENT_VPN_ENDPOINT` <a name="CLIENT_VPN_ENDPOINT" id="@schuettc/cdk-create-ami.ResourceType.CLIENT_VPN_ENDPOINT"></a>

---


##### `CUSTOMER_GATEWAY` <a name="CUSTOMER_GATEWAY" id="@schuettc/cdk-create-ami.ResourceType.CUSTOMER_GATEWAY"></a>

---


##### `CARRIER_GATEWAY` <a name="CARRIER_GATEWAY" id="@schuettc/cdk-create-ami.ResourceType.CARRIER_GATEWAY"></a>

---


##### `DEDICATED_HOST` <a name="DEDICATED_HOST" id="@schuettc/cdk-create-ami.ResourceType.DEDICATED_HOST"></a>

---


##### `DHCP_OPTIONS` <a name="DHCP_OPTIONS" id="@schuettc/cdk-create-ami.ResourceType.DHCP_OPTIONS"></a>

---


##### `EGRESS_ONLY_INTERNET_GATEWAY` <a name="EGRESS_ONLY_INTERNET_GATEWAY" id="@schuettc/cdk-create-ami.ResourceType.EGRESS_ONLY_INTERNET_GATEWAY"></a>

---


##### `ELASTIC_IP` <a name="ELASTIC_IP" id="@schuettc/cdk-create-ami.ResourceType.ELASTIC_IP"></a>

---


##### `ELASTIC_GPU` <a name="ELASTIC_GPU" id="@schuettc/cdk-create-ami.ResourceType.ELASTIC_GPU"></a>

---


##### `EXPORT_IMAGE_TASK` <a name="EXPORT_IMAGE_TASK" id="@schuettc/cdk-create-ami.ResourceType.EXPORT_IMAGE_TASK"></a>

---


##### `EPORT_INSTANCE_TASK` <a name="EPORT_INSTANCE_TASK" id="@schuettc/cdk-create-ami.ResourceType.EPORT_INSTANCE_TASK"></a>

---


##### `FLEET` <a name="FLEET" id="@schuettc/cdk-create-ami.ResourceType.FLEET"></a>

---


##### `FPGA_IMAGE` <a name="FPGA_IMAGE" id="@schuettc/cdk-create-ami.ResourceType.FPGA_IMAGE"></a>

---


##### `HOST_RESERVATION` <a name="HOST_RESERVATION" id="@schuettc/cdk-create-ami.ResourceType.HOST_RESERVATION"></a>

---


##### `IMAGE` <a name="IMAGE" id="@schuettc/cdk-create-ami.ResourceType.IMAGE"></a>

---


##### `IMPORT_IMAGE_TASK` <a name="IMPORT_IMAGE_TASK" id="@schuettc/cdk-create-ami.ResourceType.IMPORT_IMAGE_TASK"></a>

---


##### `IMPORT_SNAPSHOT_TASK` <a name="IMPORT_SNAPSHOT_TASK" id="@schuettc/cdk-create-ami.ResourceType.IMPORT_SNAPSHOT_TASK"></a>

---


##### `INSTANCE` <a name="INSTANCE" id="@schuettc/cdk-create-ami.ResourceType.INSTANCE"></a>

---


##### `INSTANCE_EVENT_WINDOW` <a name="INSTANCE_EVENT_WINDOW" id="@schuettc/cdk-create-ami.ResourceType.INSTANCE_EVENT_WINDOW"></a>

---


##### `INTERNET_GATEWAY` <a name="INTERNET_GATEWAY" id="@schuettc/cdk-create-ami.ResourceType.INTERNET_GATEWAY"></a>

---


##### `IPAM` <a name="IPAM" id="@schuettc/cdk-create-ami.ResourceType.IPAM"></a>

---


##### `IPAM_POOL` <a name="IPAM_POOL" id="@schuettc/cdk-create-ami.ResourceType.IPAM_POOL"></a>

---


##### `IPAM_SCOPE` <a name="IPAM_SCOPE" id="@schuettc/cdk-create-ami.ResourceType.IPAM_SCOPE"></a>

---


##### `IPV4POOL_EC2` <a name="IPV4POOL_EC2" id="@schuettc/cdk-create-ami.ResourceType.IPV4POOL_EC2"></a>

---


##### `IPV6POOL_EC2` <a name="IPV6POOL_EC2" id="@schuettc/cdk-create-ami.ResourceType.IPV6POOL_EC2"></a>

---


##### `KEY_PAIR` <a name="KEY_PAIR" id="@schuettc/cdk-create-ami.ResourceType.KEY_PAIR"></a>

---


##### `LAUNCH_TEMPLATE` <a name="LAUNCH_TEMPLATE" id="@schuettc/cdk-create-ami.ResourceType.LAUNCH_TEMPLATE"></a>

---


##### `LOCAL_GATEWAY_ROUTE_TABLE` <a name="LOCAL_GATEWAY_ROUTE_TABLE" id="@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_ROUTE_TABLE"></a>

---


##### `LOCAL_GATEWAY` <a name="LOCAL_GATEWAY" id="@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY"></a>

---


##### `LOCAL_GATEWAY_VIRTUAL_INTERFACE` <a name="LOCAL_GATEWAY_VIRTUAL_INTERFACE" id="@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_VIRTUAL_INTERFACE"></a>

---


##### `LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP` <a name="LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP" id="@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP"></a>

---


##### `LOCAL_GATEWAY_ROUTE_TABLE_VPC_ASSOCIATION` <a name="LOCAL_GATEWAY_ROUTE_TABLE_VPC_ASSOCIATION" id="@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_ROUTE_TABLE_VPC_ASSOCIATION"></a>

---


##### `LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP_ASSOCIATION` <a name="LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP_ASSOCIATION" id="@schuettc/cdk-create-ami.ResourceType.LOCAL_GATEWAY_VIRTUAL_INTERFACE_GROUP_ASSOCIATION"></a>

---


##### `NATGATEWAY` <a name="NATGATEWAY" id="@schuettc/cdk-create-ami.ResourceType.NATGATEWAY"></a>

---


##### `NETWORK_ACL` <a name="NETWORK_ACL" id="@schuettc/cdk-create-ami.ResourceType.NETWORK_ACL"></a>

---


##### `NETWORK_INTERFACE` <a name="NETWORK_INTERFACE" id="@schuettc/cdk-create-ami.ResourceType.NETWORK_INTERFACE"></a>

---


##### `NETWORK_INSIGHTS_ANALYSIS` <a name="NETWORK_INSIGHTS_ANALYSIS" id="@schuettc/cdk-create-ami.ResourceType.NETWORK_INSIGHTS_ANALYSIS"></a>

---


##### `NETWORK_INSIGHTS_PATH` <a name="NETWORK_INSIGHTS_PATH" id="@schuettc/cdk-create-ami.ResourceType.NETWORK_INSIGHTS_PATH"></a>

---


##### `NETWORK_INSIGHTS_ACCESS_SCOPE` <a name="NETWORK_INSIGHTS_ACCESS_SCOPE" id="@schuettc/cdk-create-ami.ResourceType.NETWORK_INSIGHTS_ACCESS_SCOPE"></a>

---


##### `NETWORK_INSIGHTS_ACCESS_SCOPE_ANALYSIS` <a name="NETWORK_INSIGHTS_ACCESS_SCOPE_ANALYSIS" id="@schuettc/cdk-create-ami.ResourceType.NETWORK_INSIGHTS_ACCESS_SCOPE_ANALYSIS"></a>

---


##### `PLACEMENT_GROUP` <a name="PLACEMENT_GROUP" id="@schuettc/cdk-create-ami.ResourceType.PLACEMENT_GROUP"></a>

---


##### `PREFIX_LIST` <a name="PREFIX_LIST" id="@schuettc/cdk-create-ami.ResourceType.PREFIX_LIST"></a>

---


##### `REPLACE_ROOT_VALUE_TASK` <a name="REPLACE_ROOT_VALUE_TASK" id="@schuettc/cdk-create-ami.ResourceType.REPLACE_ROOT_VALUE_TASK"></a>

---


##### `RESERVED_INSTANCES` <a name="RESERVED_INSTANCES" id="@schuettc/cdk-create-ami.ResourceType.RESERVED_INSTANCES"></a>

---


##### `ROUTE_TABLE` <a name="ROUTE_TABLE" id="@schuettc/cdk-create-ami.ResourceType.ROUTE_TABLE"></a>

---


##### `SECURITY_GROUP` <a name="SECURITY_GROUP" id="@schuettc/cdk-create-ami.ResourceType.SECURITY_GROUP"></a>

---


##### `SECURITY_GROUP_RULE` <a name="SECURITY_GROUP_RULE" id="@schuettc/cdk-create-ami.ResourceType.SECURITY_GROUP_RULE"></a>

---


##### `SNAPSHOT` <a name="SNAPSHOT" id="@schuettc/cdk-create-ami.ResourceType.SNAPSHOT"></a>

---


##### `SPOT_FLEET_REQUEST` <a name="SPOT_FLEET_REQUEST" id="@schuettc/cdk-create-ami.ResourceType.SPOT_FLEET_REQUEST"></a>

---


##### `SPOT_INSTANCES_REQUEST` <a name="SPOT_INSTANCES_REQUEST" id="@schuettc/cdk-create-ami.ResourceType.SPOT_INSTANCES_REQUEST"></a>

---


##### `SUBNET` <a name="SUBNET" id="@schuettc/cdk-create-ami.ResourceType.SUBNET"></a>

---


##### `SUBNET_CIDR_RESERVATION` <a name="SUBNET_CIDR_RESERVATION" id="@schuettc/cdk-create-ami.ResourceType.SUBNET_CIDR_RESERVATION"></a>

---


##### `TRAFFIC_MIRROR_FILTER` <a name="TRAFFIC_MIRROR_FILTER" id="@schuettc/cdk-create-ami.ResourceType.TRAFFIC_MIRROR_FILTER"></a>

---


##### `TRAFFIC_MIRROR_SESSION` <a name="TRAFFIC_MIRROR_SESSION" id="@schuettc/cdk-create-ami.ResourceType.TRAFFIC_MIRROR_SESSION"></a>

---


##### `TRAFFIC_MIRROR_TARGET` <a name="TRAFFIC_MIRROR_TARGET" id="@schuettc/cdk-create-ami.ResourceType.TRAFFIC_MIRROR_TARGET"></a>

---


##### `TRANSIT_GATEWAY_ATTACHMENT` <a name="TRANSIT_GATEWAY_ATTACHMENT" id="@schuettc/cdk-create-ami.ResourceType.TRANSIT_GATEWAY_ATTACHMENT"></a>

---


##### `TRANSIT_GATEWAY_CONNECT_PEER` <a name="TRANSIT_GATEWAY_CONNECT_PEER" id="@schuettc/cdk-create-ami.ResourceType.TRANSIT_GATEWAY_CONNECT_PEER"></a>

---


##### `TRANSIT_GATEWAY_MULTICAST_DOMAIN` <a name="TRANSIT_GATEWAY_MULTICAST_DOMAIN" id="@schuettc/cdk-create-ami.ResourceType.TRANSIT_GATEWAY_MULTICAST_DOMAIN"></a>

---


##### `TRANSITE_GATEWAY_ROUTE_TABLE` <a name="TRANSITE_GATEWAY_ROUTE_TABLE" id="@schuettc/cdk-create-ami.ResourceType.TRANSITE_GATEWAY_ROUTE_TABLE"></a>

---


##### `VOLUME` <a name="VOLUME" id="@schuettc/cdk-create-ami.ResourceType.VOLUME"></a>

---


##### `VPC` <a name="VPC" id="@schuettc/cdk-create-ami.ResourceType.VPC"></a>

---


##### `VPC_ENDPOINT` <a name="VPC_ENDPOINT" id="@schuettc/cdk-create-ami.ResourceType.VPC_ENDPOINT"></a>

---


##### `VPC_ENDPOINT_SERVICE` <a name="VPC_ENDPOINT_SERVICE" id="@schuettc/cdk-create-ami.ResourceType.VPC_ENDPOINT_SERVICE"></a>

---


##### `VPC_PEERING_CONNECTION` <a name="VPC_PEERING_CONNECTION" id="@schuettc/cdk-create-ami.ResourceType.VPC_PEERING_CONNECTION"></a>

---


##### `VPN_CONNECTION` <a name="VPN_CONNECTION" id="@schuettc/cdk-create-ami.ResourceType.VPN_CONNECTION"></a>

---


##### `VPN_GATEWAY` <a name="VPN_GATEWAY" id="@schuettc/cdk-create-ami.ResourceType.VPN_GATEWAY"></a>

---


##### `VPC_FLOW_LOG` <a name="VPC_FLOW_LOG" id="@schuettc/cdk-create-ami.ResourceType.VPC_FLOW_LOG"></a>

---


### VolumeType <a name="VolumeType" id="@schuettc/cdk-create-ami.VolumeType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@schuettc/cdk-create-ami.VolumeType.STANDARD">STANDARD</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.VolumeType.IO1">IO1</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.VolumeType.IO2">IO2</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.VolumeType.GP2">GP2</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.VolumeType.SC1">SC1</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.VolumeType.ST1">ST1</a></code> | *No description.* |
| <code><a href="#@schuettc/cdk-create-ami.VolumeType.GP3">GP3</a></code> | *No description.* |

---

##### `STANDARD` <a name="STANDARD" id="@schuettc/cdk-create-ami.VolumeType.STANDARD"></a>

---


##### `IO1` <a name="IO1" id="@schuettc/cdk-create-ami.VolumeType.IO1"></a>

---


##### `IO2` <a name="IO2" id="@schuettc/cdk-create-ami.VolumeType.IO2"></a>

---


##### `GP2` <a name="GP2" id="@schuettc/cdk-create-ami.VolumeType.GP2"></a>

---


##### `SC1` <a name="SC1" id="@schuettc/cdk-create-ami.VolumeType.SC1"></a>

---


##### `ST1` <a name="ST1" id="@schuettc/cdk-create-ami.VolumeType.ST1"></a>

---


##### `GP3` <a name="GP3" id="@schuettc/cdk-create-ami.VolumeType.GP3"></a>

---

