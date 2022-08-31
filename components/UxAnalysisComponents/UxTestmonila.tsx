import React from "react";
import { Testimonial } from "components/Fawwaz/Sections";
import VideoFrame from "components/Fawwaz/VideoFrame";

export default function UxTesmonial() {
  return (
    <>
      <div className="bg-red-10">
        <div className="flex flex-wrap gap-10 justify-center py-20">
          <div className="max-w-[760px] space-y-7">
            <h2 className="text-4xl">
              The Digital Workout That Grows Your Traffic and Revenue through
              SEO
            </h2>
            <p className="md:text-xl">
              <span>
                Don’t let your page be buried. If you’re looking for ways to
                improve your website, your best bet will be SEO.
              </span>
              <br />
              <br />
              <span>But What is SEO?</span>
              <br />
              <br />
              <span>
                SEO is a digital marketing strategy that helps your website rank
                higher on Google, Bing, and other search engines on the
                internet. Some of its known techniques are optimizing your
                page’s keywords to building your internal links. The more
                visible your website is, the more you’re likely to accumulate
                the attention of your prospective customers, hence, the more
                likely you’ll be able to increase your revenue.
              </span>
              <br />
              <br />
              <span>
                Muscled Digital Agency is the only workout your page needs when
                it comes to SEO. From on-page SEO, off-page SEO, and technical
                SEO, you’re sure to hook those warm and hot customers to your
                business without investing a lot of work.
              </span>
              <br />
              <br />
              <span>How about you boost your performance today</span>
              <br />
              <br />
              <span>
                Reach out to us and chat with an expert from our SEO team about
                developing your website’s performance and profit.
              </span>
            </p>
          </div>
          <div className="w-[389px] min-h-[214px] relative">
            <VideoFrame
              className="w-[389px] h-[214px] absolute"
              allowFullScreen
            />
          </div>
        </div>
      </div>
      <Testimonial />
    </>
  );
}
