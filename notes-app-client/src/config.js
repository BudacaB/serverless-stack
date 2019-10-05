export default {
  s3: {
    REGION: "eu-central-1",
    BUCKET: "budaca-serverless-stack-notes-app-uploads"
  },
  apiGateway: {
    REGION: "eu-central-1",
    URL: "https://jmztbr9ts7.execute-api.eu-central-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "eu-central-1",
    USER_POOL_ID: "eu-central-1_7VONyLmLA",
    APP_CLIENT_ID: "2qtu9j4hkligp7uf4e4ndjhoq9",
    IDENTITY_POOL_ID: "eu-central-1:135ca93e-3215-4e3a-96a3-b792ffce5d0b"
  }
};
