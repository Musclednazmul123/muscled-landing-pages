

import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Render,
  Req
} from '@nestjs/common'
import { Services } from './services.module'

@Controller('/services')
export class ServicesController {
  constructor(private service: Services) {}

  @Get()
  public async index() {
    return { message:"Success" }
  }
  @Render('professional-website-copywriting-offers')
  @Get('/professional-website-copywriting-offers')
  public professionalWebsiteCopywritingOffers() {
    return {};
  }

  @Render('seo-marketing-services')
  @Get('/seo-marketing')
  public seoMarketingServices() {
    return {};

  }
  @Render("seo-audit-services")
  @Get("/seo-audit")
  public seoAuditServices() {
    return {};
  }

  @Render("speed-optimization-services")
  @Get("/speed-optimization-services")
  public speedOptimizationServices() {
    return {};
  }
  @Render('services-for-paid-social-media-ad')
  @Get('/social-media-paid-ads')
  public servicesForPaidSocialMediaAd() {
    return {};
  }

  @Render("enterprise-social-media-advertising-services")
  @Get("/enterprise-social-media-advertising")
  public enterpriseSocialMediaAdvertisingServices() {
    return {};
  }
  @Render('social-media-services')
  @Get('/social-media')
  public socialMediaServices() {
    return {};
  }

  @Render("social-media-design")
  @Get("/social-media-design")
  public socialMediaDesign() {
    return {};
  }

  @Render('ecommerce-seo-services')
  @Get('/ecommerce-seo-services')
  public ecommerceSeoServices() {
    return {};
  }

  @Render("ecommerce-ppc-management")
  @Get("/ecommerce-ppc-management")
  public ecommercePpcManagement() {
    return {};
  }
  @Render('muscled-d2c-social-advertising-services')
  @Get('/d2c-social-advertising')
  public muscledD2cSocialAdvertisingServices() {
    return {};
  }

  @Render('muscled-website-rainmaker')
  @Get('/muscled-website-rainmaker')
  public interactive() {
    return {};
  }

  @Render('ux-analysis-services')
  @Get('/ui-ux-analysis')
  public uxAnalysisServices() {
    return {};
  }
  @Render('landing-page-design-services')
  @Get('/landing-page-design')
  public landingPageDesignServices() {
    return {};
  }
  @Render('social-advertising-services')
  @Get('/social-advertising')
  public socialAdvertisingServices() {
    return {};
  }

  @Render('digital-marketing')
  @Get('/digital-marketing')
  public digitalMarketingServices() {
    return {};
  }
  @Render('web-development-services')
  @Get('/web-development')
  public webDevelopmentServices(@Req() req: Request): { url: string } {
    return {
      url: req?.url,
    };
  }

  @Render('shopify-dev-services')
  @Get('/shopify-development')
  public shopifyDevServices() {
    return {};
  }

  @Render('cro-services')
  @Get('/coversion-rate-optimization')
  public croServices() {
    return {};
  }

  @Render('cms-development-services')
  @Get('/cms-development')
  public cmsDevelopmentServices() {
    return {};
  }
  
  @Render('website-redesign-services')
  @Get('/website-redesign')
  public websiteredesignservices() {
    return {}
  }

  @Render("website-design-service")
  @Get("/website-design")
  public websiteDesignService() {
    return {};
  }
  
  @Render('website-maintenance')
  @Get('/website-maintenance')
  public websiteMaintenance() {
    return {}
  }
}
