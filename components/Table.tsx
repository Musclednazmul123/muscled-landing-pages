import React, { FC } from "react";
import { TableProp } from "../types/types";

const Table: FC<TableProp> = ({ headers, rows }) => {
  const headerSize = Math.floor(100 / headers.length);
  return (
    <div
      className={`grid w-full my-8 overflow-x-scroll`}
      style={{
        gridTemplateColumns: `repeat(${headers.length}, 300px)`,
      }}
    >
      {headers.map((header, index) => (
        <div
          className={`text-3xl ${
            index === 0
              ? "bg-black/80 text-white rounded-tl-xl"
              : index % 2 != 0
              ? "bg-[#C4000008]/[3%]"
              : "bg-[#C40000]/[6%]"
          } ${
            index + 1 == headers.length && "rounded-tr-xl"
          } font-bold px-6 py-8 border border-[#000000]/5 `}
          key={index}
        >
          <p className={`${index > 0 && "w-min mx-auto"}`}>{header}</p>
        </div>
      ))}
      {rows.map((row, subIdx) => {
        return row.map((text, index) => (
          <div
            className={`px-6 py-8 ${
              index === 0
                ? "bg-black/80 text-white"
                : index % 2 != 0
                ? "bg-[#C4000008]/[3%]"
                : "bg-[#C40000]/[6%]"
            } border border-[#000000]/5 ${
              subIdx === rows.length - 1 &&
              index === headers.length - 1 &&
              "rounded-br-lg"
            } ${subIdx === rows.length - 1 && index === 0 && "rounded-bl-xl"}`}
            key={`${index}_${subIdx}`}
          >
            <p className={`w-fit ${index > 0 && "w-fit mx-auto text-center"}`}>
              {text}
            </p>
          </div>
        ));
      })}
    </div>
  );
};

export default Table;
