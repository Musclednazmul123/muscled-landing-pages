import { FC } from "react";
export interface TableBodyChildProps {
	content?: string | JSX.Element;
	className?: string;
	type: "Bronze" | "Silver" | "Gold" ;
}
const Td: FC<TableBodyChildProps> = ({ className, content, type }) => {
  return (
    <td
      className={`${
        className ? className : " border-b border-black border-opacity-10"
      } ${
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
