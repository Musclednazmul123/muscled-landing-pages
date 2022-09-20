import { NextPage } from "next";
import React from "react";

interface IProps {
    services: string[];
    bgColor?: string;
}

const ServicesCard: NextPage<IProps> = ({ services, bgColor }) => {
    return (
        <div
            style={{ background: bgColor || "#FFFFFF" }}
            className="flex flex-col flex-1 h-[360px] my-3 justify-between p-[30px] rounded-md"
        >
            {services.map((item: string, idx: number) => {
                return idx == 0 ? (
                    <h4 key={idx}>{item}</h4>
                ) : (
                    <p className="text-xl" key={idx}>
                        {item}
                    </p>
                );
            })}
            
        </div>
    );
};

export default ServicesCard;