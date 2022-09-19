interface TextHeadingProps {
  title: string;
}
const TextHeading = ({ title }: TextHeadingProps) => {
  return (
    <p className="font-bold text-[40px] leading-[52px] text-[#000000] w-[760px] h-[156px] mt-[120px] ">
      {title}
    </p>
  );
};

export default TextHeading;
