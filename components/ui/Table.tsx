type row = string[];

interface TableProp {
  headers: string[];
  rows: row[];
}

const Table = ({ headers, rows }: TableProp) => {
  const headerSize = Math.floor(80 / headers.length);
  return (
    <div
      className={`grid w-[80%] my-8`}
      style={{
        gridTemplateColumns: `repeat(${headers.length}, minmax(0, 1fr))`,
      }}
    >
      {headers.map((header, index) => (
        <div
          className={`!w-[${headerSize}%] ${
            index === 0
              ? "bg-black/80 text-white rounded-tl-xl"
              : index >= 2
              ? "bg-[#C40000]/10"
              : "bg-[#C40000]/5"
          } ${
            index + 1 == headers.length && "rounded-tr-xl"
          } font-bold px-6 py-8 border border-[#000000]/5`}
          key={index}
        >
          {header}
        </div>
      ))}
      {rows.map((row, subIdx) => {
        return row.map((text, index) => (
          <div
            className={`!w-[${headerSize}%] px-6 py-8 ${
              index === 0
                ? "bg-black/80 text-white"
                : index >= 2
                ? "bg-[#C40000]/10"
                : "bg-[#C40000]/5"
            } border border-[#000000]/5 ${
              subIdx === rows.length - 1 &&
              index === headers.length - 1 &&
              "rounded-br-lg"
            } ${subIdx === rows.length - 1 && index === 0 && "rounded-bl-xl"}`}
            key={`${index}_${subIdx}`}
          >
            <p className={`w-fit ${index > 0 && "mx-auto"}`}>{text}</p>
          </div>
        ));
      })}
    </div>
  );
};

export default Table;
