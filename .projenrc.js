const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Court Schuett',
  authorAddress: 'schuettc@amazon.com',
  cdkVersion: '2.25.0',
  defaultReleaseBranch: 'main',
  releaseToNpm: true,
  eslintOptions: {
    ignorePatterns: ['example/**'],
  },
  docgen: true,
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
  name: '@schuettc/cdk-create-ami',

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
