import React, { FC } from "react";
import { IProps } from "./types";
import Button from "./Button";
import Check from "../assets/svg/Check";

const Card: FC<IProps> = ({
  starIcons,
  subtitle,
  list,
  title,
  description,
  duration,
  highlight,
  headerBgColor = "bg-red-50",
}) => {
  return (
    <div
      className={`flex flex-col w-full   align-baseline border overflow-hidden rounded-lg border-black-50`}
    >
      {/* header */}

      <div
        className={`flex flex-col py-10 items-center ${headerBgColor} text-center`}
      >
        <div className="flex space-y-8 flex-col mb-3">
          <div className="flex space-x-5 justify-center  align-baseline">
            {starIcons}
          </div>
          {subtitle && <h3 className="text-2xl text-black-80">{subtitle}</h3>}
        </div>

        <h3 className="text-4xl text-[#C40000] flex flex-col items-center justify-center mb-2">
          <span>{title}</span>{" "}
          {duration && (
            <span className="text-sm font-normal text-black/70">
              /{duration}
            </span>
          )}
        </h3>

        {highlight && (
          <p className="w-[70%] text-black font-medium">
            Standard consultation & reporting plan
          </p>
        )}
      </div>

      {/* body */}
      <div className="p-5 space-y-5">
        {list?.map((listItem, index) => (
          <div key={index} className="space-x-5 flex">
            {listItem.icon && (
              <span className="self-start mt-1">
                <Check className="w-5 h-5" />
              </span>
            )}
            <span className="text-black-70 text-lg w-[80%] self-start">
              {listItem.text}
            </span>
          </div>
        ))}
      </div>

      <hr className="m-5 bg-black/20 border-0 h-[2px] rounded-full" />

      {/* footer */}
      <div className="flex flex-col space-y-10 p-5">
        <p className="p-2 text-lg text-center text-black-80">{description}</p>
        <div className="w-[60%] mx-auto">
          <Button className="h-[60px] font-semibold" text="Send Proposal" />
        </div>
      </div>
    </div>
  );
};

export default Card;
