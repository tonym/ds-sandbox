provider "aws" {
  alias = "east"
}

module "gemini_acm_certificate" {
  display_name   = "Gemini ACM Cert"
  domain_name    = "gemini.opensesame.com"
  hosted_zone_id = module.gemini_hosted_zone.instance.id
  providers      = { aws = aws.east }
  source         = "git@github.com:OpenSesame/core-terraform-modules.git//modules/aws-acm-certificate?ref=v3.1.1"
}

module "gemini_hosted_zone" {
  hosted_zone_name = "gemini.opensesame.com"
  prevent_destroy  = true
  source           = "git@github.com:OpenSesame/core-terraform-modules.git//modules/aws-dns-zone?ref=v3.1.1"
}

module "gemini_static_spa_website" {
  source              = "git@github.com:OpenSesame/core-terraform-modules.git//modules/aws-static-spa-website?ref=v3.1.1"
  acm_certificate_arn = module.gemini_acm_certificate.instance.id
  dns_zone_id         = module.gemini_hosted_zone.instance.id
  site_domain         = "gemini.opensesame.com"
}
