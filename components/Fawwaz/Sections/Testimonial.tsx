import { FC } from "react";

import { Section } from "../Sections";
import Button from "../Button";
import VideoFrame from "components/Fawwaz/VideoFrame";

const Testimonials: FC = () => {
  return (
    <div className="bg-black">
      <Section className="flex flex-wrap justify-center gap-32 px-3 py-20">
        <div className="max-w-[560px] text-accent-white">
          <p className="mb-8 text-xl md:text-2xl">
            “Muscled has gone above and beyond to make me happy. So far, after a
            few months, I have already seen significant improvement in rankings
            and conversions, and they have also greatly improved the speed of my
            site.”
          </p>

          <p className="mb-8 text-xl font-bold md:text-2xl">Owner</p>

          <p className="text-base font-bold md:text-xl mb-14">Company Name</p>

          <Button bgColor="bg-[#C40000]" textColor="text-white">
            See Our Client's Testimonials
          </Button>
        </div>
        <div className="w-[500px] min-h-[400px] h-full bg-white-gray relative">
          <VideoFrame className="absolute w-full h-full" allowFullScreen />
        </div>
      </Section>
    </div>
  );
};

export default Testimonials;
