import FlexLayout from "@/components/layout/FlexLayout";
import Button from "@/components/ui/Button";
import FrostCard from "@/components/ui/FrostCard";

const Service = () => {
  return (
    <div className="p-20 text-white bg-[url(/Banner.png)] bg-cover">
      <div>
        <div className="mx-auto">
          <h2 className="text-[40px] font-bold mb-4 text-center text-white">
            One Size Does Not Fit All
          </h2>
          <h4 className="font-semibold text-center text-[20px] text-white">
            Select a web design service to view custom website design costs for
            your company
          </h4>

          <div className="mt-16  mx-auto">
            <FlexLayout spaceClass="space-x-8" justify="justify-center">
              <FrostCard width="w-[320px]">
                <h4 className="font-semibold text-[20px] text-white">
                  Web Design and Redesign Services
                </h4>
                <p className="my-5">
                  Want to create a better website for your business? Use our web
                  design or redesign services for your company’s site.
                </p>

                <div
                  className="bg-transparent w-max mx-auto"
                  style={{ boxShadow: "0 0 20px rgba(255,255,255,1)" }}
                >
                  <Button
                    bgColorClass="bg-[#4E01A9]"
                    borderColorClass="border-[#4E01A9]"
                  >
                    <p className="px-16 w-full">See Prices</p>
                  </Button>
                </div>
              </FrostCard>

              <FrostCard width="w-[320px]">
                <h4 className="font-semibold text-[20px] text-white h-[60px]">
                  Landing Page Design
                </h4>
                <p className="my-5">
                  Looking to make the best first impression on your site’s
                  visitors? Let our award-winning design team help with our
                  landing page design service!
                </p>

                <div
                  className="bg-transparent w-max mx-auto"
                  style={{ boxShadow: "0 0 20px rgba(255,255,255,1)" }}
                >
                  <Button
                    bgColorClass="bg-[#4E01A9]"
                    borderColorClass="border-[#4E01A9]"
                  >
                    <p className="px-14 w-full">View Plance</p>
                  </Button>
                </div>
              </FrostCard>

              <FrostCard width="w-[320px]">
                <h4 className="font-semibold text-[20px] text-white h-[60px]">
                  Rapid Web Design
                </h4>
                <p className="my-5">
                  Need a new or updated website in 30 days or less? Choose rapid
                  web design for a custom, performance- driven site in 30 days!
                </p>

                <div
                  className="bg-transparent w-max mx-auto"
                  style={{ boxShadow: "0 0 20px rgba(255,255,255,1)" }}
                >
                  <Button
                    bgColorClass="bg-[#4E01A9]"
                    borderColorClass="border-[#4E01A9]"
                  >
                    <p className="px-10 w-full">See Tamplates</p>
                  </Button>
                </div>
              </FrostCard>
            </FlexLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
