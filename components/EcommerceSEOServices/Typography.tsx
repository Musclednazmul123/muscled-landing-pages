import React, { HTMLAttributes } from "react";

export type TypographyHeadingProps = {} & HTMLAttributes<HTMLParagraphElement>;

const Heading = (props: TypographyHeadingProps) => {
  return (
    <p
      {...props}
      className={`font-bold leading-[52px] text-[40px] ${
        props.className || ""
      }`}
    />
  );
};

export type TypographyBodyProps = {} & HTMLAttributes<HTMLParagraphElement>;

const Body = (props: TypographyBodyProps) => {
  return (
    <p
      {...props}
      className={`leading-[30px] text-[20px] ${props.className || ""}`}
    />
  );
};

export type TypographySubHeadingProps =
{} & HTMLAttributes<HTMLParagraphElement>;

const SubHeading = (props: TypographySubHeadingProps) => {
  return (
    <p
      {...props}
      className={`leading-[31.2px] text-[24px] font-bold ${
        props.className || ""
      }`}
    />
  );
};

const Typography = {
  Body,
  Heading,
  SubHeading,
};

export default Typography;
