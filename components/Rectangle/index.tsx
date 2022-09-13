import Image from "next/image";

interface IProps {
  icon: string;
  text1: string;
  text2: string; 
  number: string;
}
 
const Rectangle = ({ icon, text1, text2, number }: IProps) => {
  return (
    <div className="bg-black flex w-[436px] h-[112px] rounded-sm">
      <div className="flex justify-center items-center ml-2 mr-2 w-[20%]">
        <Image src={icon} className="h-[81px] w-[81px]" />
      </div>
      <div className="flex flex-col justify-center items-start font-sans w-full text-white">
        {/* Records */}
        <p className="text-md py-2">{text1}</p>
        <p className="font-bold text-3xl pb-2">{number}</p>
        <p className="text-md text-[#BBBBBB] pb-2">{text2}</p> 
      </div>
    </div>
  );
};

export default Rectangle;