import { FC } from "react";
import { IconProps } from "../component.type";

const IconItem: FC<IconProps> = ({
  icon,
  title,
  className,
  full,
  headingClassName,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div>{icon}</div>
      <h3
        className={`${
          !full &&
          ` ${headingClassName} font-normal w-[400px] text-[20px] text-[#000000]/[0.7]`
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default IconItem;
