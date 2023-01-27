import React, { FC } from "react";

const list: string[] = [
  "Strong Security features",
  "Fast pages",
  "Responsive themes",
  "Different payment options.",
];

const LeftContent: FC = () => {
  return (
    <div className="flex flex-col w-[571.5px] space-y-[21px]">
      <div className="flex flex-col space-y-[25px]">
        <p className="font-[600] text-2xl leading-[36px]">
          Why use Shopify for your online business?
        </p>
        <p className="font-normal leading-[30px] text-xl">
          With over 1.7 Million merchants setting up their stores on Shopify,
          the platformes proves to be the top choice for many businesses and
          industries, big and small. But why? Here are some of the benefits.{" "}
        </p>
      </div>

      <div className="flex flex-col space-y-[25px]">
        <p className="font-[600] text-2xl leading-[36px]">
          Ease of setup and use:
        </p>
        <p className="font-normal leading-[30px] text-xl">
          Shopify's design is all based around being user-friendly. Since it's a
          hosted platform, this makes setting up a store much faster and
          simpler. It's easy to use interface and a great selection of templates
          make the set up of a basic ecommerce site much more simple.
        </p>
      </div>

      <div className="flex flex-col space-y-[25px]">
        <p className="font-[600] text-2xl leading-[36px]">
          Excellent Built in Features:
        </p>
        <p className="font-normal leading-[30px] text-xl">
          Shopify includes a great variety of built in features and
          capabilities., that are key for an ecommerce store. Among them:
        </p>
        <ul className="list-disc list-inside pl-3">
          {list.map((item, index) => {
            return (
              <li className="font-normal leading-[30px] text-xl" key={index}>{item}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftContent;
