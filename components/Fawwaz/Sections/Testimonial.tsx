import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "helpers";

import { Section } from "../Sections";
import Button from "../Button";
import VideoFrame from "components/Fawwaz/VideoFrame";
import ReactPlayerModal from "components/ReactPlayerModal";
import playIcon from "components/playIcon";

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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ReactPlayerModal
            thumbnail={"../../components/assets/OurDesignServices.png"}
            url="https://www.youtube.com/embed/D0UnqGm_miA"
            Icon={playIcon}
            width={"480px"}
            height={"280px"}
          />
        </ErrorBoundary>
      </Section>
    </div>
  );
};

export default Testimonials;
