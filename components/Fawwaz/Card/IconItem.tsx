import { FC } from "react";
import { IconProps } from "../component.type";

const IconItem: FC<IconProps> = ({ icon, title, className, full }) => {
  return (
    <div className={`flex items-center py-3 gap-2 leading-4 ${className}`}>
      <div>{icon}</div>
      <p className={`${!full && `font-normal max-w-[410px]`}`}>{title}</p>
    </div>
  );
};

export default IconItem