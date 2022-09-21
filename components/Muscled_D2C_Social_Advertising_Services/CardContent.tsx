import React, { FC } from "react";

import { CardContent } from "../../components/Fawwaz/component.type";

const CardContent: FC<CardContent> = ({ className, children }) => {
  return (
    <div className={`px-7 mt-[40px] ${className ? className : ""} `}>
      {children}
    </div>
  );
};

export default CardContent;
