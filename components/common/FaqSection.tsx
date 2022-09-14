import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface FaqSectionProps {
  title: string;
  description: string;
}
const FaqSection = (FaqData: FaqSectionProps) => {
  const [toggle, setToggle] = useState(false);

  const handleShow = () => {
    setToggle(true);
  };

  const handleHide = () => {
    setToggle(false);
  };

  const { title, description } = FaqData;
  return (
    <div className="text-[#000000]/0.7 bg-[#FFFFFF] mb-[20px] w-[760px] pl-[10px] pb-[10px] rounded-[10px]">
      <section className="flex justify-between items-center">
        <p className="font-semibold text-[20px] w-[463px] mb-[15px] pt-[15px]">
          {title}
        </p>
        <p className=" mr-[25px]">
          {toggle ? (
            <AiOutlineMinus size={25} onClick={handleHide} />
          ) : (
            <AiOutlinePlus size={25} onClick={handleShow} />
          )}
        </p>
      </section>
      {toggle && (
        <p className="font-normal text-[20px] w-[730px]">{description}</p>
      )}
    </div>
  );
};

export default FaqSection;
