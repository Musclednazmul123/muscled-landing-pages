import Container from "@/components/layout/Container";
import FlexLayout from "@/components/layout/FlexLayout";
import Button from "@/components/ui/Button";
import Slider from "@/components/ui/Slider";
import CostInfo from "./CostInfo";

const Cost = () => {
  return (
    <div className="p-16 bg-[#F5F5F5]">
      <Container>
        <div className="bg-black text-white w-full p-16">
          <h2 className="text-[40px] font-bold mb-8 w-[70%]">
            Get an Instant Quote With Our Web Design Calculator
          </h2>
          <p className="text-[20px]">
            Prices for website builders range from zero to more than $500 per
            month, with yearly maintenance fees ranging from zero to $5400. Your
            company&apos;s website builder costs will vary depending on a number
            of criteria, including the level of functionality you want.
          </p>
          <div className="py-14 space-y-10 w-[70%] mx-auto">
            <FlexLayout justify="justify-between">
              <h5 className="text-20px font-bold">Number of pages</h5>
              <Slider percentage={50} tags={["0-10", "10-50", "50-100"]} />
            </FlexLayout>
            <FlexLayout justify="justify-between">
              <h5 className="text-20px font-bold">Style of design</h5>
              <Slider
                percentage={50}
                tags={["Simple", "Simple yet attractive", "Attractive"]}
              />
            </FlexLayout>
            <FlexLayout justify="justify-between">
              <h5 className="text-20px font-bold">
                Copywriting number of pages
              </h5>
              <Slider percentage={50} tags={["0-5", "5-10", "10-20"]} />
            </FlexLayout>
            <FlexLayout justify="justify-between">
              <h5 className="text-20px font-bold">SEO</h5>
              <Slider
                percentage={50}
                tags={["10 Keywords", "30 Keywords", "100 Keywords"]}
              />
            </FlexLayout>
            <FlexLayout justify="justify-between">
              <h5 className="text-20px font-bold">Responsive Design</h5>
              <Slider percentage={100} tags={["No", "Maybe", "Yes"]} />
            </FlexLayout>
            <FlexLayout justify="justify-between">
              <h5 className="text-20px font-bold">Database Integration</h5>
              <Slider percentage={50} tags={["None", "Basic", "Ultra"]} />
            </FlexLayout>
            <FlexLayout justify="justify-between">
              <h5 className="text-20px font-bold">Ecommerce Functionality</h5>
              <Slider percentage={50} tags={["None", "Basic", "Ultra"]} />
            </FlexLayout>
            <FlexLayout justify="justify-between">
              <h5 className="text-20px font-bold">CMS</h5>
              <Slider percentage={50} tags={["None", "Basic", "Ultra"]} />
            </FlexLayout>
            <FlexLayout justify="justify-evenly">
              <div className="text-20px font-bold w-[30%]"></div>
              <Button>See Pricing</Button>
            </FlexLayout>
          </div>
        </div>
        <div className="py-16">
          <CostInfo />
        </div>
      </Container>
    </div>
  );
};

export default Cost;
