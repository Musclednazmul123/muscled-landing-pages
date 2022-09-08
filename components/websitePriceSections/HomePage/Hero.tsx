import Container from "@/components/layout/Container";
import FlexLayout from "@/components/layout/FlexLayout";
import Button from "@/components/ui/Button";
import VideoPlay from "@/components/ui/icons/VideoPlay";

const Hero = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <Container>
        <FlexLayout justify="justify-around" spaceClass="space-x-0">
          <div className="w-[60%]">
            <h1 className="text-[56px] font-bold">
              What Should the Price of a Website Be in 2022?
            </h1>
            <p className="text-[20px]">
              In today&apos;s digital age, it is essential to create and
              maintain a website whether your business is offline or online. But
              how much ought to a website cost? With an agency or freelancer,
              the typical price to develop a website ranges from $12,000 to
              $150,000; with a website builder, the price ranges from $0 to $500
              each month. On the other hand, ordinary website upkeep costs $400
              to $60,000 annually, or $0 to $5400 when using a website builder.
            </p>
            <div className="my-8">
              <FlexLayout spaceClass="space-x-5">
                <Button outlined>View Average Website Costs</Button>
                <Button>Try Our Free Website Calculator</Button>
              </FlexLayout>
            </div>
          </div>
          <div className="w-[40%]">
            <VideoPlay />
          </div>
        </FlexLayout>
      </Container>
    </section>
  );
};

export default Hero;
