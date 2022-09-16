import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
// import styles from "./styles.module.scss";

interface IProps {
  width?: number;
  inputText?: string;
  left?: string;
  inputTitle: string;
}

const InputRange: React.FC<IProps> = ({
  width,
  inputText,
  left,
  inputTitle,
}) => {
  return (
    <div className="flex justify-between">
      <p className="text-2xl text-white">{inputTitle}</p>
      <div className="relative z-10 flex w-[60%] h-5 bg-white rounded-full ">
        <div className="bg-[#789BDA] h-5 w-full rounded-full" />
        <div className="bg-[#848994] h-5 w-full rounded-full" />
        <div
          className="absolute z-50 flex items-center justify-between h-16 px-2 bg-white rounded-md cursor-pointer -top-5"
          style={{ width: width || "165px", left: left || "25%" }}
        >
          <ChevronLeftIcon className="w-[36px] h-[36px] text-[#789BDA] " />
          <div className="text-xl text-black font-[800] nowrap">
            {inputText}
          </div>
          <ChevronRightIcon className="w-[36px] h-[36px] text-[#789BDA] " />
        </div>
        <div className="w-3 h-3 bg-[#D9D9D9] rounded-full absolute left-[75%] top-[3px]" />
        <div className="w-3 h-3 bg-[#D9D9D9] rounded-full absolute left-[25%] top-[3px]" />
        <div className="w-3 h-3 bg-[#D9D9D9] rounded-full absolute left-[50%] top-[3px]" />
      </div>
    </div>
  );
};

export default InputRange;
