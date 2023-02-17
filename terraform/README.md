# Terraform

## Description
This directory holds the infrastructure that is specific to Gemini
* S3: The bucket where we push the build files up to
* Cloudfront: The CDN

## Structure
This directory only serves the `prod` environment. We do not have a `stage` or `dev` environment for this static site.

![](/assets/infrastructure/infrastructure.svg)