import React, { FC } from "react";
import ListItem from "./ListItem";
import formImage from "../assets/formImage.png";
import Image from "next/image";
import formBG from "../assets/formBG.jpeg";

let contentData = [
  {
    title: "Get to know your business",
    description:
      "From our first conversation, we begin researching your business, competitors, and industry. We’ll audit your site to craft a fully customized proposal.",
  },
  {
    title: "Get to know your business",
    description:
      "From our first conversation, we begin researching your business, competitors, and industry. We’ll audit your site to craft a fully customized proposal.",
  },
  {
    title: "Get to know your business",
    description:
      "From our first conversation, we begin researching your business, competitors, and industry. We’ll audit your site to craft a fully customized proposal.",
  },
];

const FormContent: FC = () => {
  return (
    <div
      className={`w-[50%] pt-[70px] flex flex-col items-center gap-y-[60px] 
    bg-center bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `linear-gradient(0, rgba(41, 48, 66, 0.85),rgba(41, 48, 66, 0.85)), url('${formBG.src}')`,
      }}
    >
      <div className="w-[555px] flex flex-col gap-y-[23px] items-start">
        <h1 className="text-[52px] font-bold leading-[75px] w-[388px] text-white">
          Ready to <span className="text-[#C40000]">grow</span> your revenue?
        </h1>
        <div className="flex flex-col gap-y-[49px] w-full items-center">
          <p className="text-white text-lg leading-[35px] font-semibold">
            Just fill in the form, and let our experts handle the rest. Here’s
            what will happen next:
          </p>
          <div className="flex flex-col gap-y-[25px] w-[496px] items-start">
            {contentData.map((content, index) => (
              <ListItem {...content} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Image src={formImage} width={200} height={200} />
    </div>
  );
};

export default FormContent;
