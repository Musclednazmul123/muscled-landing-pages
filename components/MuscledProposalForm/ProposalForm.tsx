import React, { FC } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import FormField from "./FormField";
import { FormData } from "./FormData";
import Button from "../Fawwaz/Button";

interface FormValues {
  email_adress: string;
  first_last_name: string;
  website: string;
  company: string;
  phone: string;
  comments: string;
}

const arrowSvg = (
  <svg
    width="28"
    height="12"
    viewBox="0 0 28 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.4 0.386108V4.51111H0V7.26111H22.4V11.3861L28 5.88611L22.4 0.386108Z"
      fill="white"
    />
  </svg>
);

const ProposalForm: FC = () => {
  const methods = useForm<FormValues>({
    reValidateMode: "onBlur",
  });
  console.log(methods.formState.errors);
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Inside the Submit handler of react hook form");
  };
  console.log(17 && 15);

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col items-center w-[50%]">
        <form
          className="flex flex-col gap-y-[35px] w-[543px]"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-y-[50px]">
            <h1 className="font-bold text-[48px] leading-[75px] w-[367px]">
              Request a FREE Proposal Now!
            </h1>
            <div className="flex flex-col gap-y-[35px]">
              <div className="flex flex-wrap gap-[63px]">
                {FormData.map((data, i) => (
                  <FormField {...data} key={i} />
                ))}
              </div>
            </div>
          </div>
          <button  className="bg-black text-white flex gap-x-[10px] w-full py-[30px] 
          px-[20px] justify-center items-center rounded-[10px] text-2xl font-bold">
            Send me a proposal {arrowSvg}
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default ProposalForm;
