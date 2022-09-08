import Container from "@/components/layout/Container";
import FlexLayout from "@/components/layout/FlexLayout";

const LearnMore = () => {
  return (
    <section className="bg-[#C400000F] p-20">
      <Container>
        <div className="text-center mb-7">
          <h2 className="text-[40px] font-bold mb-8">
            Ready to learn more about website costs,from designing to
            maintaining to marketing?
          </h2>
          <p className="text-[20px]">
            Keep reading to get an answer to your question: How much does it
            cost to make a website? Or, use our free website cost calculator to
            receive a free estimate for launching and developing your website.
          </p>
          <h4 className="font-bold mt-6 text-[26px]">Table of Contents</h4>
        </div>

        <div className="space-x-1 mx-auto">
          <FlexLayout justify="justify-around" spaceClass="space-x-2">
            <div className="p-8 bg-white self-stretch">
              <h5 className="text-[17px] font-semibold mb-8 w-[28ch]">
                Website Costs: Design & Development
              </h5>
              <div className="space-y-8 w-[28ch]">
                <p>Web Design Costs</p>
                <p>How much does it cost to build a website?</p>
                <p>Website Cost Calculator</p>
              </div>
            </div>

            <div className="p-8 bg-white self-stretch">
              <h5 className="text-[17px] w-[28ch] font-semibold mb-8">
                Website Costs: Maintenance
              </h5>
              <div className="space-y-8 w-[28ch]">
                <p>Website Maintenance Costs</p>
                <p>How much does it cost to maintain a website?</p>
                <p>Website Cost Summary</p>
              </div>
            </div>

            <div className="p-8 bg-white self-stretch">
              <h5 className="text-[17px] w-[28ch] font-semibold mb-8">
                Website Costs: Marketing
              </h5>
              <div className="space-y-8 w-[28ch]">
                <p>Website Marketing Costs</p>
                <p>How much does it cost to market a website?</p>
                <p>Website Services from WebFX</p>
              </div>
            </div>
          </FlexLayout>
        </div>
      </Container>
    </section>
  );
};

export default LearnMore;
