provider "aws" {
  region  = "us-west-2"
  profile = "catalog-prod-ops"
}

provider "aws" {
  alias   = "east"
  region  = "us-east-1"
  profile = "catalog-prod-ops"
}
terraform {
  required_version = "1.0.7"
  required_providers {
    aws = {
      version = "3.60.0"
    }
  }

  backend "s3" {
    bucket         = "os-catalog-prod-us-west-2-terraform-state"
    dynamodb_table = "os-catalog-prod-terraform-state-lock"
    encrypt        = true
    key            = "gemini/terraform.tfstate"
    region         = "us-west-2"
    profile        = "catalog-prod-ops"
  }
}

module "configuration" {
  source = "./modules/common-config"
  providers = {
    aws.east = aws.east
  }
}
