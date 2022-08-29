import React, { FC } from "react";

import { FlexLayoutProp } from "../../../types/types";

const FlexLayout: FC<FlexLayoutProp> = ({
  children,
  spaceClass = "space-x-2",
  justify = "justify-start",
  align = "items-center",
}) => {
  return (
    <div
      className={`flex  ${align} ${spaceClass} flex-layout h-full ${justify}`}
    >
      {children}
    </div>
  );
};

export default FlexLayout;
