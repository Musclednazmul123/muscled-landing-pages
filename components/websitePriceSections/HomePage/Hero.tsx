import FlexLayout from "@/components/layout/FlexLayout";
import Button from "@/components/ui/Button";
import ReactPlayerModal from "../../ReactPlayerModal";
import PlayIcon from "./PlayIcon";

const Hero = () => {
  return (
    <section className="bg-[#F5F5F5] py-20">
      <div>
        <FlexLayout justify="justify-center" spaceClass="gap-x-8">
          <div className="w-[758px]">
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
          <div className="w-[448px] self-start mt-6">
            {/* <VideoPlay /> */}
            <ReactPlayerModal 
            Icon={PlayIcon}
            width={"448px"}
            height={"343px"}
            className="shadow-[5px_5px_20px_10px_rgba(177,175,175,0.3)] rounded-[10px]"
            url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            // thumbnail="main.png"
            />
          </div>
        </FlexLayout>
      </div>
    </section>
  );
};

export default Hero;