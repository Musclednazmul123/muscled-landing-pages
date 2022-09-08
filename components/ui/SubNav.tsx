import { ReactNode } from "react";

interface SubNavProp {
  header: string;
  children: ReactNode;
}

const SubNav = ({ header, children }: SubNavProp) => {
  return (
    <div>
      <h3 className="font-bold text-[16px]">{header}</h3>
      <div className="pt-2 ml-8 flex flex-col space-y-2 w-[75%]">
        {children}
      </div>
    </div>
  );
};

export default SubNav;
