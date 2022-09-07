import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { SVGProps } from "types/types";

interface IProps {
  children?: ReactNode;
  className?: string;
  title: string;
  desc: string;
  HeroIcon: React.FC<SVGProps>;
}

const Hero14: NextPage<IProps> = ({
  className,
  title,
  desc,
  children,
  HeroIcon,
}) => {
  const router = useRouter();

  return (
    <div className={`h-[767px] bg-black-70 p-25 text-white flex ${className}`}>
      <div className="w-[767px] mr-21">
        <p className="mb-10 text-lg">
          <span>Home {router.asPath.replace("/", " > ")}</span>
        </p>
        <h1 className="my-20 leading-[72.8px] text-56">{title}</h1>
        <p className="text-xl font-normal leading-10 mb-30">{desc}</p>
        <div className="flex flex-start">
          {/* <Input
            placeholder={input?.placeholder}
            type={input?.type || "text"}
            value={input.value}
            onChange={input?.onChange}
            className={`w-[184px] bg-white h-[60px] placeholder:text-black placeholder:text-xl placeholder:font-normal py-4 px-5 rounded-xs ${input?.className}`}
          />
          <Buttons
            title={buttons?.title}
            onClick={buttons?.onClick}
            width="w-[253px]"
            height="h-[63px]"
            className={`${buttons?.className}`}
          /> */}
          {children}
        </div>
      </div>
      <HeroIcon className="w-[436px]" />
    </div>
  );
};

export default Hero14;
