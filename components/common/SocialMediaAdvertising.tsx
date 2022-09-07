import React from "react";
import { Table, Td, Th } from "../Fawwaz/Table";
import { Section } from "../Fawwaz/Sections";
import { SocialMediaAdvertisingMetaData } from "components/utils/muscled-d2c-constants";

const SocialMediaAdvertising = () => {
  const {
    MainHeading,
    FeatureHeading,
    FirstColHeading,
    SecondColHeading,
    item,
  } = SocialMediaAdvertisingMetaData;
  return (
    <Section>
      <h2 className="text-4xl text-center mt-[120px] mb-[120px] text-[#000000]/[0.8] ">
        {MainHeading}
      </h2>
      <Table className="table-fixed  rounded-[10px]">
        <thead>
          <tr>
            <Th
              className="text-left text-white rounded-tl-xl"
              content={FeatureHeading}
            />
            <Td
              className="text-center font-bold"
              content={FirstColHeading}
              type="standard"
            />
            <Td
              className="text-center font-bold rounded-tr-xl"
              content={SecondColHeading}
              type="premium"
            />
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <tr className="text-center text-black-80 border-[1px] border-solid border-[#000000]/[0.1]">
              <Th
                className={
                  "text-left text-white font-normal " + item?.className1
                }
                content={item.heading}
              />
              <Td content={item.colData} type="standard" />
              <Td
                content={item.colData2}
                type="premium"
                className={item?.className2}
              />
            </tr>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

export default SocialMediaAdvertising;
