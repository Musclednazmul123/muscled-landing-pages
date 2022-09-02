import React from "react";
interface PropsTextlist {
  list: string[];
}
const TextList = ({ list }: PropsTextlist) => (
  <div className="mt-[20px] mb-[20px]">
    {list.map((item) => (
      <li className="leading-[30px] py-[10px] pl-[20px] font-normal text-[#000000]/[0.7]">
        {item}{" "}
      </li>
    ))}
  </div>
);

export default TextList;
