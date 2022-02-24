# Resume_Project_AWS
MyResume

Deployed an HTML resume as AWS S3 static website. Configured AWS CloudFront and OAI to make the S3 website URL to use HTTPS.

Configure AWS Route 53 for a custom domain name and point to the CloudFront distribution.

Developed a JavaScript snippet to call an AWS API Gateway with AWS Lambda as the backend, to retrieve and update the visitor count in a DynamoDB database.

In addition to configuring the services via AWS Console, I redeveloped the entire backend through Infrastructure as Code: Define the API resources, IAM Roles & Policies, DynamoDB table, API Gateway and, Lambda function in an AWS CloudFormation template
