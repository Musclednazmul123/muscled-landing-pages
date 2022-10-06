import React from "react";
import ReactPlayerModal from "components/ReactPlayerModal";
import playIcon from "./playIcon";
import Testimonial from "./Testimonial";
import thumbnail from "../../public/thumbnail.png";

export default function UxTesmonial() {
  return (
    <>
      <div className="bg-red-10">
        <div className="flex flex-wrap gap-10 justify-center py-20">
          <div className="max-w-[760px] flex flex-col space-y-6">
            <h2 className="text-[40px] leading-[52px] text-black-80">
            Website User Experience Analysis from Muscled
            </h2>
            <div className="flex flex-col text-xl leading-[30px] space-y-10 text-black-70">
              <p>Interested in improving your bottom line? Great user experience (UX) will 
                make your visitors happier, based on which you will improve your customers' number and revenue. 
                You can make that happen with a personalized, comprehensive UX analysis
                 report from Muscled.</p>
              <p>The website analysis will give you these benefits:</p>
              <ul className="list-decimal list-inside">
                <li>Improvement of your customer experience based on their needs</li>
                <li>Brand loyalty and trust instead of confusing navigations, long check-outs,
                   and vague directions.</li>
                <li> Collaboration with a team of web designers and website conversion experts that can 
                  provide the required tools to make the website more successful.</li>
              </ul>
              <p>Call us at 888-601-5359 right away to begin enhancing the user experience (and conversion rates) of your website!</p>
            </div>
          </div>
          <div className="w-[389px] min-h-[214px] relative">
            <ReactPlayerModal
              width="389px"
              height="214px"
              thumbnail={thumbnail.src}
              Icon={playIcon}
              url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  );
}











