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
    <div className={`flex gap-2 items-center ${className}`}>
      <div>{icon}</div>
      <h3
        className={`${
          !full && ` ${headingClassName} font-normal w-[400px] text-xl`
        }`}
      >
        {title}
      </h3>
    </div>
  );
};

export default IconItem;
