import { Controller, Get, Query, Render } from '@nestjs/common';


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

  

 

  @Render('social-media-marketing-cost')
  @Get('/social-media-marketing-cost')
  public socialMediaMarketingCost() {
    return {};
  }

  @Render('website-price')
  @Get('home/information/website-price')
  public websitePrice() {}
}
