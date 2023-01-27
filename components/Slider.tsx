import React, { RefObject, useEffect, useRef, useState, FC } from "react";
import FlexLayout from "./layout/FlexLayout";
import ChevronDown from "./ui//icons/ChevronDown";
import Ellipse from "./ui//icons/Ellipse";

interface SliderProp {
  tags: string[];
  percentage: number;
  timelineColor?: string;
  rangeColor?: string;
  handleBgColor?: string;
  handleTextColor?: string;
  handleIconFill?: string;
  handleClassName?: string;
}

interface EllipsesProps {
  arrayLength: number;
  delta: number;
}

const Ellipses: FC<EllipsesProps> = ({ arrayLength, delta }) => {
  const ellipses: JSX.Element[] = [];
  const iterations: number = arrayLength <= 3 ? 2 : arrayLength - 2;
  for (let i = 1; i <= iterations; i++) {
    ellipses.push(
      <div
        key={i}
        className={`absolute`}
        style={{ left: `${i * delta}%`, top: "30%" }}
      >
        <Ellipse />
      </div>
    );
  }
  return <>{ellipses}</>;
};

const Slider = ({
  tags,
  percentage,
  timelineColor = "bg-[#C40000]",
  rangeColor = "bg-[#333333]",
  handleBgColor = "bg-[#D9D9D9]",
  handleTextColor = "text-[#1F1A45]",
  handleIconFill = "fill-[#79768F]",
  handleClassName,
}: SliderProp) => {
  const sliderContainerRef: RefObject<HTMLDivElement> = useRef(null);
  const delta = tags.length > 0 ? 100 / tags.length : 0;
  const [curIdx, setCurIdx] = useState(percentageToArrayIndex(percentage));
  const [knobPosition, setKnobPosition] = useState(percentage);

  function percentageToArrayIndex(p: number): number {
    return Math.min(Math.floor(tags.length * (p / 100)), tags.length - 1);
  }

  useEffect(() => {
    const element = sliderContainerRef.current;

    const handleMove = (e: PointerEvent) => {
      // console.log(e.clientX);
      // console.log(element?.getBoundingClientRect().width)
      // console.log(element?.offsetLeft);
      // // console.log(element?.offsetWidth);
      // console.log(element?.getBoundingClientRect().left)
      const realPosition =
        e.clientX - (element?.getBoundingClientRect().left ?? 0);
      const perc = (realPosition / (element?.offsetWidth ?? -1)) * 100;
      if (perc >= 0 && perc <= 100) {
        setCurIdx(percentageToArrayIndex(perc));
        setKnobPosition(perc);
      }
    };

    const handleUp = () => {
      element?.removeEventListener("pointermove", handleMove);
    };

    const handleDown = (e: PointerEvent) => {
      element?.addEventListener("pointermove", handleMove);
      handleMove(e);
    };

    element?.addEventListener("pointerup", handleUp);
    element?.addEventListener("pointerleave", handleUp);
    element?.addEventListener("pointerdown", handleDown);

    return () => {
      element?.removeEventListener("pointerup", handleUp);
      element?.removeEventListener("pointerleave", handleUp);
      element?.removeEventListener("pointerdown", handleDown);
    };
  }, []);

  return (
    <div
      ref={sliderContainerRef}
      className={`rounded-full  w-[50%] h-5 relative cursor-pointer ${rangeColor}`}
    >
      <Ellipses arrayLength={tags.length} delta={delta} />

      <div
        className={`rounded-full h-full relative z-10 ${timelineColor} `}
        style={{ width: `${knobPosition}%` }}
      ></div>
      <div
        className={`absolute  h-[40px] w-max px-4  grid 
        place-content-center top-[-10px] z-20  
        ${handleBgColor} ${handleClassName}`}
        style={{ left: `${knobPosition - 15}%` }}
      >
        <FlexLayout>
          <div className="rotate-[90deg]">
            <ChevronDown fill={`${handleIconFill}`} />
          </div>
          <p className={`${handleTextColor} w-fit font-semibold select-none`}>
            {tags[curIdx]}
          </p>
          <div className="rotate-[-90deg]">
            <ChevronDown fill={`${handleIconFill}`} />
          </div>
        </FlexLayout>
      </div>
    </div>
  );
};

export default Slider;
