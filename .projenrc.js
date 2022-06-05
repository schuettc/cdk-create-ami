const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Court Schuett',
  authorAddress: 'schuettc@amazon.com',
  cdkVersion: '2.27.0',
  defaultReleaseBranch: 'main',
  releaseToNpm: true,
  eslintOptions: {
    ignorePatterns: ['example/**'],
  },
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
  name: 'cdk-create-ami',
  devDeps: ['yalc@1.0.0-pre.53'],
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
