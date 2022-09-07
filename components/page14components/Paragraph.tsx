import { NextPage } from "next";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../helpers";

interface IProps {
  className?: string;
  title?: string;
  children: JSX.Element[];
}

const Pargraph: NextPage<IProps> = ({ className, title, children }) => {
  return (
    <div
      className={`flex flex-col justify-between text-xl mx-25 mb-[45px] w-[760px] ${className}`}
    >
      <h3 className="text-normal">{title}</h3>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* @ts-ignore */}
        {children.map((item: JSX.Element, idx: number) => {
          const keys = (1 + (Math.random() + idx) * 1000).toString();
          return (
            <div key={keys} onClick={() => console.log(keys)}>
              {item}
            </div>
          );
        })}
      </ErrorBoundary>
    </div>
  );
};

export default Pargraph;
