# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CreateAMI <a name="CreateAMI" id="cdk-create-ami.CreateAMI"></a>

#### Initializers <a name="Initializers" id="cdk-create-ami.CreateAMI.Initializer"></a>

```typescript
import { CreateAMI } from 'cdk-create-ami'

new CreateAMI(scope: Construct, id: string, props: CreateAMIProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-create-ami.CreateAMI.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdk-create-ami.CreateAMI.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.CreateAMI.Initializer.parameter.props">props</a></code> | <code><a href="#cdk-create-ami.CreateAMIProps">CreateAMIProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdk-create-ami.CreateAMI.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdk-create-ami.CreateAMI.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdk-create-ami.CreateAMI.Initializer.parameter.props"></a>

- *Type:* <a href="#cdk-create-ami.CreateAMIProps">CreateAMIProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-create-ami.CreateAMI.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdk-create-ami.CreateAMI.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-create-ami.CreateAMI.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdk-create-ami.CreateAMI.isConstruct"></a>

```typescript
import { CreateAMI } from 'cdk-create-ami'

CreateAMI.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdk-create-ami.CreateAMI.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-create-ami.CreateAMI.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdk-create-ami.CreateAMI.property.imageId">imageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.CreateAMI.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdk-create-ami.CreateAMI.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="cdk-create-ami.CreateAMI.property.imageId"></a>

```typescript
public readonly imageId: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="cdk-create-ami.CreateAMI.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### BlockDeviceMapping <a name="BlockDeviceMapping" id="cdk-create-ami.BlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="cdk-create-ami.BlockDeviceMapping.Initializer"></a>

```typescript
import { BlockDeviceMapping } from 'cdk-create-ami'

const blockDeviceMapping: BlockDeviceMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-create-ami.BlockDeviceMapping.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.BlockDeviceMapping.property.ebs">ebs</a></code> | <code><a href="#cdk-create-ami.Ebs">Ebs</a></code> | *No description.* |
| <code><a href="#cdk-create-ami.BlockDeviceMapping.property.noDevice">noDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.BlockDeviceMapping.property.virtualName">virtualName</a></code> | <code>string</code> | *No description.* |

---

##### `deviceName`<sup>Optional</sup> <a name="deviceName" id="cdk-create-ami.BlockDeviceMapping.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `ebs`<sup>Optional</sup> <a name="ebs" id="cdk-create-ami.BlockDeviceMapping.property.ebs"></a>

```typescript
public readonly ebs: Ebs;
```

- *Type:* <a href="#cdk-create-ami.Ebs">Ebs</a>

---

##### `noDevice`<sup>Optional</sup> <a name="noDevice" id="cdk-create-ami.BlockDeviceMapping.property.noDevice"></a>

```typescript
public readonly noDevice: string;
```

- *Type:* string

---

##### `virtualName`<sup>Optional</sup> <a name="virtualName" id="cdk-create-ami.BlockDeviceMapping.property.virtualName"></a>

```typescript
public readonly virtualName: string;
```

- *Type:* string

---

### CreateAMIProps <a name="CreateAMIProps" id="cdk-create-ami.CreateAMIProps"></a>

#### Initializer <a name="Initializer" id="cdk-create-ami.CreateAMIProps.Initializer"></a>

```typescript
import { CreateAMIProps } from 'cdk-create-ami'

const createAMIProps: CreateAMIProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-create-ami.CreateAMIProps.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.CreateAMIProps.property.blockDeviceMappings">blockDeviceMappings</a></code> | <code><a href="#cdk-create-ami.BlockDeviceMapping">BlockDeviceMapping</a>[]</code> | *No description.* |
| <code><a href="#cdk-create-ami.CreateAMIProps.property.deleteAmi">deleteAmi</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-create-ami.CreateAMIProps.property.deleteInstance">deleteInstance</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-create-ami.CreateAMIProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.CreateAMIProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.CreateAMIProps.property.tagSpecifications">tagSpecifications</a></code> | <code><a href="#cdk-create-ami.TagSpecification">TagSpecification</a>[]</code> | *No description.* |

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="cdk-create-ami.CreateAMIProps.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `blockDeviceMappings`<sup>Optional</sup> <a name="blockDeviceMappings" id="cdk-create-ami.CreateAMIProps.property.blockDeviceMappings"></a>

```typescript
public readonly blockDeviceMappings: BlockDeviceMapping[];
```

- *Type:* <a href="#cdk-create-ami.BlockDeviceMapping">BlockDeviceMapping</a>[]

---

##### `deleteAmi`<sup>Optional</sup> <a name="deleteAmi" id="cdk-create-ami.CreateAMIProps.property.deleteAmi"></a>

```typescript
public readonly deleteAmi: boolean;
```

- *Type:* boolean

---

##### `deleteInstance`<sup>Optional</sup> <a name="deleteInstance" id="cdk-create-ami.CreateAMIProps.property.deleteInstance"></a>

```typescript
public readonly deleteInstance: boolean;
```

- *Type:* boolean

---

##### `description`<sup>Optional</sup> <a name="description" id="cdk-create-ami.CreateAMIProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Optional</sup> <a name="name" id="cdk-create-ami.CreateAMIProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tagSpecifications`<sup>Optional</sup> <a name="tagSpecifications" id="cdk-create-ami.CreateAMIProps.property.tagSpecifications"></a>

```typescript
public readonly tagSpecifications: TagSpecification[];
```

- *Type:* <a href="#cdk-create-ami.TagSpecification">TagSpecification</a>[]

---

### Ebs <a name="Ebs" id="cdk-create-ami.Ebs"></a>

#### Initializer <a name="Initializer" id="cdk-create-ami.Ebs.Initializer"></a>

```typescript
import { Ebs } from 'cdk-create-ami'

const ebs: Ebs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-create-ami.Ebs.property.deleteOnTermination">deleteOnTermination</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-create-ami.Ebs.property.encrypted">encrypted</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdk-create-ami.Ebs.property.iops">iops</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-create-ami.Ebs.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.Ebs.property.outpostArn">outpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.Ebs.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.Ebs.property.throughput">throughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-create-ami.Ebs.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdk-create-ami.Ebs.property.volumeType">volumeType</a></code> | <code><a href="#cdk-create-ami.VolumeType">VolumeType</a></code> | *No description.* |

---

##### `deleteOnTermination`<sup>Optional</sup> <a name="deleteOnTermination" id="cdk-create-ami.Ebs.property.deleteOnTermination"></a>

```typescript
public readonly deleteOnTermination: boolean;
```

- *Type:* boolean

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="cdk-create-ami.Ebs.property.encrypted"></a>

```typescript
public readonly encrypted: boolean;
```

- *Type:* boolean

---

##### `iops`<sup>Optional</sup> <a name="iops" id="cdk-create-ami.Ebs.property.iops"></a>

```typescript
public readonly iops: number;
```

- *Type:* number

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="cdk-create-ami.Ebs.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `outpostArn`<sup>Optional</sup> <a name="outpostArn" id="cdk-create-ami.Ebs.property.outpostArn"></a>

```typescript
public readonly outpostArn: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="cdk-create-ami.Ebs.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `throughput`<sup>Optional</sup> <a name="throughput" id="cdk-create-ami.Ebs.property.throughput"></a>

```typescript
public readonly throughput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="cdk-create-ami.Ebs.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="cdk-create-ami.Ebs.property.volumeType"></a>

```typescript
public readonly volumeType: VolumeType;
```

- *Type:* <a href="#cdk-create-ami.VolumeType">VolumeType</a>

---

### Tags <a name="Tags" id="cdk-create-ami.Tags"></a>

#### Initializer <a name="Initializer" id="cdk-create-ami.Tags.Initializer"></a>

```typescript
import { Tags } from 'cdk-create-ami'

const tags: Tags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-create-ami.Tags.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdk-create-ami.Tags.property.value">value</a></code> | <code>string</code> | *No description.* |

---

##### `key`<sup>Required</sup> <a name="key" id="cdk-create-ami.Tags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="cdk-create-ami.Tags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

### TagSpecification <a name="TagSpecification" id="cdk-create-ami.TagSpecification"></a>

#### Initializer <a name="Initializer" id="cdk-create-ami.TagSpecification.Initializer"></a>

```typescript
import { TagSpecification } from 'cdk-create-ami'

const tagSpecification: TagSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdk-create-ami.TagSpecification.property.resourceType">resourceType</a></code> | <code><a href="#cdk-create-ami.ResourceType">ResourceType</a></code> | *No description.* |
| <code><a href="#cdk-create-ami.TagSpecification.property.tags">tags</a></code> | <code><a href="#cdk-create-ami.Tags">Tags</a>[]</code> | *No description.* |

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="cdk-create-ami.TagSpecification.property.resourceType"></a>

```typescript
public readonly resourceType: ResourceType;
```

- *Type:* <a href="#cdk-create-ami.ResourceType">ResourceType</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdk-create-ami.TagSpecification.property.tags"></a>

```typescript
public readonly tags: Tags[];
```

- *Type:* <a href="#cdk-create-ami.Tags">Tags</a>[]

---



## Enums <a name="Enums" id="Enums"></a>

### ResourceType <a name="ResourceType" id="cdk-create-ami.ResourceType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-create-ami.ResourceType.IMAGE">IMAGE</a></code> | *No description.* |
| <code><a href="#cdk-create-ami.ResourceType.SNAPSHOT">SNAPSHOT</a></code> | *No description.* |

---

##### `IMAGE` <a name="IMAGE" id="cdk-create-ami.ResourceType.IMAGE"></a>

---


##### `SNAPSHOT` <a name="SNAPSHOT" id="cdk-create-ami.ResourceType.SNAPSHOT"></a>

---


### VolumeType <a name="VolumeType" id="cdk-create-ami.VolumeType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdk-create-ami.VolumeType.STANDARD">STANDARD</a></code> | *No description.* |
| <code><a href="#cdk-create-ami.VolumeType.IO1">IO1</a></code> | *No description.* |
| <code><a href="#cdk-create-ami.VolumeType.IO2">IO2</a></code> | *No description.* |
| <code><a href="#cdk-create-ami.VolumeType.GP2">GP2</a></code> | *No description.* |
| <code><a href="#cdk-create-ami.VolumeType.SC1">SC1</a></code> | *No description.* |
| <code><a href="#cdk-create-ami.VolumeType.ST1">ST1</a></code> | *No description.* |
| <code><a href="#cdk-create-ami.VolumeType.GP3">GP3</a></code> | *No description.* |

---

##### `STANDARD` <a name="STANDARD" id="cdk-create-ami.VolumeType.STANDARD"></a>

---


##### `IO1` <a name="IO1" id="cdk-create-ami.VolumeType.IO1"></a>

---


##### `IO2` <a name="IO2" id="cdk-create-ami.VolumeType.IO2"></a>

---


##### `GP2` <a name="GP2" id="cdk-create-ami.VolumeType.GP2"></a>

---


##### `SC1` <a name="SC1" id="cdk-create-ami.VolumeType.SC1"></a>

---


##### `ST1` <a name="ST1" id="cdk-create-ami.VolumeType.ST1"></a>

---


##### `GP3` <a name="GP3" id="cdk-create-ami.VolumeType.GP3"></a>

---

