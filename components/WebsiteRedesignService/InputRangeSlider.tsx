import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
// import styles from "./styles.module.scss";

interface IProps {
  width?: number;
  inputText?: string;
  left?: string;
  inputTitle: string;
}

const InputRangeSlider: React.FC<IProps> = ({
  width,
  inputText,
  left,
  inputTitle,
}) => {
  console.log(width)
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4">
      <p className=" md:text-2xl text-white">{inputTitle}</p>
      <div className="relative z-10 flex lg:w-[60%] h-5 rounded-full ">
        <div className="bg-[#0f0d10] h-5 w-full rounded-full" />
        <div
          className="absolute z-50 flex items-center justify-between h-12 md:h-16 px-2 bg-white rounded-full cursor-pointer -top-3 md:-top-5"
          style={{ left: left || "25%" }}
        >
          <ChevronLeftIcon className="w-[36px] h-[36px] text-[#789BDA] " />
          <div className="text:lg md:text-xl text-black font-[800] w-fit nowrap">
            {inputText}
          </div>
          <ChevronRightIcon className="w-[36px] h-[36px] text-[#789BDA] " />
        </div>
        <div className="bg-[#3d3440] h-5 w-full rounded-full" />
        {/* <div className="w-3 h-3 bg-[#D9D9D9] rounded-full absolute left-[75%] top-[3px]" />
        <div className="w-3 h-3 bg-[#D9D9D9] rounded-full absolute left-[25%] top-[3px]" />
        <div className="w-3 h-3 bg-[#D9D9D9] rounded-full absolute left-[50%] top-[3px]" /> */}
      </div>
    </div>
  );
};

export default InputRangeSlider;