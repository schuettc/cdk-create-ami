const { awscdk } = require('projen');
const { UpgradeDependenciesSchedule } = require('projen/lib/javascript');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Court Schuett',
  projenrcTs: true,
  authorAddress: 'https://subaud.io',
  jest: false,
  cdkVersion: '2.100.0',
  defaultReleaseBranch: 'main',
  keywords: ['cdk', 'ec2', 'ami'],
  releaseToNpm: true,
  eslintOptions: {
    ignorePatterns: ['example/**'],
  },
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: UpgradeDependenciesSchedule.WEEKLY,
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['schuettc', 'cdklabs-automation'],
  },
  autoApproveUpgrades: true,
  python: {
    distName: 'cdk-create-ami',
    module: 'cdk_create_ami',
  },
  name: 'cdk-create-ami',
  repositoryUrl: 'https://github.com/schuettc/cdk-create-ami.git',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
});
const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'yarn-error.log',
  'dependabot.yml',
  'API.md',
];

project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);
project.gitignore.include('example');

project.synth();
