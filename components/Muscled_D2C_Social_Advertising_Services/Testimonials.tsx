import { FC } from "react";
import Section from "../Fawwaz/Sections/Section";
import Button from "../Fawwaz/Button";
import ReactPlayerModal from "../../components/ReactPlayerModal";
import PlayIcon from "../../components/playIcon";

interface ReusableTestimonialsProps {
  testimonialData: { para1?: string; para2?: string; buttonLabel?: string };
}
const ReusableTestimonials: FC<ReusableTestimonialsProps> = ({
  testimonialData: { para1, para2, buttonLabel },
}) => {
  return (
    <div className="bg-black">
      <Section className="flex justify-center py-20 px-3 gap-32">
        <div className="max-w-[560px] text-accent-white">
          <p className="text-xl md:text-2xl mb-8">{para1}</p>
          <p className="font-bold text-base md:text-xl mb-14">{para2}</p>

          <Button bgColor="bg-[#C40000]" textColor="text-white">
            {buttonLabel}
          </Button>
        </div>

        <ReactPlayerModal
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          width="590px"
          height="400px"
          Icon={PlayIcon}
        />
      </Section>
    </div>
  );
};

export default ReusableTestimonials;
