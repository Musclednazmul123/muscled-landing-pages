import React, { FC } from "react";
import { FieldErrors } from "react-hook-form";

type counterProps = {
  errors: FieldErrors;
};

const ErrorsCounter: FC<counterProps> = ({ errors }) => {
  return (
    (Object.keys(errors).length > 0 && (
      <div className="flex justify-center bg-[#C40000]/95 py-[14px] px-[9px] items-center gap-x-[10px]">
        <p className="text-[18px] leading-[22px] text-white">
          There are
          <span
            className="inline-block h-[26.35px] w-[30px] rounded-[13.63px]
           bg-[#D9D9D9] text-[21.8px] text-black text-center mx-2 "
          >
            <span className="relative top-[2.7px]">
              {Object.keys(errors).length}
            </span>
          </span>
          errors in this page. Please correct them before moving on.
        </p>
        <button
          className="bg-[#EBE8E8] text-[21.8px] leading-[21.8px]
         text-black/70 py-[14px] px-[18px] whitespace-nowrap rounded-[4.5px]"
        >
          See Errors
        </button>
      </div>
    )) ||
    null
  );
};

export default ErrorsCounter;
