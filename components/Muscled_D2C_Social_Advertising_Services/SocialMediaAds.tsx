import React from "react";
import TableOfContent from "./UsableTableContent";
import Section from "../../components/Fawwaz/Sections/Section";
import { TableMetaData } from "../../components/utils/muscled-d2c-constants";

const SocialMediaAds = () => {
 
  return (
    <Section>
      <div className="flex mt-[120px]">
        <div className=" w-[750px] justify-between">
          <p className="text-[40px] font-semibold h-[52px]">
            Examples of D2C Social Media Ads
          </p>
          <p className="mt-[40px]">
            You've most likely seen sponsored posts on sites like Facebook,
            Twitter, Instagram, LinkedIn, and others.
            <br />
            <br /> Take a look at this Facebook ad from a popular brand _____and
            a D2C social media company _ <br />
            <br />
            And here's an Instagram D2C social media ad from the same company.
            <br />
            <br />
            D2C social ads come in a variety of shapes and sizes, and they're
            all designed to help you achieve your specific business objectives.
            {/* <div className="mt-[120px]">
              <img src={url} height="568px" width="760px" />
            </div> */}
            <div
              className=" mt-[120px] h-[568px] w-[760px] bg-no-repeat bg-center bg-cover bg-gradient-to-t from-cyan-500 to-blue-500"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(8, 58, 116, 0.8), rgba(8, 58, 116, 0.8)), url('https://s3-alpha-sig.figma.com/img/5ac4/44af/013f20f332ab89e89039d9ba1821657c?Expires=1664150400&Signature=OI6RpNRr-tcu9Tyu0TWFGhVNi-2SvvaxVQvg1ounhxyvfuQoFjLe3l2zSFClHOrBX7fgWz0Nf1T1XGlSk7dEM7z-3ZFgKHsI4tYmkf8T8x5mMsAC4o9RUmgj908C7tfHebuy8ayK3UG4hLSSBoJUb6-8nNxpS7790Omlv0JvobmwB~tgW3qvQ07rdEldG1mN1lN9uIlwAStnr2yY-zhk-yE-VGCqbm~HCXvHLdiy9HgCTEmlCllKiI62RH9H-VeKNuJDWkbc6cI-WzyPFDudkTGfXxQrqwuvPCqwtQg9bGzZIT5b8p3f~GkO7Gs2AqFQqDHZs3q3oWY5pXE0LieUyA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')",
              }}
            >
              <div className="w-[450px] h-[180px] text-[#F9F9F9] font-bold ml-[40px]">
                <p className=" text-[40px] leading-[60px] pt-[80px]">
                  Need help with your Social media Advertising Services
                </p>
                <p className="text-[24px] leading-[36px] pt-[20px]">
                  Check out our Ecommerce PPC Management Services
                </p>
                <button className="font-semibold text-[20px] bg-[#000000] rounded-[5px] text-center w-[232px] h-[60px] not-italic mt-[55px]">
                  View the Guide
                </button>
              </div>
            </div>
          </p>
        </div>
        <div className="ml-[40px] w-[440px] h-[620px] ">
          <TableOfContent TableMetaData={TableMetaData} />
        </div>
      </div>
    </Section>
  );
};
export default SocialMediaAds;
