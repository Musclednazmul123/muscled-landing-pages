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
                  <AiFillStar className="card-icon fill-black-50" />
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
