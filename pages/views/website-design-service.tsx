import React, { useState } from "react";
import { NextPage } from "next/";
import { Section, Testimonial } from "components/Fawwaz/Sections";
import Button from "components/Fawwaz/Button";
import {
  Hero14,
  Input,
  Buttons,
  WebsiteDesignService,
  TableOfContent,
  CarteServices,
  InputRange,
  OverBuild,
  Pricing,
  OurPartners,
  DesignSevices,
} from "components/page14components";
import Covertion from "components/assets/Covertion.png";
import UxTesting from "components/assets/UxTesting.png";
import UserShop from "components/assets/UserShop.png";
import UserTurn from "components/assets/UserTurn.png";
import Critical from "components/assets/Critical.png";
import Direction from "components/assets/Direction.png";
import Increase from "components/assets/Increase.png";

import {
  ChevronDoubleRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

const Page: NextPage = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      {/* Hero Section */}
      <Hero14
        title="Get a Custom Site That's Mobile and SEO Optimized with Website Design Services"
        desc="With an award-winning design team, Muscled is a top web design
        company that builds cutting-edge, profitable websites that capture
        your brand, boost conversion rates, and help you reach your
        objectives."
        HeroIcon={WebsiteDesignService}
      >
        <Input
          placeholder="Use calculator"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
          className={
            "w-[184px] bg-white h-[60px] placeholder:text-black placeholder:text-xl placeholder:font-normal py-4 px-5 rounded-xs"
          }
        />
        <Buttons
          title="Send me a quote"
          width="w-[253px]"
          height="h-[63px]"
          className="ml-[10px] text-xl font-[600]"
          onClick={() => console.log("buttons clicked")}
        />
      </Hero14>

      {/* Our Partners Section */}
      <OurPartners />

      {/* Design Sevices Section */}
      <DesignSevices />

      {/* Testimonial Section */}
      <Testimonial />

      {/* Pricing Table Section */}
      <Section className="w-[996px] mx-auto my-21">
        <Pricing
          title={"Get a Free Quote Now Making use of our web design calculator"}
          desc={`For a free, immediate quote, enter your needs into the sliders below and then click the "See Pricing" button. You'll get an overall range outlining how much it may cost to have such a website carried up because we\'ll give you both low and high end estimates for each service category.`}
        >
          <InputRange inputText="10 - 50" inputTitle="Amount of pages" />
          <InputRange
            inputTitle="Design"
            inputText="Simple yet appealing"
            width={310}
            left={"15%"}
          />
          <InputRange
            inputText="5 - 10"
            inputTitle="Pages in a copywriting project"
          />
          <InputRange inputTitle="SEO " inputText="30 - 50" />
          <InputRange inputTitle="Adaptive Design" inputText="Yes" left="40%" />
          <InputRange inputTitle="Integration of databases" inputText="Basic" />
          <InputRange inputTitle="Ecommerce capabilities" inputText="Simple" />
          <InputRange inputTitle="CMS" inputText="Standard" left="23%" />
        </Pricing>

        <div className="w-full my-7">
          <Button
            textColor="text-white"
            bgColor="bg-black"
            className="mx-auto text-xl w-[234px] font-[500] h-[60px]"
          >
            See Pricing
          </Button>
        </div>
      </Section>
      {/* End Pricing Table */}

      <Section className="flex justify-between">
        <div className="h-[1680px] flex flex-col justify-between text-xl w-[760px] mr-5">
          <h3 className="text-normal">
            Muscled's website design services are an investment in the success
            of your site.{" "}
          </h3>
          <p>
            When you invest in our professional website design services, you
            will receive a website that’s:
          </p>
          <ul className="pl-5 list-decimal">
            <li>responsive (sometimes called mobile-friendly)</li>
            <li>Designed with search engine optimization in mind (SEO) </li>
            <li>Secure (HTTPS) </li>
            <li>Stylistically appealing </li>
            Unique
          </ul>
          <p>
            As part of the design of your expert website, you can incorporate
            extra functions. For instance, you can ask our experts to add
            e-commerce capabilities, incorporate a database into your design,
            and more.
          </p>

          <h3 className="text-normal">
            Award-winning web design services with open pricing{" "}
          </h3>
          <p>
            If you choose our Web Design Services, your company can rely on
            complete openness. Our staff gives your business full access to our
            web design costs and methods, from our personalised quotations
            through our earliest designs.
          </p>
          <p>
            Use our simple calculator to get a free, precise, and immediate
            price quote for our web design and development services.{" "}
          </p>
          <p>
            We provide quick web design services if you need to quickly launch a
            newly renovated or entirely new website. For this service,
            collaborate with our multi-award-winning team of web designers, and
            they'll build a website for your company in 30 days.
          </p>
          <h3 className="text-normal">Our collection of websites </h3>
          <p>
            Interested in our work? Below are a sample of the more than 1000
            websites we have designed. or check out our entire portfolio!
          </p>
          <OverBuild />
        </div>

        {/* Table of content */}
        <TableOfContent
          content={[
            "Muscled’s website design services are an investment in the success of your site.",
            "Award-winning web design. with open pricing.",
            "Our collectionof websites.",
            "What is included in Muscled’s Web Design servises.",
            "Why use Muscled as your website design partner?",
            "How Are Websites Designed by Muscled?",
            "Why use Muscled as your website design partner?",
            "Get Your Company a Website That is Focused on Performance.",
          ]}
          IconTable={<ChevronDoubleRightIcon />}
          IconContent={<ChevronDownIcon />}
        />
        {/* End Table of content */}
      </Section>

      <Section className="h-[19650px] w-[760px] flex flex-start flex-col justify-between text-xl mx-24 mt-7">
        <h3 className="text-normal">
          What is included in Muscled's web design services?{" "}
        </h3>
        <p>
          Our staff customises our web Design Services to your company's
          specific requirements. Because of this, you can adjust every component
          of our services to suit your business, your products or services, and
          your objectives. The end result is a website that both your business
          and visitors adore.
        </p>
        <Link href="">
          <a>Find out more about our web design offerings</a>
        </Link>
        <h4>MarketingCloudFX </h4>
        <p>
          You want to do more than launch a beautiful site. You want to launch a
          beautiful, revenue-driving site.
        </p>
        <p>
          That’s why we developed MarketingCloudFX, our proprietary revenue
          acceleration platform that helps you:
        </p>
        <p>
          That’s why we developed MarketingCloudFX, our proprietary revenue
          acceleration platform that helps you:
        </p>
        <ul className="pl-5 list-decimal">
          <li>
            Store first-party data from your website so you can create marketing
            strategies that are more intelligent and successful.{" "}
          </li>
          <li>
            Determine the effectiveness of your website by tracking calls,
            leads, and sales.{" "}
          </li>
          <li>
            Adapt your website to each user's company, industry, location, and
            other information.{" "}
          </li>
          <li>
            Increase the conversion rates on your website using recordings,
            analytics, and other methods.{" "}
          </li>
        </ul>
        <p>
          You'll have access to MarketingCloudFX and all of its advantages with
          the help of our web design services.
        </p>
        <h4>SEO</h4>
        <p>
          By making sure your website adheres to SEO best practises, we maximise
          the outcomes of your website design or overhaul plan and enhance your
          digital marketing strategy. The term "SEO" refers to a broad range of
          methods used to raise your website's position in pertinent search
          results.
        </p>{" "}
        <p>
          Higher visibility among users in your target audience is correlated
          with higher rankings in search results. Your website can receive more
          hits and traffic from high-value visitors if it is more visible in
          pertinent search results. This can lead to an increase in store
          visits, online purchases, quote requests, and other activities.
        </p>{" "}
        <p>
          We also offer search engine optimization as part of our website design
          services because of this. Our SEO web design firm works together to
          ensure that your website not only looks great but also performs well
          in search results.
        </p>
        <h4>Webpages</h4>
        <p>
          You can count on our designers to construct each page of your website
          when you use our web design services.
        </p>
        <p>
          {" "}
          Our designers can produce the webpages your business needs to reach,
          educate, and convert your target audience, whether you run an
          e-commerce store, a brick-and-mortar establishment, or a service
          provider. We provide content marketing services as a full-service
          digital marketing agency to strengthen your strategy.
        </p>
        <p>
          {" "}
          There are five tiers for the amount of web pages in our cost
          calculator for web design:
        </p>
        <ul className="pl-5 list-decimal">
          <li>1 to 10</li>
          <li>10 to 50</li>
          <li>50 to 150</li>
          <li>150 to 250</li>
          <li>250+</li>
        </ul>
        <h4>What if you require a great deal more pages than 250? </h4>
        <p>
          Simply get in touch with us online or request a precise quotation
          using our project quote calculator. Whether your site requires 300,
          500, or more pages, our skilled strategists will give you a tailored
          plan and estimate.{" "}
        </p>
        <p>
          If you're unsure of how many webpages your website requires, you may
          also contact our team. When it comes to web design, they may offer
          years of experience, reliable recommendations, and advise. Call us at
          888-601-5359 to have a conversation.
        </p>
        <h4>Personalized Design </h4>
        <p>
          Your website must accurately represent your brand, which is why we
          provide an infinite number of design alternatives as part of our web
          design services. Our staff may, for instance, create a sophisticated
          design for your business that highlights the high quality and
          affordable range of your products.
        </p>
        <h5> Other examples out of website designs include:</h5>
        <ul className="pl-5 list-disc">
          <li>Simple and aesthetic</li>
          <li>reasonable styling</li>
          <li>High-end World-class</li>
          <li>Top-range</li>
          <li>State-of-the-art</li>
        </ul>
        <p>
          To provide you a precise quotation estimate, our web design quote
          calculator offers these four styles in addition to a no styling
          option. No one wants a website that is a replica of another, so we
          don't restrict you to these five choices.{" "}
        </p>
        <p>
          When getting a quote online or speaking with one of our strategists,
          we invite you to mention your preferred fashions. Your committed
          project manager will take the time to become familiar with your
          company, your objectives, and your vision. This makes it possible for
          our team of award-winning web designers to develop a unique,
          personalised website.
        </p>
        <h4>Copywriting for Websites </h4>
        <p>
          Along with our web design services, we also provide website
          copywriting for optimum impact. Our crew of copywriters is skilled and
          knowledgeable. We can produce appealing copy that captivates and
          converts website visitors thanks to their knowledge in both technical
          and non-technical businesses.{" "}
        </p>
        <h5>
          We provide three levels of website copywriting, which are as follows:
        </h5>
        <ul className="pl-5 list-disc">
          <li>5-10 pages</li>
          <li>10-25 pages</li>
          <li>25-50 pages</li>
        </ul>
        <p>
          If you require more than 50 pages, we can adjust your quote and design
          strategy accordingly.{" "}
        </p>
        <p>
          We optimise the copy on your website for SEO as part of our website
          copywriting services. Why does that matter? Our copywriters optimise
          your websites using high-value, pertinent keywords that our digital
          marketing professionals have researched for your company, sector, and
          website.{" "}
        </p>
        <p>
          Your website shows up near the top of search results when customers
          use those terms in their searches. That's a huge benefit considering
          that over 30% of all search traffic goes to the first search result
          and that 75% of people don't click through to the second page of
          search results.
        </p>
        <h4>Adaptive Design </h4>
        <p>
          Responsive design is an additional option for our website design
          services. However, we advise responsive design because it accommodates
          mobile users, such as customers who browse the web on their tablet or
          smartphone. <br /> The need to serve consumers on the go is critical
          given that more than 50% of Internet traffic is generated by mobile
          devices. As Google now uses a mobile-first index, which means it
          crawls and views websites from the perspective of a mobile user rather
          than a desktop user, it is also recommended practise for SEO. <br />{" "}
          Google notices if your website doesn't support mobile visitors – and
          changes your ranking in search results. Because of this, your website
          may rank lower, moving it to page two of search results and further
          from your target market.
        </p>
        <p>
          That won't happen to your company thanks to our responsive design
          option.
        </p>
        <h4>Integration of Databases</h4>
        <p>
          A database is a common component on business websites, for example,
          when processing payments. We offer comprehensive database integration
          help, which we divide into three categories: basic, advanced, and full
          development. You can choose "none" on the cost calculator if your
          company doesn't need a database integration.
          <p>
            {" "}
            Our team of designers and engineers collaborate closely with your
            business as part of our database integration services to ensure that
            we create and introduce the precise database that your business
            requires and desires.
          </p>
          <p>
            {" "}
            Uncertain of the type of database integration your business
            requires? Speak with one of our skilled strategists. They can make a
            suggestion and work with our web designers to make sure you get what
            your company requires.
          </p>
        </p>
        <h4>Ecommerce Capabilities </h4>
        <p>
          We also provide deliverables for ecommerce organisations' ecommerce
          capabilities. We provide three tiers—basic, advanced, and
          enterprise—much like our database integration service. You can speak
          with one of our skilled strategists if you're unclear which level will
          yield the best benefits for your company.{" "}
        </p>
        <p>
          {" "}
          With their knowledge, they can assist you in choosing the tier that
          will be most beneficial for your company. Additionally, our
          strategists can collaborate with a designer and developer to determine
          which tier will offer the highest return on investment (ROI) and user
          experience, whether it be the basic, advanced, or enterprise tier
          (UX).
        </p>
        <h4>Managing content (CMS)</h4>
        <p>
          Another optional extra for our web design services is a CMS. As part
          of our web design services, our team frequently suggests a CMS. We
          provide regular, advanced, and enterprise CMS tiers. A typical CMS
          frequently works, depending on your business and its size.
        </p>
        <p>
          {" "}
          A CMS is incredibly valuable whether you have an informational or
          e-commerce website. It can aid in managing and streamlining your
          company's content, enhancing the effectiveness of your content
          marketing plan.{" "}
        </p>
        <p>
          {" "}
          Contact us online, however, for the most precise recommendation and
          estimate.
        </p>
        <p>
          {" "}
          We can meet your precise site design requirements because we are a
          full-service digital marketing agency. We can offer an unrivalled
          level of personalisation in web design because to our ability to adapt
          every part of our services to your business.
        </p>
        <h3>Why spend money on expert Web Design Services?</h3>
        <p>
          There are a number of things to take into account if you're not sure
          about the worth of expert web design services. You could boost your
          conversion rates, competition, and search ranking, for instance. All
          of these outcomes have the potential to directly and favourably affect
          your revenue, market share, and expansion.
        </p>
        <p>
          Below are the advantages of Web Design Services in greater detail:
        </p>{" "}
        <h4>Boost your conversion rate:</h4>
        <p>
          A conversion can be anything from a customer making a purchase to a
          user subscribing to an email newsletter; it depends on your business
          and your objectives. Web design services can assist you with whatever
          conversion goals you may have.
        </p>
        <p>Why?</p>
        <p>
          Most conversions today involve or connect to an online interaction.
          For instance, you might want to employ local SEO to increase in-store
          traffic as 80 percent of local searches result in a conversion. This
          will probably include consumers interacting with your website.
        </p>
        <div>
          <img src={Covertion.src} alt={Covertion.src} />
        </div>
        <p>
          You can make a good first impression on customers with a user-friendly
          website that is intuitive and current. Users may be more likely to
          convert as a result, whether they visit your business the following
          day, get in touch with a member of your staff for a quote, or sign up
          for your email newsletter.
        </p>
        <h4>2. Enhance User Experience:</h4>
        <p>
          The user experience of a website provides businesses with a
          significant return on investment (ROI) — $100 for every $1 invested,
          on average. Since nearly 90% of consumers shop with a rival after a
          bad user experience, it can also deal a devastating blow to businesses
          who overlook UX testing.
        </p>
        <div>
          <img src={UxTesting.src} alt={UxTesting.src} />
        </div>
        <p>
          Your company can give customers the greatest experience possible with
          the help of expert web design services. For instance, our staff can
          enhance your website's readability and usability on both desktop and
          mobile devices. Because of this, it is simple for customers to get the
          information they require and take action.
        </p>
        <p>
          {" "}
          This activity could be anything from going to your business to buying
          your thing.
        </p>
        <h4>3. Increase your competitive advantage:</h4>
        <p>
          {" "}
          You have a direct opponent in every industry, thus your business needs
          to have a competitive advantage. Even if you have a better service and
          product, your competitive advantages could be obscured by an
          unreliable website.
        </p>
        <p>
          {" "}
          With the help of our website design services, you can make sure that
          your business makes the best possible first impression on visitors. By
          highlighting how superior your product or service is, you can further
          ensure that your company stands out from rivals in your sector.
        </p>
        <div>
          <img src={UserShop.src} alt={UserShop.src} />
        </div>
        <p>
          It's a competitive market, for instance, if you run a pest treatment
          business and are trying to create leads. However, by making an
          investment in a user-friendly website, you can make it simple for
          potential leads to get in touch with your business.
        </p>
        <p>
          {" "}
          Since 89 percent of consumers buy with a rival following a bad user
          experience, your business can profit from this situation. That is a
          huge benefit for your company, giving you the opportunity to boost
          sales and market share with only a small website makeover or upgrade.
        </p>
        <h4>4. Boost your Search Engine Results:</h4>
        <p>
          {" "}
          Users rely on search to find the services and products they're looking
          for, whether they're searching on a tablet, smartphone, or desktop.
          Because of this, Google handles over two trillion searches annually,
          and 80% of consumers utilise search when they are in need of anything.
        </p>
        <p>
          {" "}
          However, connecting with those customers is challenging if your
          website doesn't appear on the first page of search results. Because of
          this, SEO plays a crucial role in web marketing. Ranking your website
          will increase conversions, sales, and subscriber numbers.
        </p>
        <div>
          <img src={UserTurn.src} alt={UserTurn.src} />
        </div>
        <p>
          You may make sure your website ranks for keywords or search terms
          related to your business using best-in-class SEO services and expert
          Web Design Services. Additionally, you guarantee that users get the
          greatest experience possible on your website.
        </p>
        <p>
          {" "}
          For instance, you would wish to rank for the keywords "landscape
          design minneapolis" or "landscaping minneapolis" if you offer
          landscaping services in Minneapolis, Minnesota. You would probably
          develop a website that is optimised for this keyword, depending on
          your plan.
        </p>
        <p>
          {" "}
          With the help of our design concepts and optimization techniques, this
          webpage is probably going to show up on the first page of search
          results. This makes it possible for your business to convert
          high-value consumers in your target market from leads to customers.
        </p>
        <h5>5. Improve Your Approach to Digital Marketing:</h5>
        <p>
          {" "}
          Your website serves as your base of operations when it comes to
          digital marketing. You direct users there whether they come from
          search engine results, social media, or some other source. Maintaining
          an effective and current website that can help your digital marketing
          strategies is therefore essential.
        </p>
        <div>
          <img src={Critical.src} alt={Critical.src} />
        </div>
        <p>
          Your company can enhance the outcomes of its other Internet marketing
          techniques with such a strong website. For instance, by improving your
          website's usability, if you employ email marketing, you can improve
          the number of subscribers you receive through the sign-up forms on
          your website.
        </p>
        <p>
          {" "}
          Pay-per-click (PPC) advertising serves as another illustration. Our
          team can create landing pages for your PPC campaign that are optimised
          for conversions thanks to our design and marketing know-how. By doing
          so, you may maximise the ROI of your PPC campaign.
        </p>
        <h3>How Are Websites Designed by Muscled? </h3>
        <p>
          Our 360-degree web design services at Muscled include the following:
        </p>
        <ul className="pl-5 list-disc">
          <li>layout creation</li>
          <li>Generation of content</li>
          <li>Conversion rate improvement</li>
          <li>UX research</li>
          <li>
            Plus, we offer a money-back guarantee with all of our website design
            services.
          </li>
        </ul>
        <p>
          But how do we develop our prestigious websites? by adhering to the
          five web design tenets.
        </p>
        <h4>Appearance </h4>
        <p>
          The first step in gaining new consumers is building a stunning
          website.
        </p>
        <p>
          {" "}
          Visitors learn more about your business from the look of your website
          than they do from the content. A website that uses contemporary design
          features, optimised photos, and other multimedia converts visitors
          considerably more effectively than one that appears like it was
          created in 1996.
        </p>
        <p>
          {" "}
          As a result, your website's aesthetic is extremely important to its
          success!
        </p>
        <p>
          {" "}
          Including responsive design on your site is another aspect of this.
        </p>
        <p>
          {" "}
          With the use of responsive design, your website may automatically
          adjust its size to meet any screen size. Therefore, visitors to your
          site will still have a wonderful, user-friendly experience whether
          they're using an iPhone or a 27-inch desktop display.
        </p>
        <p>
          {" "}
          The first stage in acquiring a new customer is that experience, which
          is frequently referred to as user experience. It's simple to retain
          users on your site when they notice how slick and appealing it is. But
          a visually appealing website is just the start. Also required is
          straightforward navigation.
        </p>
        <h4>Navigation</h4>
        <p>
          The section of your website's navigation that helps visitors locate
          what they're looking for.
        </p>
        <p>
          {" "}
          To work on desktops and mobile devices, modern websites have
          streamlined their navigation. The breadcrumb is one of the most
          well-liked and useful navigational components. Check out the
          illustration below for an illustration of a breadcrumb.
        </p>
        <p>
          {" "}
          Because it links to each page a visitor visits as they browse your
          website, breadcrumb navigation earned its name. It is similar to how
          Hansel and Gretel in their fairy tale left a trail of breadcrumbs for
          the reader to follow.
        </p>
        <p>
          {" "}
          Users of your website can return to any page they've previously seen
          by using the breadcrumb navigation. So, if you run an online store,
          you can enable one-click navigation from a product page to a category
          page.
        </p>
        <p>
          {" "}
          You can use breadcrumbs to direct visitors from information pages to
          index pages if your business relies on lead generation so they can
          read and learn more about the same subject.
        </p>
        <p>
          {" "}
          A breadcrumb menu, for instance, might be used in a manufacturing
          website design to direct customers from general to specific services,
          such as coating services and then coating services for particular
          materials. Users may quickly return to the main service page and
          locate the service they require thanks to the breadcrumb menu.
        </p>
        <p>
          {" "}
          But breadcrumbs are only the start. Mega menus, like the one in our
          header, are another option. Large text, links to information centres,
          and supplementary links to specialised topics are all included in
          these menus.
        </p>
        <p>
          {" "}
          There is no right or wrong response because there are hundreds of
          distinct navigational methods accessible. When it comes to giving your
          users a fantastic experience, it's all about what works for your
          brand.
        </p>
        <p>
          {" "}
          Another advantage of giving them a wonderful experience is that you
          keep their attention.
        </p>
        <h4>Attention </h4>
        {/* <ul className="pl-5 list-disc"> */}
        <ul className="pl-6 list-disc">
          <li>
            {" "}
            It's essential to hold a visitor's interest after they land on your
            website. If you falter, the visitor will abandon your website and
            you won't get the sale.
          </li>
        </ul>
        <ul className="pl-6 list-disc">
          <li>
            {" "}
            Because it retains someone's attention on your company, products, or
            services, attention is valuable. Therefore, you need someone to
            visit your website in order to make a sale.
          </li>
        </ul>
        <ul className="pl-6 list-disc">
          <li>
            {" "}
            In light of this, many businesses can capture interest in various
            ways, such as:
          </li>
        </ul>
        <ul className="pl-6 list-disc">
          <li>
            {" "}
            Video content - Given that video is a visually stimulating medium,
            video marketing is very successful at grabbing someone's attention.
            Using video instead of making viewers read lengthy pages of text
            allows you to concisely explain complicated ideas in a matter of
            minutes. Text can become monotonous after a short while, but videos
            keep viewers interested the entire time.
          </li>
        </ul>
        <ul className="pl-6 list-disc">
          <li>
            {" "}
            Downloads - Another excellent technique to hold someone's interest
            is to provide them downloadable content. The majority of downloads
            can come in the form of a text-based PDF that is jam-packed with
            insider knowledge or a resource-filled.zip file. Because you can
            gate it and require an email address before someone can download the
            papers, this content is excellent for generating new leads as well.
          </li>
        </ul>
        <ul className="pl-6 list-disc">
          <li>
            {" "}
            Infographics - By providing industry-related data with streamlined,
            clear representations, infographics maintain viewers' attention. You
            may still gain traffic, attention, and links for infographics even
            when there are hundreds of new ones published every day by pushing
            yourself to a higher standard of quality than your rivals.
          </li>
        </ul>
        <ul className="pl-6 list-disc">
          <li>
            {" "}
            It's time to provide your visitors a sense of direction on your page
            after you have their attention.
          </li>
        </ul>
        {/* </ul> */}
        <h4>Direction </h4>
        <p>
          The term "direction" relates to pointing out how a user might go
          forward on your page; often, this instructs a user to scroll down your
          page. The most popular method of progression on websites is vertical
          scrolling since it is straightforward, easy to use, and practical.
        </p>
        <p>
          {" "}
          The problem arises when your mobile site design incorporates vertical
          scrolling.
        </p>
        <div>
          <img src={Direction.src} alt={Direction.src} />
        </div>
        <p>
          Mobile users use your fingers to navigate your page, whereas desktop
          users use a mouse or scrollbar. As a result, visitors of your
          mobile-friendly pages can scroll just like those of your desktop
          version by simply tapping, holding, and swiping.
        </p>
        <p>
          {" "}
          The responsive design principle is referenced by this design element.
        </p>
        <p>
          {" "}
          All of your website visitors may have the same wonderful experience
          thanks to responsive design, but how they do so differs greatly. Your
          desktop-compatible website may include a header with huge navigation,
          a lot of drop-down menus, and large, attention-grabbing graphics.
        </p>
        <p> But for a mobile site, that is too much content in one place.</p>
        <p>
          {" "}
          An alternative navigation method for mobile sites is the hamburger
          menu, which enables visitors to tap a button to open a menu and select
          their next page from there. The name of the hamburger menu comes from
          its recognisable icon. It may resemble something like this, which you
          might recognise:
        </p>
        <p>
          {" "}
          Mobile customers may access any area of your website easily with a
          hamburger menu.
        </p>
        <h4>Action</h4>
        <p>
          The ultimate objective of bringing any new visitor to your website is
          action. But if you don't motivate visitors, they won't act! The
          implementation of calls-to-action (CTAs) at the conclusion of each
          page on your website is crucial for this reason.
        </p>
        <p>
          {" "}
          A CTA serves as instructions, outlining what site visitors should do
          next to move the conversion process along. Despite the fact that it
          may sound arrogant, studies show that CTAs significantly enhance
          conversions across all online business models, from lead generation to
          charitable donations.
        </p>
        <p>
          {" "}
          CTAs must be included in your web design if you want to encourage
          visitors to contact you or make a purchase. Because of this, our team
          of copywriters creates effective CTAs to support your online marketing
          objectives, such as raising the number of email subscribers or driving
          more sales.
        </p>
        <div>
          <img src={Increase.src} alt={Increase.src} />
        </div>
        <p>
          CTAs come in the following varieties: The Muscled web design team has
          perfected the process of creating performance-driven websites, which
          involves time, revisions, and editing. Our web designers will build a
          website that adheres to these five principles in your best interests
          in order to ensure your success online.
        </p>
        <ul className="pl-5 list-disc">
          <li> Links in text</li>
          <li> Picture links</li>
          <li>Buttons</li>
          <li> Form fields</li>
          <li> Many more</li>
        </ul>
        <h3>Why use Muscled as your website design partner?</h3>
        <p>There is a reason why companies pick Muscled:</p>
        <h4>Highly Successful Design Team:</h4>
        <p>
          We showcase some of the top web designers in the business, and their
          work has garnered more than 50 accolades. When you work with Muscled
          for our website design services, you have full access to the skills of
          our designers, resulting in a unique and cutting-edge site that
          generates results.
        </p>
        <h4>More Than 50 awards For Web Design:</h4>
        <p>
          We truly mean it when we state that we work with a group of talented
          designers. We competed against thousands of other great web designers
          to win Best in Category, Gold, Silver, and Bronze honours for the
          websites of our clients, and we have since won more than 50 accolades
          for web design.
        </p>
        <h4>Long-term Experience:</h4>
        <p>
          One of the most experienced web design businesses is Muscled, which
          has more than 25 years of experience. We differ from other agencies
          due to our knowledge and enthusiasm for web design. Additionally, our
          expertise shows that we are able to pick up new skills and adjust to
          the most recent industry norms.
        </p>
        <h4>Hundreds of Pleased Customers:</h4>
        <p>
          We work with customers in a variety of sectors, such as manufacturing,
          e-commerce, health, and more. Our clients' satisfaction is unmatched,
          which is why we have a client recommendation score that is 488 percent
          greater than the industry standard.
        </p>
        <h4>Professional Project Managers:</h4>
        <p>
          We provide a dedicated project manager as part of our web design
          services for your company. Like our web designers, they function as an
          extension of your team, getting to know your company, your objectives,
          and your website vision. The outcome? a website that perfectly
          encapsulates your business.
        </p>
        <h4>Individualized Web Designs:</h4>
        <p>
          Every website service package we offer is customised to meet the
          specific requirements of your business since we value a personalised
          approach to our web design services. Even if you select our quick web
          design option, we make sure your website accurately reflects your
          branding and fulfils your objectives and vision.
        </p>
        <h3>Get Your Company a Website That is Focused on Performance.</h3>
        <p>
          {" "}
          Are you prepared to build a website that increases sales and customer
          satisfaction?
        </p>
        <p>
          Choose Muscled and our acclaimed Horizon Award-winning design team to
          help your website achieve its highest levels of traffic, conversions,
          and revenue.
        </p>
        <p>
          To chat with a skilled strategist, reach out to us online or at
          888-601-5359.
        </p>
      </Section>

      {/* Services carte */}
      <div className="flex justify-between mx-24 my-24">
        <CarteServices
          services={[
            "Website Optimization Services",
            "SEO Speed Optimization Pricing",
            "SEO Audit",
            "Convertion Rate Optimization",
          ]}
        />

        <CarteServices
          services={[
            "Digital Marketing Services",
            "SEO Service Packages",
            "PPC",
            "Website SEO Copywriting",
            "All Internet Marketing Services",
          ]}
        />

        <CarteServices
          services={[
            "SEO Design Services",
            "SEO Web Design Company",
            "Web Video Production",
            "",
            "",
          ]}
        />
      </div>
      {/* End Services carte */}
    </div>
  );
};

export default Page;
