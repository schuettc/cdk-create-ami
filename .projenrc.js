const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Court Schuett',
  authorAddress: 'https://subaud.io',
  cdkVersion: '2.27.0',
  defaultReleaseBranch: 'main',
  keywords: ['cdk', 'ec2', 'ami'],
  releaseToNpm: true,
  workflowNodeVersion: '16.13.1',
  eslintOptions: {
    ignorePatterns: ['example/**'],
  },
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  docgen: true,
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
  devDeps: ['yalc@1.0.0-pre.53', '@types/prettier@2.6.0'],
  repositoryUrl: 'https://github.com/schuettc/cdk-create-ami.git',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',
});
const common_exclude = [
  'cdk.out',
  'cdk.context.json',
  'yarn-error.log',
  'dependabot.yml',
];

project.npmignore.exclude(...common_exclude);
project.gitignore.exclude(...common_exclude);
project.gitignore.include('example');

project.synth();
