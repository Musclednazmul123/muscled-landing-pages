import React, { FC } from "react";

export type SectionProps = {} & React.HTMLAttributes<HTMLDivElement>;

const Section: FC<SectionProps> = (props) => {
  const { className, ...rest } = props;

  return <div className={`max-w-1240 mx-auto px-3 relative ${className}`} {...rest}></div>;
};

export default Section;
