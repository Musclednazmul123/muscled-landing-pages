import { Controller, Get, Query, Render, Req } from '@nestjs/common';


@Controller()
export class AppController {
  @Render("services-for-paid-social-media-ad")
  @Get()
  public index(@Query('name') name?: string) {
    return { name };
  }

  @Render("about")
  @Get("/about")
  public about() {
    return {};
  }

  @Render("contact")
  @Get("/contact")
  public contact() {
    return {};
  }

  @Render('professional-website-copywriting-offers')
  @Get('/digital-marketing/services/professional-website-copywriting-offers')
  public professionalWebsiteCopywritingOffers() {
    return {};
  }
  @Render('seo-marketing-services')
  @Get('/digial-marketing/services/seo-marketing')
  public seoMarketingServices() {
    return {};
  }

  @Render("seo-audit-services")
  @Get("/digial-marketing/services/seo-audit")
  public seoAuditServices() {
    return {};
  }

  @Render("speed-optimization-services")
  @Get("/speed-optimization-services")
  public speedOptimizationServices() {
    return {};
  }

  @Render('services-for-paid-social-media-ad')
  @Get('/ecommerce/services/social-media-paid-ads')
  public servicesForPaidSocialMediaAd() {
    return {};
  }

  @Render("enterprise-social-media-advertising-services")
  @Get("/digial-marketing/services/enterprise-social-media-advertising")
  public enterpriseSocialMediaAdvertisingServices() {
    return {};
  }

  @Render('social-media-services')
  @Get('/digial-marketing/services/social-media')
  public socialMediaServices() {
    return {};
  }

  @Render("social-media-design")
  @Get("/social-media-design")
  public socialMediaDesign() {
    return {};
  }

  @Render('ecommerce-seo-services')
  @Get('/ecommerce/services/seo')
  public ecommerceSeoServices() {
    return {};
  }

  @Render("ecommerce-ppc-management")
  @Get("/ecommerce/services/ppc-management")
  public ecommercePpcManagement() {
    return {};
  }

  @Render('muscled-d2c-social-advertising-services')
  @Get('/digial-marketing/services/muscled-d2c-social-advertising')
  public muscledD2cSocialAdvertisingServices() {
    return {};
  }

  @Render('social-media-marketing-cost')
  @Get('/social-media-marketing-cost')
  public socialMediaMarketingCost() {
    return {};
  }

  @Render('muscled-website-rainmaker')
  @Get('/digital-marketing/services/muscled-website-rainmaker')
  public interactive() {
    return {};
  }

  @Render('ux-analysis-services')
  @Get('/web/services/ui-ux-analysis')
  public uxAnalysisServices() {
    return {};
  }

  @Render('landing-page-design-services')
  @Get('/web/services/landing-page-design')
  public landingPageDesignServices() {
    return {};
  }

  @Render('website-price')
  @Get('home/information/website-price')
  public websitePrice() {}

  @Render('social-advertising-services')
  @Get('/digital-marketing/services/social-advertising')
  public socialAdvertisingServices() {
    return {};
  }

  @Render('digital-marketing')
  @Get('/digital-marketing')
  public digitalMarketingServices() {
    return {};
  }

  @Render('web-development-services')
  @Get('/web/services/web-development')
  public webDevelopmentServices(@Req() req: Request): { url: string } {
    return {
      url: req?.url,
    };
  }

  @Render('shopify-dev-services')
  @Get('/ecommerce/services/shopify-development')
  public shopifyDevServices() {
    return {};
  }

  @Render('cro-services')
  @Get('/ecommerce/services/coversion-rate-optimization')
  public croServices() {
    return {};
  }

  @Render('cms-development-services')
  @Get('/web/services/cms-development')
  public cmsDevelopmentServices() {
    return {};
  }
  
  @Render('website-redesign-services')
  @Get('/web/services/website-redesign')
  public websiteredesignservices() {
    return {}
  }

  @Render("website-design-service")
  @Get("/web/services/website-design")
  public websiteDesignService() {
    return {};
  }
  
  @Render('website-maintenance')
  @Get('/web/services/website-maintenance')
  public websiteMaintenance() {
    return {}
  }

  @Render('muscled-proposal-form')
  @Get('/get-proposal/form')
  public muscledProposalForm() {
    return {}
  }
}
