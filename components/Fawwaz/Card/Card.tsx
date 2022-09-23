import { FC } from "react";
import { CardProps } from "../component.type";
import React from "react";

const Card: FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

export default Card;
