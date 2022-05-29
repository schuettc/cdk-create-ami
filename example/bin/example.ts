#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AMIExample } from '../lib/main';

const app = new cdk.App();
new AMIExample(app, 'AMIExample', {});
