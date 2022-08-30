import { FC } from "react";
import Section from "../Fawwaz/Sections/Section";
import Button from "../Fawwaz/Button";
import VideoFrame from "../Fawwaz/VideoFrame";

interface ReusableTestimonialsProps {
  testimonialData: { para1?: string; para2?: string; buttonLabel?: string };
}
const ReusableTestimonials: FC<ReusableTestimonialsProps> = ({
  testimonialData: { para1, para2, buttonLabel },
}) => {
  return (
    <div className="bg-black">
      <Section className="flex flex-wrap justify-center py-20 px-3 gap-32">
        <div className="max-w-[560px] text-accent-white">
          <p className="text-xl md:text-2xl mb-8">{para1}</p>
          <p className="font-bold text-base md:text-xl mb-14">{para2}</p>

          <Button bgColor="bg-[#C40000]" textColor="text-white">
            {buttonLabel}
          </Button>
        </div>
        <div className="w-[500px] min-h-[400px] h-full bg-white-gray relative">
          <VideoFrame className="w-full h-full absolute" allowFullScreen />
        </div>
      </Section>
    </div>
  );
};

export default ReusableTestimonials;
