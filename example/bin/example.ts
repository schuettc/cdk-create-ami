#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AMIExample } from '../lib/image/main';
import { InstanceExample } from '../lib/instance/main';

const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();
new AMIExample(app, 'AMIExample');
new InstanceExample(app, 'InstanceExample', { env: devEnv });
