import React, { FC } from "react";
import { IProps } from "../../types/types";
import Check from "../assets/svg/Check";


const Card: FC<IProps> = ({
  children,
  type,
  subtitle,
  list,
  title,
  description,
  duration,
  height,
}) => {
  const center = false;
  const image =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png";

  const button = "hello world";


    return (
      <div
        className={`flex flex-col w-full  justify-between align-baseline border overflow-hidden rounded-md border-gray-500 ${
          height ? `h-[${height}px]` : "h-[630px]"
        }`}
      >
        {/* header */}

            <div className={`flex flex-col justify-around  space-y-5 pb-3  bg-[#C40000] ${type=="premium"?"bg-opacity-[6%]":type=="trailblazer"?"bg-opacity-[9%]":"bg-opacity-[3%]"}  items-center min-h-[300px]`}>
              <p className="text-2xl font-bold mt-16 uppercase">{subtitle}</p>
              <h3 className="text-2xl space-y-2 items-center items center">
                <span className="text-[40px] text-[#C40000]">{title}</span>{" "}
                {duration && (
                  <span className="font-normal text-[#010101] text-2xl">
                    /{duration}
                  </span>
                )}
              </h3>
            </div>

        {/* body */}
        <ul className="flex flex-col px-5 py-8 min-h-[425px] gap-y-[30px] bg-white">
          {list?.map((listItem, index) => (
            <li className="flex  space-x-4">
              {listItem.icon && (
                <span>
                  <Check className="" />
                </span>
              )}{" "}
              <span className="text-xl text-black-70">{listItem.text}</span>
            </li>
          ))}
        </ul>
        {/* footer */}
        <div className="bg-white">
        <hr className="mx-5 bg-black-50 border-0 h-[0.9px] rounded-full" />
        <div className="flex flex-col space-y-9 p-5 pb-10 bg-white items-center">
          <p className="p-2 text-center text-xl text-black-80">{description}</p>
          <button className="py-[15px] px-[40px] text-xl  bg-black text-white rounded-md font-medium min-h-[60px]">
            Send Proposal
          </button>
        </div>
        <>{children}</>
      </div>
      </div>
    );


};

export default Card;