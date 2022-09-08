import { ReactNode } from "react";

interface FlexLayoutProp {
  spaceClass?: string;
  children: ReactNode;
  justify?: string;
  direction?: string;
  align?: string;
}

const FlexLayout = ({
  children,
  spaceClass = "space-x-2",
  justify = "justify-start",
  align = "items-center",
}: FlexLayoutProp) => {
  return (
    <div
      className={`flex  ${align} ${spaceClass} flex-layout h-full ${justify}`}
    >
      {children}
    </div>
  );
};

export default FlexLayout;
