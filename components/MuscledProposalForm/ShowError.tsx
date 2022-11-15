import React, { FC } from "react";
import { FieldErrors } from "react-hook-form";

interface ErrorProps {
  errors: FieldErrors;
  name: string;
}

const ShowError: FC<ErrorProps> = ({ errors, name }) => {
  return errors && errors[name] ? (
    <div className="flex items-center gap-x-[3px] bg-[#C40000] rounded-[5px] w-fit h-[23px] pl-[5px] pr-[5px] pt-[5px] pb-[5px]">
      <div
        className="relative w-[13px] h-[13px] text-[12.07px] leading-[12.07px] text-[#C40000] 
    rounded-[50%] bg-[#D9D9D9] text-center"
      >
        <p className="absolute top-[0.93px] left-[4.64px]">!</p>
      </div>
      <p className="text-white text-[13px]">
        {errors[name]?.message as string}
      </p>
    </div>
  ) : null;
};

export default ShowError;
