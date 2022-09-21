import React, { CSSProperties, FC, ReactNode } from "react";

interface Props {
  className?: string;
  id?: string;
  placeholder?: string;
  type?: string;
  onChange?: (ev: any) => void;
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
        onChange={onChange}
        style={style}
        className={` outline-none text-black text-xl ${className}`}
      />
      {endIcon && endIcon}
    </div>
  );
};

export default index;
