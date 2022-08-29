import React, { FC } from "react";
import { TableProp } from "./types";

const Table: FC<TableProp> = ({ headers, rows }) => {
  return (
    <div
      className="grid w-full overflow-x-scroll"
      style={{
        gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
      }}
    >
      {headers.map((header, index) => (
        <div
          className={`text-3xl justify-start grid place-content-center ${
            index > 0 ? "justify-center" : "pl-4"
          } ${
            index === 0
              ? "bg-black/80 text-white rounded-tl-xl"
              : index % 2 != 0
              ? "bg-[#C4000008]/[3%]"
              : "bg-[#C40000]/[6%]"
          } ${index + 1 == headers.length && "rounded-tr-xl"}
          font-bold w-[310px] h-[212px] border border-[#000000]/5 `}
          key={index}
        >
          <p className={`${index > 0 && "w-min mx-auto"}`}>{header}</p>
        </div>
      ))}
      {rows.map((row, subIdx) => {
        return row.map((text, index) => (
          <div
            className={`w-[310px] p-5 h-[90px] justify-start grid place-content-center ${
              index > 0 ? "justify-center text-center" : "pl-4"
            } ${
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
            <p>{text}</p>
          </div>
        ));
      })}
    </div>
  );
};

export default Table;
