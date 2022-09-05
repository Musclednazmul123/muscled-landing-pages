import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconItem,
  CardFooter,
} from "../Fawwaz/Card";
import { Section } from "components/Fawwaz/Sections";

import { AiFillStar } from "react-icons/ai";
import star from "components/assets/Star.png";
import star1 from "components/assets/Star_2.png";
import star2 from "components/assets/Star_3.png";
import { FaCheckCircle } from "react-icons/fa";

import { cardData } from "components/utils/muscled-d2c-constants";

const CardSection = () => {
  return (
    <Section>
      <h2 className="text-4xl text-center mt-10 mb-14">
        Explore Direct-to-Consumer Social Service Programs.
      </h2>

      <div className="flex flex-wrap justify-center lg:justify-between gap-2">
        {cardData &&
          cardData.map((cardItem) => {
            return (
              <Card className="rounded-sm border-2 max-w-[400px] w-full">
                <CardHeader
                  title={cardItem?.title}
                  rate={cardItem?.rate}
                  description={cardItem?.description}
                  type={cardItem?.type}
                >
                  {cardItem?.type === "premium" && (
                    <div className="flex">
                      <img src={star1.src} height="30px" width="30px" />
                      <img src={star1.src} height="30px" width="30px" />
                      <img src={star1.src} height="30px" width="30px" />
                    </div>
                  )}
                  {cardItem?.type === "ultimate" && (
                    <div className="flex">
                      <img src={star2.src} height="30px" width="30px" />
                      <img src={star2.src} height="30px" width="30px" />
                      <img src={star2.src} height="30px" width="30px" />
                    </div>
                  )}
                  {cardItem.type === undefined && (
                    <img src={star.src} height="30px" width="30px" />
                  )}
                </CardHeader>
                <CardContent className="space-y-11">
                  {cardItem &&
                    cardItem.iconItems.map((item) => (
                      <IconItem
                        icon={<FaCheckCircle size={15} />}
                        title={item?.iconTitle}
                        className={item?.class}
                      />
                    ))}
                </CardContent>
                <CardFooter
                  isFooterDescription={cardItem?.isFooterDescription}
                  footerDescition={cardItem?.footerDescition}
                  buttonLabel={cardItem?.buttonLabel}
                />
              </Card>
            );
          })}
      </div>
    </Section>
  );
};

export default CardSection;
