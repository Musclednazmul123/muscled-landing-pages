import { FC } from "react";
import { Section } from "../Fawwaz/Sections";
import Button from "../Fawwaz/Button";
import { TestmonailProps } from "../Fawwaz/component.type";
import ReactPlayerModal from "../ReactPlayerModal";
import playIcon from "components/playIcon";

const TestimonailReuseable: FC<TestmonailProps> = ({ services }) => {
  return (
    <div className="bg-black">
      <Section className="flex flex-wrap justify-center py-20 px-3 gap-32">
        <div className="max-w-[560px] text-accent-white">
          {services?.map((item, index) => {
            return (
              <p className="text-xl md:text-2xl mb-8" key={index}>
                “{item}”
              </p>
            );
          })}
          <br />
          <p className="font-bold text-xl md:text-2xl mb-8">Owner</p>

          <p className="font-bold text-base md:text-xl mb-14">Company Name</p>

          <Button bgColor="bg-[#C40000]" textColor="text-white">
            See Our Client's Testimonials
          </Button>
        </div>
        <div className="w-[500px] min-h-[400px] rounded-md h-full bg-white-gray relative">
          <ReactPlayerModal
            width="w-fit"
            url="https://www.youtube.com/embed/D0UnqGm_miA"
            thumbnail="https://www.youtube.com/embed/D0UnqGm_miA"
            Icon={playIcon}
          />
        </div>
      </Section>
    </div>
  );
};

export default TestimonailReuseable;
