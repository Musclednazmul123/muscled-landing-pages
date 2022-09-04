import { FC } from "react";
import { IconProps } from "../component.type";

const IconItem: FC<IconProps> = ({ icon, title, className, full }) => {
  return (
    <div className={`flex gap-2 items-center ${className}`}>
      <div>{icon}</div>
      <p className={`${!full && `font-normal max-w-[250px]`}`}>{title}</p>
    </div>
  );
};

export default IconItem