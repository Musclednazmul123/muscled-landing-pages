import React from "react";
import Section from "../../Fawwaz/Sections/Section";
import FlexLayout from "../layout/FlexLayout";
import Button from "../Button";
import ReactPlayerModal from "../../ReactPlayerModal";
import PlayIcon from "../../playIcon";

const Testimonial = () => {
  return (
    <div className="bg-black text-white pt-14 pb-20">
      <Section>
        <FlexLayout justify="justify-center">
          <div className="w-[560px] self-stretch">
            <div className="flex flex-col">
              <p className="w-[84%] text-xl mb-8 leading-[36px]">
                "I would highly recommend Muscled for social media management."
                Muscled's team is very proficient; their article writing is
                outstanding, and their social team produces excellent results."
              </p>

              <h5 className="text-xl mb-8">
                Associate in Category Development
              </h5>

              <h5 className="mb-14">Company Name</h5>

              <div className="w-max">
                <Button
                  className="bg-[#C40000] h-[50px] font-medium"
                  text="See Our Clients’ Testimonials"
                />
              </div>
            </div>
          </div>

          <div className="w-[540px] self-start">
            <ReactPlayerModal
              Icon={PlayIcon}
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
          </div>
        </FlexLayout>
      </Section>
    </div>
  );
};

export default Testimonial;
