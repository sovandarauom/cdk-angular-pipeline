import { IPipelineConfig } from "../lib/interface/IPipelineConfig";

export const PipelineConfig: IPipelineConfig = {
    sourceStage: {
        repositoryName: 'cdk-angular-pipeline',
        branchName: 'main',
        owner: 'sovandarauom',
        codestarArn: ''
    },
    buildStage: {
        buildCommand: 'npm run build',
        s3Bucket: 'cdk-angular-pipeline-webapp',
        s3BucketRegion: 'ap-southeast-1'
    },
}