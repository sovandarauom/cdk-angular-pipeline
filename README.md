# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## Useful links

* [Create connection with Github](https://docs.aws.amazon.com/dtconsole/latest/userguide/connections-create-github.html)

## Deployment Steps

- Create S3 bucket to store webapp assets
- Create Github connection
- Update `config/PipelineConfig.ts`
- Deploy cdk stack


## Sample Config

```
export const PipelineConfig: IPipelineConfig = {
    sourceStage: {
        repositoryName: '<your-repositoty>',
        branchName: '<your-branch>',
        owner: '<repository-owner>',
        codestarArn: '<arn:aws:codestar-connections>'
    },
    buildStage: {
        buildCommand: 'npm run build',
        s3Bucket: '<s3-bucketname>',
        s3BucketRegion: 'ap-southeast-1'
    },
}
```