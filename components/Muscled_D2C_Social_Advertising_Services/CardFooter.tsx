import React, { FC } from "react";

import Button from "../Fawwaz/Button";

interface PropsCardFooter {
  isFooterDescription?: boolean;
  footerDescition?: string;
  buttonLabel?: string;
}

const CardFooter: FC<PropsCardFooter> = ({
  isFooterDescription,
  footerDescition,
  buttonLabel = "Customize My Plan",
}) => {
  return (
    <div className="px-4 pb-10 flex items-center justify-center flex-col">
      <p className="border-t border-[#000] w-full mx-5 my-10 text-center " />
      {isFooterDescription && (
        <p className="mb-10 w-[320px] text-[20px] leading-[26px] text-center text-[#000000]/[0.7]">
          {footerDescition}
        </p>
      )}
      <Button
        bgColor="bg-[#000]"
        textColor="text-white"
        className={
          buttonLabel
            ? "w-56 py-4 px-10 text-xl font-medium"
            : "py-4 px-10 text-[0.8em]"
        }
      >
        {buttonLabel}
      </Button>
    </div>
  );
};

export default CardFooter;
