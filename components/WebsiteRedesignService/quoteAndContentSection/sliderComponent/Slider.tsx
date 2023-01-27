import React, { RefObject, useEffect, useRef, useState,FC } from "react";
import FlexLayout from "./FlexLayout";
import ChevronDown from "./icons/ChevronDown";
import Ellipse from "./icons/Ellipse";

interface SliderProp {
  tags: string[];
  percentage: number;
  sliderColor: string;
}
interface EllipsesProps{
  arrayLength:number,delta:number
}

const Ellipses:FC<EllipsesProps>=({arrayLength,delta})=>{
const ellipses:JSX.Element[]=[];
const iterations:number=arrayLength<=3?2:arrayLength-2
for (let i=1;i<=iterations;i++){
  ellipses.push(<div
  key={i}
  className={`absolute`}
  style={{ left: `${i * delta}%`, top: "30%" }}
>
  <Ellipse />
</div>)
}
return <>
{ellipses}
</>;
}

const Slider = ({ tags, percentage, sliderColor }: SliderProp) => {
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
      const realPosition = e.clientX - (element?.offsetLeft ?? 0);
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
      className="rounded-full bg-[#333333] w-[50%] h-5 relative cursor-pointer"
    >

      <Ellipses arrayLength={tags.length} delta={delta} />
      
      <div
        className={`${sliderColor} rounded-full h-full bg-red-600 relative z-10`}
        style={{ width: `${knobPosition}%` }}
      ></div>
      <div
        className="absolute rounded-full  font-semibold h-10	 w-max px-1 md:px-6 md:py-6 bg-white grid place-content-center top-[-10px] md:top-[-16px] z-20"
        style={{ left: `${knobPosition - 22}%` }}
      >
        <FlexLayout>
          <div className="rotate-[90deg]">
            <ChevronDown fill="fill-black	" />
          </div>
          <p className="text-black w-fit text-center md:text-sm text-[10px] select-none">
            {tags[curIdx]}
          </p>
          <div className="rotate-[-90deg]">
            <ChevronDown fill="fill-black" />
          </div>
        </FlexLayout>
      </div>
    </div>
  );
};

export default Slider;