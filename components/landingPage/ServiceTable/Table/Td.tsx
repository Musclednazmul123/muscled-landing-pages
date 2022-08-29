import { FC } from "react";

const Td: FC<TableBodyChildProps> = ({ className, content, type }) => {
  return (
    <td
      className={`${className ? className : ""} ${
        type === "Bronze"
          ? "bg-red-3"
          : type === "Silver"
          ? "bg-red-6"
          : type === "Gold"
          ? "bg-red-9"
          : "bg-white"
      }`}
    >
      {content}
    </td>
  );
};

export default Td;

