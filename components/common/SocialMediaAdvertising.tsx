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
      <h2 className="text-4xl text-center mt-[120px] mb-[120px] ">
        {MainHeading}
      </h2>
      <Table className="table-fixed">
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
              className="text-center font-bold"
              content={SecondColHeading}
              type="premium"
            />
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <tr className="text-center text-black-80">
              <Th
                className="text-left text-white font-normal"
                content={item.heading}
              />
              <Td content={item.colData} type="standard" />
              <Td content={item.colData2} type="premium" />
            </tr>
          ))}
        </tbody>
      </Table>
    </Section>
  );
};

export default SocialMediaAdvertising;
