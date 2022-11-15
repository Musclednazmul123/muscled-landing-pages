import { FC, InputHTMLAttributes } from "react";
import { useFormContext, RegisterOptions } from "react-hook-form";
import ShowError from "./ShowError";

interface FormDataProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  validation?: RegisterOptions;
  multiline?: {
    rows: number;
    cols?: number;
    textAreaClassName?: string;
  };
  wrapperClassName?: string;
  wrapperWidth?: string;
}

const FormField: FC<FormDataProps> = ({
  name,
  label,
  type,
  validation,
  placeholder,
  multiline,
  wrapperClassName,
  wrapperWidth = "w-[240px]",
}) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  // console.log(errors);
  return (
    <div
      className={`flex flex-col gap-y-[15px] ${wrapperWidth} ${
        wrapperClassName || ""
      }`}
    >
      <div className="flex gap-x-[10px] items-center">
        <label className="text-[16px] font-semibold text-black-70">
          {label}
        </label>
        <p className="text-[#FF0000] text-[24px] self-start">*</p>
      </div>
      <div className="flex flex-col gap-y-[10px]">
        {!multiline ? (
          <input
            {...register(name, validation || {})}
            className={`w-full text-black-70 font-semibold border-b-[1px] focus:outline-0 focus:border-b-[1px]
          ${
            errors[name]
              ? "border-b-[#C40000] "
              : "border-b-black-50 focus:border-b-blue-50"
          } bg-inherit pb-[20px]`}
            placeholder={placeholder || ""}
            type={type || "text"}
          />
        ) : (
          <textarea
            {...register(name, validation || {})}
            rows={multiline.rows}
            cols={multiline?.cols || 20}
            className={`${
              multiline?.textAreaClassName || ""
            } text-black-70 font-semibold border-b-[1px] 
            focus:outline-0 focus:border-b-[1px] resize-none self-start
            ${
              errors[name]
                ? "border-b-[#C40000] "
                : "border-b-black-50 focus:border-b-black-50"
            } bg-inherit pb-[20px]`}
            placeholder={placeholder || ""}
          />
        )}
        <ShowError errors={errors} name={name} />
      </div>
    </div>
  );
};

export default FormField;
