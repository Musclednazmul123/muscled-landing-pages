import React, { FC } from "react";
import { footerTestimonialProps } from "types/types";

const Testimonial: FC<footerTestimonialProps> = ({
  title,
  position,
  companyName,
}) => {
  return (
    <div className="flex flex-col items-end gap-y-9 overflow-hidden">
      <p className="text-2xl text-right">{title}</p>
      <div className="text-white text-[16px] text-right font-[500] flex flex-col gap-y-[3px]">
        <p>{position}</p>
        <p>{companyName}</p>
      </div>
    </div>
  );
};

export default Testimonial;
