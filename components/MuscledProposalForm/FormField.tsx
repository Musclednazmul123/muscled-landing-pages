import React, { FC } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import ShowError from "./ShowError";

interface FormDataProps {
  name: string;
  label: string;
  validation?: RegisterOptions;
  placeholder?: string;
}

const FormField: FC<FormDataProps> = ({
  name,
  label,
  validation,
  placeholder,
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-y-[15px] w-[240px]">
      <div className="flex gap-x-[10px] items-center">
        <label className="text-[16px] font-semibold text-black-70">
          {label}
        </label>
        <p className="text-[#FF0000] text-[24px] self-start">*</p>
      </div>
      <div className="flex flex-col gap-y-10px">
        <input
          {...register(name, validation || {})}
          className={`w-full text-black-70 font-semibold border-b-[1px] focus:outline-0 focus:border-b-[1px]
           ${
             errors[name]
               ? "border-b-[#C40000] "
               : "border-b-black-50 focus:border-b-black-50"
           } bg-inherit pb-[20px]`}
          placeholder={placeholder || ""}
        />
        <ShowError errors={errors} name={name} />
      </div>
    </div>
  );
};

export default FormField;
