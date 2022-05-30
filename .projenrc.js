const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Court Schuett',
  authorAddress: 'schuettc@amazon.com',
  cdkVersion: '2.24.0',
  defaultReleaseBranch: 'main',
  releaseToNpm: true,
  eslintOptions: {
    ignorePatterns: ['example/**'],
  },
  workflowNodeVersion: '16.13.1',
  devDeps: ['yalc@1.0.0-pre.53', '@types/prettier@2.6.0'],
  depsUpgradeOptions: {
    ignoreProjen: false,
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['schuettc', 'cdklabs-automation'],
  },
  autoApproveUpgrades: true,
  name: 'schuettc@cdk-create-ami',
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
