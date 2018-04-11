export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'roe-notes-uploads'
  },
  apiGateway: {
    REGION: 's-east-1',
    URL: 'https://3fgnmjahlg.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 's-east-1',
    USER_POOL_ID: 'us-east-1_1FCQpGbdl',
    APP_CLIENT_ID: '1oj309j4tu6484sgl5m5gvv4du',
    IDENTITY_POOL_ID: 'us-east-1:5615f2f1-625e-44cd-ae67-1d885cb5ad7d'
  }
};