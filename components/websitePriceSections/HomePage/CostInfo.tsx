import FlexLayout from "@/components/layout/FlexLayout";
import BlockQuote from "@/components/ui/BlockQuote";
import Button from "@/components/ui/Button";
import ArrowLeft from "@/components/ui/icons/ArrowLeft";
import ReactPlayerModal from "@/components/ReactPlayerModal";
import PlayIcon from "./GuideDetailsPlayerIcon";
import Table from "@/components/ui/Table";
import Link from "next/link";

const CostInfo = () => {
  return (
    <div className="space-y-16">
      <FlexLayout spaceClass="space-x-5 relative">
        <div className="w-[75%]">
          <h2 className="text-[40px] font-bold mb-8 w-[70%]">
            Costs of website design in 2022
          </h2>
          <p className="w-[80%] text-[20px] mb-5">
            Your firm must factor in some web design and development
            expenditures whether you want to build a whole new website or revamp
            your current one. These expenses are sometimes one-time, therefore
            the price of developing a website is frequently more than the price
            of keeping it up-to-date.
          </p>
          <Table
            headers={[
              "How much does it cost to build a website? Between $12,000 to $150,000.",
              "Web Design Costs",
            ]}
            rows={[
              ["Domain Name", "$0.95 – $12"],
              ["SSL Certificate", "$0 – $1,500"],
              ["Website Hosting", "$24 – $10,000"],
              ["Style or Theme", "$2,000 – $15,000"],
              ["Responsive Design", "$3,000 – $25,000"],
              ["Interactive Multimedia", "$250 – $10,000"],
              ["Content Management System (CMS)", "$2,000 – $25,000"],
              ["Ecommerce Functionality", "$2,000 – $25,000"],
              ["Database Integration", "$2,000 – $25,000"],
              ["Pages (1 to 250 pages)", "$1,000 – $10,000"],
            ]}
          />
          <p className="w-[80%] text-[20px] mt-5">
            Of course, there are freelancers, website builders, and web design
            firms you may pick from when it comes to web design and development.
            Each method of developing a website has distinct benefits and
            drawbacks, as well as various costs. To build a professional
            website, firms typically collaborate with a freelance web designer
            or a web design firm.
          </p>
          <h4 className="font-bold mt-8 text-[20px]">Why?</h4>
          <p className="w-[80%] text-[20px] my-4">
            You still need to have web design knowledge to use a third-party
            website builder like Wix or Squarespace. These DIY website builders
            can assist your team in developing a visually appealing website, but
            they cannot guarantee that the site will be user-friendly, which is
            essential if you want people to buy your product or get in touch
            with your business.
          </p>
          <Table
            headers={[
              "Explore the price differences between these three parties, below:",
              "Freelancer, Website Builder, and Web Design Agency Costs",
            ]}
            rows={[
              ["Website Builder", "$0 – $300"],
              ["Freelancer", "$500 – $5,000"],
              ["Web Design Agency", "$3,000 – $100,000"],
            ]}
          />
          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            Do you want to know more about upfront website fees, including what
            they entail and how much you should shell out?
          </h4>
          <p className="w-[80%] text-[20px] my-4">
            Go straight to the section below with our breakdown of website
            creation expenses. Use our free website cost calculator to get a
            personalized quote for developing or redesigning the website for
            your business.
          </p>
          <div className="mt-7 space-y-5">
            <Button outlined textColor="text-[#000000]/50">
              <FlexLayout>
                <p>Get a Custom Quote for Bilding My Site</p>
                <ArrowLeft />
              </FlexLayout>
            </Button>
            <br />
            <Button>
              <FlexLayout>
                <p>Learn more about the Upfront Cost Of website design</p>
                <ArrowLeft fill="fill-white" />
              </FlexLayout>
            </Button>
          </div>
        </div>

        <div className="w-[25%] self-start sticky top-0">
          <div>
            <h5 className="text-[20px] font-bold pb-4">Table of contents</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#">
                  <a>How Much Does A Website Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does A Website For A Business Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does A Website Builder Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Design Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Maintenance Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Monthly & Annual Website Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Marketing Website Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Build A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Maintain A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Market A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Cost Summary</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[20px] font-bold py-5">Related Resources</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#">
                  <a>
                    Learn More About DIY Website Builders Or Web Design
                    Providers With These Resources:
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Top 5 Best Website Builders</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Best Website Builders For SMBs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Best Ecommerce Website Builders</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Squarespace Pricing Vs. Web Design Company Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does WordPress Cost?</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </FlexLayout>

      <FlexLayout spaceClass="relative">
        <div className="w-[75%]">
          <h2 className="text-[40px] font-bold mb-8 w-[70%]">
            Costs of website design in 2022
          </h2>
          <p className="w-[80%] text-[20px] mb-5">
            A website requires{" "}
            <span className="font-bold">routine maintenance</span> — without it,
            your website will go offline. That&apos;s why businesses need to ask
            not only, “How much does it cost to build a website?” but also, “How
            much does it cost to maintain a website?”.
          </p>
          <Table
            headers={[
              "So, how much does website maintenance cost? Around $400 to $60,000 per year.",
              "Ongoing Website Costs",
            ]}
            rows={[
              ["Domain Name", "$2 – $20 / year"],
              ["SSL Certificate", "$0 – $1,500 / year"],
              ["Website Hosting", "$24 – $10,000 / year"],
              ["Content Management System (CMS)", "$0 – $40,000 / year"],
              ["Ecommerce Functionality", "$180 – $300 / year"],
              ["Website Maintenance", "$200 – $1,250 / year"],
              ["Freelancer, Agency or Website Builder", "$0 – $5,400 / year"],
            ]}
          />
          <h2 className="text-[40px] font-bold my-8 w-[70%]">
            Monthly & Annual Website Costs
          </h2>
          <h4 className="font-bold mt-8 text-[20px]">
            How much does a website cost per month?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            On a monthly basis, your website can cost{" "}
            <span className="font-bold">$35 to $5000 per month.</span>
            It&apos;s worth mentioning, however, that prices can fluctuate month
            to month. In some cases, service providers may even request upfront
            payment for the entire year.
          </p>
          <h4 className="font-bold mt-8 text-[20px]">
            How much does a website cost per year?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            On a yearly basis, your website can cost{" "}
            <span className="font-bold">$400 to $60,000 per year.</span>
            In some cases, your annual website maintenance costs may increase
            due to one-time investments, like the redesign of a logo or critical
            page.
          </p>
          <Table
            headers={[
              "Curious about the price difference between freelancers, website builders, and web design agencies?",
              "Freelancer, Website Builder, and Web Design Agency Costs",
            ]}
            rows={[
              ["Website Builder", "$0 – $25 / month"],
              ["Freelancer", "$50 – $100 / hour"],
              ["Web Design Agency", "$119 – $449 / month"],
            ]}
          />
          <h4 className="font-bold mt-8 text-[20px]">
            Want to learn more about website maintenance costs?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            Jump ahead to our breakdown of ongoing website costs, from regular
            maintenance to domain name renewal. If you want to learn more about
            our website maintenance services, contact us online or call us at
            <span className="font-bold">&nbsp;&nbsp;888-601-5359</span> to chat
            about your website!
          </p>
          <div className="mt-7 space-y-5">
            <Button outlined textColor="text-[#000000]/50">
              <FlexLayout>
                <p>Explore Plans for Maintaining My Site</p>
                <ArrowLeft />
              </FlexLayout>
            </Button>
            <br />
            <Button>
              <FlexLayout>
                <p>Learn more about the Maintenance Cost Of Website</p>
                <ArrowLeft fill="fill-white" />
              </FlexLayout>
            </Button>
          </div>
        </div>

        <div className="w-[25%] self-start mt-10 sticky top-0">
          <div>
            <h5 className="text-[20px] font-bold pb-4">Table of contents</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#">
                  <a>How Much Does A Website Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does A Website For A Business Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does A Website Builder Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Design Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Maintenance Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Monthly & Annual Website Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Marketing Website Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Build A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Maintain A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Market A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Cost Summary</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[20px] font-bold py-5">Related Resources</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#">
                  <a>What Is Website Maintenance?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Maintenance Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Ecommerce Website Maintenance Guide</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Maintenance Checklist</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </FlexLayout>

      <FlexLayout spaceClass="relative">
        <div className="w-[75%]">
          <h2 className="text-[40px] font-bold mb-8 w-[70%]">
            Costs of online marketing in 2022
          </h2>
          <p className="w-[80%] text-[20px] mb-5">
            It has become essential for businesses to invest in digital
            marketing in today&apos;s internet economy. This area of marketing
            includes of online tactics that raise your profile online and
            increase site traffic, sales, and income.
          </p>
          <Table
            headers={[
              "So, how much can marketing your website cost? Most businesses invest $2,500 to $12,000 per month, though some spend upwards of $20,000 per month.",
              "Website Marketing Costs",
            ]}
            rows={[
              ["SEO", "$1,500 – $5,000 / month"],
              ["PPC", "$9,000 – $10,000 / month"],
              ["Professional Copywriting", "$50 – $500 / page"],
              ["Content Marketing", "$2000 – $10,000 / month"],
              [
                "Social Media Marketing & Advertising",
                "$4,000 – $7,000 / month",
              ],
              ["Email Marketing", "$9 – $1,000 / month"],
            ]}
          />
          <p className="w-[80%] text-[20px] my-5">
            You may utilize your website to encourage in-store visits even if
            your business doesn&apos;t function online. Why? To find new goods,
            brands, and places to shop, companies and customers today rely on
            search engines like Google, social media, and email.
          </p>
          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            Want to know more about the costs of internet marketing? Check out
            our helpful cost breakdown below!
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            You have a great deal of freedom with internet marketing
            expenditures compared to web design and website maintenance costs.
            Your business may spend money on the services that are most
            beneficial, such search engine optimization (SEO), and develop a
            unique marketing plan that is within your means.
          </p>
          <div className="mt-7 space-y-5">
            <Button outlined>
              <FlexLayout>
                <p>Get a Custom Proposal for Marketing My Site</p>
                <ArrowLeft />
              </FlexLayout>
            </Button>
            <br />
            <Button>
              <FlexLayout>
                <p>Learn more about the Marketing Costs of Website</p>
                <ArrowLeft fill="fill-white" />
              </FlexLayout>
            </Button>
          </div>
        </div>

        <div className="w-[25%] self-start mt-10 sticky top-0">
          <div>
            <h5 className="text-[20px] font-bold pb-4">Table of contents</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#">
                  <a>How Much Does A Website Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does A Website For A Business Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does A Website Builder Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Design Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Maintenance Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Monthly & Annual Website Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Marketing Website Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Build A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Maintain A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Market A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Cost Summary</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[20px] font-bold py-5">Related Resources</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#">
                  <a>Digital Marketing Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>SEO Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>PPC Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Social Media Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How To Plan A Marketing Budget</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </FlexLayout>

      <FlexLayout spaceClass="relative">
        <div className="w-[75%]">
          <h2 className="text-[40px] font-bold mb-8 w-[70%]">
            What is the price of creating a website?
          </h2>
          <p className="w-[80%] text-[20px] my-5">
            A website&apos;s development and design might cost anywhere between
            $12,000 to $150,000 on average. Even though an updated site may have
            a significant influence on your bottom line and growth, company
            executives may be reluctant to invest in a brand-new or rebuilt
            website due to the wide price range.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            It&apos;s critical that your staff and decision-makers in your
            company comprehend the costs involved in maintaining a website.
            Knowing these elements will enable you to respond fully and
            constructively to the all-too-common query, &#8220;How much should a
            website cost&#8221;
          </p>
          <p className="w-[80%] text-[20px] my-5">
            Examine the costs associated with developing and designing websites:
          </p>

          <h4 className="font-bold mt-16 text-[26px]">
            Domain ($0.95 – $12 / DOMAIN)
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            Each domain name ranges in price from $0.95 to $12.
          </p>

          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            What is a domain?
          </h4>
          <BlockQuote>
            <p>
              <span className="font-bold">DOMAIN:</span> The name that
              distinguishes your website from others is called a domain.
            </p>
          </BlockQuote>
          <p className="w-[80%] text-[20px] my-5">
            It&apos;s unique to you and functions something like your online
            fingerprint. Despite the fact that other websites could have similar
            domain names, yours is the only one. Your initial and recurring
            website expenditures will be affected by the fact that you must buy
            a domain name and register it annually in order to have the rights
            to use it.
          </p>

          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            Why is a domain important?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            Your domain name is crucial since it gives your website an online
            identity.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            In addition to helping you build your brand, a domain name builds
            trust with site visitors and potential consumers. Additionally, your
            domain name will follow you if you ever switch hosting providers,
            making it valuable.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            Your domain name also matters if you&apos;re interested in
            pay-per-click (PPC) advertising because that&apos;s where users who
            click on your ad will be sent. Without a domain, you&apos;re forced
            to use social media or other channels to drive visitors to your
            website.
          </p>

          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            What is the price of a domain name?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            A brand-new domain name typically costs between $0.95 and $12.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            Businesses like GoDaddy, HostGator, or Dreamhost sell brand-new
            domain names.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            Your company must get in touch with the domain name owner and
            negotiate a price if you want to buy an already registered domain
            name. Depending on its age and past, a pre-owned domain name may
            cost thousands of dollars.
          </p>

          <h4 className="font-bold mt-16 text-[26px]">
            ($0 - $1500 / CERTIFICATE) SSL certificate
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            The annual cost of an SSL certificate ranges from $0 to $1500.
          </p>
          <BlockQuote>
            <p>
              <span className="font-bold">SSL CERTIFICATE:</span> Protects your
              company as well as your site’s visitors by safeguarding the
              transfer of sensitive data
            </p>
          </BlockQuote>
          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            An SSL certificate&apos;s definition
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            By securing the transfer of sensitive data, an SSL certificate
            safeguards both your business and the users of your website. Your
            SSL certificate appears in your URL, just like your domain name does
            to users
          </p>
          <p className="w-[80%] text-[20px] my-5">
            Your website URL will show up with &#8220;https&#8221; rather than
            &#8220;http&#8221; and a padlock to the right of it if a website has
            a valid SSL certificate. A menu with details about the certificate
            shows when you click on this padlock.
          </p>

          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            Why does an SSL certificate matter?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            Users share a lot of private information online in today&apos;s
            digital world. from supplying their name and email when registering
            for a newsletter to inputting their credit card information when
            making a purchase.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            As a business, you want people using your website to behave
            similarly.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            Consumers won&apos;t connect with your website if it seems
            untrustworthy, which won&apos;t help your business grow its sales,
            expand its email list, or enhance its lead generation efforts. Users
            are also warned by web browsers like Chrome when they visit a site
            that lacks a valid certificate.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            With an SSL certificate, you can establish the legitimacy and safety
            of your website.
          </p>

          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            How much does an SSL certificate cost?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            Users share a lot of private information online in today&apos;s
            digital world. from supplying their name and email when registering
            for a newsletter to inputting their credit card information when
            making a purchase.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            As a business, you want people using your website to behave
            similarly.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            Consumers won&apos;t connect with your website if it seems
            untrustworthy, which won&apos;t help your business grow its sales,
            expand its email list, or enhance its lead generation efforts. Users
            are also warned by web browsers like Chrome when they visit a site
            that lacks a valid certificate.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            With an SSL certificate, you can establish the legitimacy and safety
            of your website.
          </p>

          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            How much does an SSL certificate cost?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            Costs for an SSL certificate range from $0 to $1500 annually.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            Some businesses give SSL certificates for free, while the majority
            of merchants charge for them. The best security may be achieved by
            purchasing a premium SSL certificate, according to experts. A
            purchased SSL certificate frequently includes extra security
            features like a longer warranty and stronger encryption levels.
          </p>
          <p className="w-[80%] text-[20px] my-5">
            SSL certificates may be purchased from respected companies like
            GoDaddy, Comodo, and Norton.
          </p>

          <h4 className="font-bold mt-16 text-[26px]">
            Website hosting ($24 – $24,000 PER YEAR)
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            The cost of hosting your website ranges from $24 to $24,000 per year
          </p>
          <BlockQuote>
            <p>
              <span className="font-bold">WEBSITE HOSTING:</span> Hosting is a
              service that allows Internet users to access your website
            </p>
          </BlockQuote>
          <p className="w-[80%] text-[20px] my-5">
            Your website may be viewed by people all over the world thanks to
            the space a web host gives it on its server. Website hosting is a
            one-time and continuing cost component for your website, much like
            your domain name and SSL certificate.
          </p>

          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            What is website hosting?
          </h4>
          <div className="pt-8">
          <ReactPlayerModal 
            Icon={PlayIcon}
            width={"756px"}
            height={"421.56px"}
            className="rounded-[6.14516px]"
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            // thumbnail="main.png"
            />
          </div>
          <p className="w-[80%] text-[20px] my-5">
            Internet consumers can visit your website thanks to the hosting
            service.
          </p>
          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            Why does website hosting matter?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            While essential, a website hosting plan also matters for the
            following reasons:
          </p>
          <ul className="list-disc ml-6 text-[20px]">
            <li>Impacts page loading times</li>
            <li>Influences website expansions</li>
            <li>Affects customer support during site issues or crashes</li>
          </ul>
          <p className="w-[80%] text-[20px] my-5">
            In other words, your website&apos;s functionality is greatly
            influenced by your hosting company. Free hosting services do exist,
            but few businesses utilize them since they do not provide technical
            assistance.
          </p>

          <h4 className="font-bold mt-8 text-[20px] w-[80%]">
            How much does website hosting cost?
          </h4>
          <p className="w-[80%] text-[20px] my-5">
            For businesses, website hosting costs $24 to $10,000 per year.
            That&apos;s a massive price range, which is why it&apos;s helpful to
            separate hosting costs into these categories:
          </p>
          <ul className="list-disc ml-6 text-[20px]">
            <li>
              <span className="font-bold">Shared host: </span>A shared host
              service costs $24 to $120 per year. With this service, your
              provider hosts your website on a server shared by several other
              clients. Since you’re sharing resources with other customers, your
              site may experience sluggish performance.
            </li>
            <li>
              <span className="font-bold">Website builder: </span>A hosting
              service from a website builder, like Wix, costs $60 to $180 per
              year. While a useful option for startups or small businesses,
              enterprise and mid-sized businesses often benefit more from
              another website hosting option.
            </li>
            <li>
              <span className="font-bold">Virtual private server (VPS): </span>A
              VPS costs $240 to $600 per year. With a VPS, your business shares
              a server with other clients but has full access to that
              server&apos;s resources because the server&apos;s allotted into
              several “virtual” servers.
            </li>
            <li>
              <span className="font-bold">Dedicated server: </span>A dedicated
              server service costs $1200 to $24,000 per year. With this service,
              your company receives its own server, with complete use of that
              server’s resources. For websites that earn more than 100,000 site
              visitors per month, a dedicated server is a must.
            </li>
          </ul>
          <p className="w-[80%] text-[20px] my-5">
            Your team can receive advice on the finest website hosting choice if
            you&apos;re working with a reputable web design business. Even if
            you outsource website management, your firm may keep an eye on how
            your web host is doing and make recommendations.
          </p>

          <div className="mt-10">
            <h4 className="font-bold mt-16 text-[26px]">
              Style or theme ($2,000 – $15,000)
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Companies can expect to spend $2000 to $15,000 on the theme or
              design of their website.
            </p>
            <BlockQuote>
              <p>
                <span className="font-bold">SSL CERTIFICATE:</span> Protects
                your company as well as your site’s visitors by safeguarding the
                transfer of sensitive data
              </p>
            </BlockQuote>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              What is web design?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Web design concentrates on both the aesthetics and usefulness of
              your website. As a result, it&apos;s one of the most expensive and
              significant website cost considerations, directly affecting how
              well your site performs.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              Why does web design matter?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Web design is important from both the users&apos; and search
              engines&apos; perspectives.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              According to studies, web design accounts for 94% of a user&apos;s
              initial impression. Users will quit your website if it seems
              antiquated or is difficult to navigate. What&apos;s worse, their
              perception of your company will decline.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              The performance, appearance, and operation of your website are
              equally important to Google and other search engines. They
              won&apos;t put a sluggish, difficult-to-use website at the top of
              search results because they want to give people relevant results
              and the greatest online experience.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Instead, your website will show up further down the page, losing a
              lot of visitors.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              How much does web design cost?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              A website may be designed for anywhere between $2,000 and $15,000.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              The price is often cheaper the simpler the design is. That
              doesn&apos;t imply that companies should choose a carefree,
              simplistic style. Instead, your business must think about its
              target market and design a website that reflects consumer
              expectations for your name and goods.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              If your business sells high-end goods, such as exquisite jewelry,
              you need a website that showcases the caliber of your goods and
              services. If you invest in a basic website, you risk missing the
              mark with your target demographic and losing money.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Because of this, a web design company frequently inquires about
              your target market.
            </p>
          </div>

          <div className="mt-10">
            <h4 className="font-bold mt-16 text-[26px]">
              Responsive design ($3,000 – $25,000)
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              A responsive design costs $3000 to $25,000.
            </p>
            <BlockQuote>
              <p>
                <span className="font-bold">RESPONSIVE DESIGN:</span> Allows
                users on any device to experience your website in the same way
              </p>
            </BlockQuote>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              What is responsive design?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Your website&apos;s responsive design adjusts to the user&apos;s
              device. A user&apos;s experience is smooth whether they access
              your website from a laptop, tablet, or mobile device. The need for
              flexible design has increased as more people browse while on the
              go.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              Why does responsive design matter?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              It is obvious that individuals are altering the way they access
              the Internet because mobile devices now account for more than half
              of all Internet traffic worldwide. Because of this, businesses
              must invest in responsive web design.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              The performance of your website may suffer if your company ignores
              responsive design, negating the value of your investment in a
              well-designed website. Consider the fact that more than 65% of
              users are more inclined to make a purchase from a business with a
              mobile-friendly website.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Your website will assist every member of your target audience
              thanks to a responsive design.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              How much does responsive design cost?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Companies and business owners can approach responsive design two
              ways:
            </p>
            <ul className="list-disc ml-6 text-[20px]">
              <li>
                <span className="font-bold">Responsive design: </span>A
                responsive design enables your website to automatically adapt to
                a user’s device, whether it’s a laptop, tablet, desktop, or
                mobile device. This design option costs around $3000.
              </li>
              <li>
                <span className="font-bold">Separate mobile site: </span>This
                design option allows your company to support tablet and mobile
                users by creating a mobile version of your site. An independent
                mobile site, however, costs $5000 to $25,000. another website
                hosting option.
              </li>
            </ul>
            <p className="w-[80%] text-[20px] my-5">
              For most businesses, a responsive design offers the best — and
              most cost-effective — option.
            </p>
          </div>

          <div className="mt-10">
            <h4 className="font-bold mt-16 text-[26px]">
              Website pages ($1,000 – $10,000)
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Page prices for web design range from $1000 to $10,000 for up to
              250 pages.
            </p>
            <BlockQuote>
              <p>
                <span className="font-bold">WEBSITE PAGES: </span> Website
                pages, or content, is crucial to your site and often times will
                be sold with your website design at an additional cost.
              </p>
            </BlockQuote>
            <p className="w-[80%] text-[20px] my-5">
              Because a website needs content, the majority of independent
              contractors and web design firms scale their fees according to the
              number of pages. Your page count may vary depending on a few
              elements, including your business, products, and services.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              For instance, a large product selection online store will
              generally need more pages than a neighborhood bakery. Your
              business may buy extra pages to enhance your content marketing or
              SEO strategy if you&apos;re investing in online marketing.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Most of the time, web designers and web design firms scale the
              pricing of their sites as follows:
            </p>
            <ul className="list-disc ml-7 text-[20px]">
              <li>1 to 10 pages: $1,000 to $2,000</li>
              <li>10 to 50 pages: $2,000 to $3,000</li>
              <li>50 to 150 pages: $3,000 to $6,500</li>
              <li>150 to 250 pages: $6,500 to $10,000</li>
            </ul>
            <p className="w-[80%] text-[20px] my-5">
              Your web design team may assist your company in deciding how many
              pages your website needs if you&apos;re remodeling or establishing
              a new one. Designers may produce an easy and clever layout for
              your site with a precise page count.
            </p>
          </div>

          <div className="mt-10">
            <h4 className="font-bold mt-16 text-[26px]">
              Interactive media ($250 – $10,000)
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Developing and adding interactive media to a website can cost
              anywhere from $250 to $10,000.
            </p>
            <BlockQuote>
              <p>
                <span className="font-bold">INTERACTIVE MEDIA: </span> Helps
                provide site visitors with an engaging experience.
              </p>
            </BlockQuote>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              What is interactive media?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              With interactive media, your business may provide customers a fun
              experience. Interactive video games, appealing imagery, and
              choose-your-own-adventure situations are all examples of this form
              of media. It works wonders for drawing in and holding the interest
              of an audience.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              Why does interactive media matter?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Interactive media is a go-to tool for firms trying to increase
              brand recognition, clarify complicated goods, or engage people. It
              functions well because it depends on user involvement to give
              website visitors a fun experience that adapts to their choices and
              activities.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              How much does interactive media cost?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              The process of producing interactive media requires a lot of time
              and resources, both for your team and the agency. Together, you
              must create an overall strategy and aim for your interactive
              media, figuring out how it will attract people and help you reach
              your business objectives.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              The process of producing interactive media requires a lot of time
              and resources, both for your team and the agency. Together, you
              must create an overall strategy and aim for your interactive
              media, figuring out how it will attract people and help you reach
              your business objectives.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Because of this, the cost of interactive media ranges greatly,
              from $250 to $10,000.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              In most circumstances, the more development effort interactive
              media demands, the more it will cost. Because freelance developers
              may bill clients on an hourly basis rather than a set fee, many
              companies choose to work with agencies instead of independent
              developers.
            </p>
          </div>

          <div className="mt-10">
            <h4 className="font-bold mt-16 text-[26px]">
              Content management system ($2,000 – $25,000)
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Adding a content management system (CMS) to your site can cost
              $2000 to $25,000.
            </p>
            <BlockQuote>
              <p>
                <span className="font-bold">CONTENT MANAGEMENT SYSTEM: </span>{" "}
                Helps provide site visitors with an engaging experience.
              </p>
            </BlockQuote>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              What is a CMS?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Without changing any site code or fiddling with any existing
              files, a CMS enables you and your team to alter content on your
              website. Without the knowledge of a developer, you may make simple
              changes to your website with a CMS.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              A few instances of CMS platforms are as follows:
            </p>
            <ul className="list-disc ml-7 text-[20px]">
              <li>WordPress</li>
              <li>Magento</li>
              <li>Joomla</li>
              <li>Drupal</li>
            </ul>
            <p className="w-[80%] text-[20px] my-5">
              Your web design agency can provide recommendations when it comes
              to choosing a platform.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              Why does a CMS matter?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              A CMS has a lot of benefits for your team.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Your staff may easily and quickly add blog entries to your
              website, for instance. If your firm operates a physical presence,
              a CMS also makes it simple to change important contact details
              like your phone number or store hours.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              How much does a CMS cost?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              The cost to include a basic or bespoke CMS in your web design
              package ranges from $2,000 to $25,000. Your freelance designer or
              web design firm will demand a fee for implementing a CMS, even if
              you invest in a free CMS like Magento.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              A web design firm can provide you advice if you&apos;re unclear
              about the type of CMS your business requires.
            </p>
          </div>

          <div className="mt-10">
            <h4 className="font-bold mt-16 text-[26px]">
              Ecommerce functionality ($2,000 – $25,000)
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              For ecommerce companies, adding ecommerce functionality to their
              site costs $2000 to $25,000.
            </p>
            <BlockQuote>
              <p>
                <span className="font-bold">ECOMMERCE FUNCTIONALITY: </span>{" "}
                Allows you to easily and effectively sell your products through
                your website.
              </p>
            </BlockQuote>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              What is ecommerce functionality?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Ecommerce functionality encompasses several tasks, including:
            </p>
            <ul className="list-disc ml-7 text-[20px]">
              <li>Adding a payment processing system</li>
              <li>Installing payment gateways</li>
              <li>
                Testing shopping carts, payment options, and shipping systems
              </li>
              <li>Launching product pages</li>
            </ul>
            <p className="w-[80%] text-[20px] my-5">
              How would one interpret e-commerce functionality? It not only
              makes sure customers can buy your goods (like with a credit card),
              but it also makes sure your staff can handle those orders. That is
              crucial to your success if you run an e-commerce firm.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              Why does ecommerce functionality matter?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              It is essential to have ecommerce capabilities if a firm wants to
              flourish online. Your business cannot accept or handle online
              orders without a payment gateway, shopping cart, or delivery
              system.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              A reliable e-commerce system is crucial for your website. Your
              team must include in the expense of ecommerce functionality in
              your web design budget since it is essential to your business
              operations. Your business must also invest in an e-commerce
              platform that offers the finest user experience.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              How much does ecommerce functionality cost?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              Ecommerce functionality costs between $2,000 and $25,000. What
              your company pays is influenced by a few things, such as:
            </p>
            <ul className="list-disc ml-7 text-[20px]">
              <li>Size of the product line</li>
              <li>Installing payment gateways</li>
              <li>Average number of daily, monthly, and annual orders</li>
              <li>Size of business</li>
            </ul>
            <p className="w-[80%] text-[20px] my-5">
              To put things in perspective, a small business will spend less for
              ecommerce capability than a big store. Why? A major store often
              sells a broad variety of goods and processes many more orders than
              a small firm, which necessitates the use of a reliable e-commerce
              platform.
            </p>
          </div>

          <div className="mt-10">
            <h4 className="font-bold mt-16 text-[26px]">
              Database integration ($2,000 – $25,000)
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              A database integration can cost $2000 to $25,000.
            </p>
            <BlockQuote>
              <p>
                <span className="font-bold">DATABASE INTEGRATION: </span> f you
                have an internal/third party database, this helps integrate it
                into your website website.
              </p>
            </BlockQuote>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              What is database integration?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              You could have an internal or external database that keeps
              important client and corporate data, depending on your industry.
              Users can access a database that contains, for instance,
              information about customer accounts by login into your website.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              You must include a database into your website if you want your
              team or customers to have access to that data. This operation
              involves development skills, regardless of whether you&apos;re
              integrating a third-party or bespoke database into your website.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              Why does database integration matter?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              An integrated database is important from both a user and business
              standpoint.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Your employees and customers may access useful information on your
              website thanks to an integrated database. Simple enquiries like
              account balances, product orders, or appointment dates are
              eliminated by this function, which may save your support staff a
              lot of time.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Even better, a database may assist your company in providing
              customers with exclusive benefits. For instance, a database might
              let your business provide unique offers to loyal consumers or
              offer a loyalty program to clients.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Database integration is a helpful addition to your website for
              ecommerce companies and even offline service providers. Both your
              staff and your customers benefit from it. Additionally, it acts as
              a USP for customers who prefer the ease of shopping online.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              How much does it cost to maintain a website?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              A website&apos;s annual maintenance costs often range from $400 to
              $60,000.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              Regular site upkeep is a crucial investment for any organization.
              This yearly investment guarantees that your website is up, secure,
              and operational. Additionally, it gives your business the
              possibility to enhance the website&apos;s functionality and
              content, both of which have an influence on consumer choices.
            </p>

            <h4 className="font-bold mt-8 text-[20px] w-[80%]">
              How much does database integration cost?
            </h4>
            <p className="w-[80%] text-[20px] my-5">
              A database integration may cost between $2,000 and $25,000.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              The biggest influences on database integration costs tend to be
              complexity and customisation of a database. For instance, your
              firm will spend more than a company utilizing an established,
              third-party database if your company wants to create a
              one-of-a-kind database.
            </p>
            <p className="w-[80%] text-[20px] my-5">
              That doesn&apos;t imply your business shouldn&apos;t spend money
              creating a unique database. Your company may eliminate operational
              bottlenecks and user annoyances with a customized database. Such a
              database may benefit your business by enhancing production, client
              happiness, and other factors.
            </p>
          </div>
        </div>

        <div className="w-[25%] self-start mt-10 sticky top-0">
          <div>
            <h5 className="text-[20px] font-bold pb-4">Table of contents</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#">
                  <a>How Much Does A Website Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does A Website For A Business Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does A Website Builder Cost?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Design Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Maintenance Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Monthly & Annual Website Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Marketing Website Costs</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Build A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Maintain A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>How Much Does It Cost To Market A Website?</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Cost Summary</a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[20px] font-bold py-5">Quick Links</h5>
            <ul className="space-y-4">
              <li>
                <Link href="#">
                  <a>Domain Name</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>SSL Certificate</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Hosting</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Style Or Theme</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Responsive Design</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Website Pages</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Interactive Media</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Content Management System</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Ecommerce Functionality</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Database Integration</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Responsive Design</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Web Design Calculator</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </FlexLayout>
    </div>
  );
};

export default CostInfo;
