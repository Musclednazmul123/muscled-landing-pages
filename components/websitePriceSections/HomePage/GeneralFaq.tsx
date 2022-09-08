import Container from "@/components/layout/Container";
import FlexLayout from "@/components/layout/FlexLayout";
import Accordion from "@/components/ui/Accordion";
import Divider from "@/components/ui/Divider";

const GeneralFaq = () => {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <Container>
        <div>
          <div className="text-center mb-7">
            <h2 className="text-[40px] font-bold mb-5">
              FAQs about website costs
            </h2>
            <p className="text-[20px]">
              Get fast, accurate answers to some of the most common (and
              important) questions about website costs:
            </p>
          </div>
        </div>

        <div>
          <Divider />
          <Accordion
            header="How much should a website cost?"
            content="Websites typically cost between $12,000 and $150,000. The price of your website will vary depending on its size, functionality, and construction. Using a website builder will cost you $300, hiring a freelancer will cost you $500 to $5,000, and hiring a web design firm will cost you $3000 to $100,000. Also budget $400–$60,000 each year for upkeep."
          />
          <Divider />
          <Accordion header="How much does it cost to build a website?" />
          <Divider />
          <Accordion header="How much does it cost to hire someone to build a website?" />
          <Divider />
          <Accordion header="What are the factors that influence the cost of a website?" />
          <Divider />
          <Accordion header="Should I hire someone to build my website or use a website builder like Wix?" />
          <Divider />
          <Accordion header="Discover how much a website for your business costs" />
        </div>

        <div className="text-center my-20">
          <h2 className="text-[40px] font-bold mb-5">
            Discover how much a website for your business costs
          </h2>
          <p className="text-[20px]">
            Are you prepared to build a successful website for your business?
            With our free website cost calculator, you can get a free estimate
            for creating and establishing your website. By phoning 888-256-9448
            or emailing us online, you may also talk with our staff!
          </p>
        </div>
      </Container>

      <section className="py-20 bg-[#F0F5F9]">
        <Container>
          <div className="space-x-1 mx-auto">
            <FlexLayout justify="justify-around" spaceClass="space-x-2">
              <div className="p-8 bg-white self-stretch">
                <h5 className="text-[17px] font-semibold mb-8 w-[28ch]">
                  Web Design Services
                </h5>
                <div className="space-y-8 w-[28ch]">
                  <p>Web Design</p>
                  <p>Website Redesign</p>
                  <p>Landing Page Design</p>
                  <p>Rapid Web Design</p>
                </div>
              </div>

              <div className="p-8 bg-white self-stretch">
                <h5 className="text-[17px] w-[28ch] font-semibold mb-8">
                  Digital Marketing Services
                </h5>
                <div className="space-y-8 w-[28ch]">
                  <p>SEO</p>
                  <p>Website Copywriting</p>
                  <p>PPC Management</p>
                  <p>Content Marketing</p>
                </div>
              </div>

              <div className="p-8 bg-white self-stretch">
                <h5 className="text-[17px] w-[28ch] font-semibold mb-8">
                  Learn More About Web Design
                </h5>
                <div className="space-y-8 w-[28ch]">
                  <p>Web Design Cost Calculator</p>
                  <p>Why is Web Design Important?</p>
                  <p>How Much Should a Website Cost?</p>
                  <p>Why Does Responsive Design Matter?</p>
                </div>
              </div>
            </FlexLayout>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default GeneralFaq;
