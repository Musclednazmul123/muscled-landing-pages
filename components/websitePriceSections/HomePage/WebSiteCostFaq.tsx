import FlexLayout from "@/components/layout/FlexLayout";
import SubNav from "@/components/ui/SubNav";
import Table from "@/components/ui/Table";
import TableOfContent from "@/components/ui/CollapsingTableOfContent";
import Link from "next/link";

const Faq = () => {
  return (
    <section className="py-16 bg-[#F5F5F5]">

        <FlexLayout justify="justify-center gap-x-6 relative">
          <div className="w-[750px]">
          <div className="w-full">
            <h2 className="text-[40px] font-bold mb-8">
              What is the price of a website?
            </h2>
            <p className="w-full text-[20px]">
              In this chart, you can quickly see how much it costs to create a
              website, keep it up to date, and promote it. Continue reading to
              find out more about the various costs associated with website
              creation and upkeep, as well as the cost disparities between
              businesses, independent contractors, and platforms like WordPress
              and Wix!
            </p>
          </div>        

        <div className="p-4"></div>

          <div className="w-full">
            <Table
              headers={["Price Factor", "Cost"]}
              rows={[
                [
                  "Web Design (View Web Design Costs)",
                  "$12,000 to $150,000 / design",
                ],
                [
                  "Website Maintenance (View Website Maintenance Costs)",
                  "$400 to $60,000 / year",
                ],
                [
                  "Website Marketing (View Website Marketing Costs)",
                  "$2,500 to $12,000 / month",
                ],
                [
                  "Website Design Services (Agency, Freelancer, or Website Builder)",
                  "$0 to $100,000",
                ],
                [
                  "Website Maintenance Services(Agency, Freelancer, or Website Builder)",
                  "$0 to $5,500 / year",
                ],
              ]}
            />

            <div>
              <h2 className="text-[40px] font-bold mb-8 w-full">
                How much does it cost a business to have a website?
              </h2>
              <p className="w-full text-[20px]">
                Thousands of dollars can be spent on a company website.
              </p>
              <p className="w-full text-[20px] mt-4">
                For example, the cost of designing a website for a business
                might range from $2,000 to $75,000, while the cost of
                maintaining a website annually can range from $400 to $60,000.
                The size and features of your site do, however, affect these
                fees. You could spend less (or more), depending on your website,
                than these estimations.
              </p>
              <p className="w-full text-[20px] my-4">
                Check out the average price for website development and upkeep,
                broken down by business type, below.
              </p>
              <Table
                headers={[
                  "Business Type",
                  "Web Design Cost",
                  "Annual Site Maintenance Costs",
                ]}
                rows={[
                  [
                    "Informational or Small Business Website (8-16 pages)",
                    "$2,000 – $9,000",
                    "$400 – $1,200",
                  ],
                  [
                    "Informational or Small Business Website (8-16 pages)",
                    "$10,000 – $35,000",
                    "$2,000 – $15,000",
                  ],
                  [
                    "Ecommerce Website (100-1000 products)",
                    "$5,000 – $55,000",
                    "$15,000 – $30,000",
                  ],
                  [
                    "Database Driven Website or Website Application(20-2000 pages)",
                    "$6,000 – $75,000",
                    "$30,000 – $60,000",
                  ],
                ]}
              />
            </div>

            <div className="mt-14">
              <h2 className="text-[40px] font-bold mb-8 w-full">
                What is the price of a website builder?
              </h2>
              <p className="w-full text-[20px] my-4">
                Prices for website builders range from zero to more than $500
                per month, with yearly maintenance fees ranging from zero to
                $5400. Your company&apos;s website builder costs will vary
                depending on a number of criteria, including the level of
                functionality you want.
              </p>
              <Table
                headers={["Website Builder", "Cost"]}
                rows={[
                  ["Wix", "$23 – $500+ / month"],
                  ["WordPress", "$7 – $59 / month"],
                  ["Squarespace", "$16 – $54 / month"],
                  ["GoDaddy", "$6.99 – $14.99 / month"],
                  ["Weebly", "$0 – $26 / month"],
                  ["Jimdo", "$0 – $39 / month"],
                ]}
              />
              <p className="w-full my-4 text-[20px]">
                You can check out what makes up website builder costs, below:
              </p>
              <Table
                headers={["Price Factor", "Cost"]}
                rows={[
                  ["Website builder subscription", "$0 – $500 / month"],
                  ["Plugins or apps", "$0 – $200 / one-time or recurring"],
                  ["Themes", "$100 – $200 / theme"],
                  ["Hosting", "$24 – $10,000 / year"],
                  ["SSL certificate", "$0 – $1,500 / year"],
                  ["Marketing (SEO, PPC, etc.)", "$50 – $10,000 / month"],
                ]}
              />
              <p className="w-full my-4 text-[20px]">
                In most cases, website builders offer an affordable solution to:
              </p>
              <ul className="list-disc ml-6 my-4 space-y-2 text-[20px]">
                <li>Freelancers</li>
                <li>Start-ups</li>
                <li>Small businesses</li>
              </ul>
              <p className="w-full text-[20px]">
                If your company is small to medium sized (or bigger), you might
                want to consider working with a web design company or an
                experienced freelancer to create and maintain your website.
                These experts will offer the simplest method for managing and
                upgrading your website.
              </p>
            </div>
          </div>

          </div>
        
        <div className="flex flex-col w-[440px] self-start gap-y-5 sticky top-0">
        <aside className="w-full self-start mt-3">
            <TableOfContent
              links={[
                { title: "Website Costs", url: "#" },
                { title: "Business Website Costs", url: "#" },
                { title: "Website Builder Costs", url: "#" },
              ]}
            />
          </aside>

          <div className="w-full mt-5">
            <h5 className="text-[20px] font-bold pb-4">Keep Reading</h5>
            <div className="flex flex-col space-y-4">
              <SubNav header="Website Design">
                <Link href="#">
                  <a>Web Design Costs</a>
                </Link>
                <Link href="#">
                  <a>How Much Does It Cost To Build A Website?</a>
                </Link>
                <Link href="#">
                  <a>Website Cost Calculator</a>
                </Link>
              </SubNav>

              <SubNav header="Website Maintenance">
                <Link href="#">
                  <a>Website Maintenance Costs</a>
                </Link>
                <Link href="#">
                  <a>How Much Does It Cost To Maintain A Website?</a>
                </Link>
                <Link href="#">
                  <a>Website Cost Summary</a>
                </Link>
              </SubNav>

              <SubNav header="Website Marketing">
                <Link href="#">
                  <a>Website Marketing Costs</a>
                </Link>
                <Link href="#">
                  <a>How Much Does It Cost To Market A Website?</a>
                </Link>
                <Link href="#">
                  <a>Website Services From WebFX</a>
                </Link>
              </SubNav>

              <h5 className="text-[20px] font-bold">Related Resources</h5>

              <SubNav header="Learn More About Business Website Costs:">
                <Link href="#">
                  <a>How Much Does An Ecommerce Website Cost?</a>
                </Link>
                <Link href="#">
                  <a>How Much Does A Small Business Website Cost?</a>
                </Link>
                <Link href="#">
                  <a>How Much Does An Online Store For A Business Cost?</a>
                </Link>
              </SubNav>
            </div>
          </div>
          
          
          </div>

        </FlexLayout>
      
    </section>
  );
};

export default Faq;
