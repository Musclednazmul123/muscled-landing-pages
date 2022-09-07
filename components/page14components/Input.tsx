import React, { CSSProperties, FC, ReactNode, SetStateAction } from "react";

interface Props {
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  onChange?: (ev: React.SetStateAction<string>) => void;
  style?: CSSProperties;
  value: string | number;
  label?: string;
  inIcon?: ReactNode;
  endIcon?: ReactNode;
}

const index: FC<Props> = ({
  className,
  id,
  placeholder,
  type,
  value,
  onChange,
  style,
  label,
  inIcon,
  endIcon,
}) => {
  return (
    <div className={`flex justify-between rounded-sm overflow-hidden`} id={id}>
      {inIcon && inIcon}
      <input
        value={value}
        placeholder={placeholder}
        type={type}
        onChange={(e: any) =>
          // @ts-ignore
          onChange(onChange)
        }
        style={style}
        className={` outline-none ${className}`}
      />
      {endIcon && endIcon}
    </div>
  );
};

export default index;
