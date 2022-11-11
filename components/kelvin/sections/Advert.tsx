import { Section } from "../../Fawwaz/Sections";
import Button from "../Button";
import FlexLayout from "../layout/FlexLayout";
import abstImg from "../../assets/abstract.png";
const Advert = () => {
  return (
    <div className="mt-6 pt-20 pb-40 bg-[#C40000]/10">
      <Section>
        <FlexLayout align="align-start" spaceClass="space-x-8">
          <div className="w-[65%]">
            <h2 className="text-4xl text-[#000000CC]/80 w-[90%]">
              Top-Rated Paid Social Advertising Services
            </h2>

            <div className="text-xl">
              <p className="pt-10 text-[#000000]/70">
                Social media advertising services have become an essential
                component of social strategy for businesses of all sizes. With
                social advertising, businesses can expand strategies to reach
                the right people at the right time as algorithms change.
              </p>

              <p className="pt-10 text-[#000000]/70">
                Every social advertising platform has its own way of reaching
                out to people, and each has its own set of advantages. As a
                result, almost any business can benefit from using social
                advertising to engage, notify, and transform their target
                audience.
              </p>

              <p className="pt-10 text-[#000000]/70">
                Contact us online today to learn more about how our agency and
                social media ad management services can help you grow your
                online presence, increase sales, and improve customer loyalty.
                You can also contact us to talk one-on-one.
              </p>

              <p className="pt-10 text-[#000000]/70">
                If you'd like to speak with a strategist about the advantages of
                social media ad management, please contact us online today!
              </p>
            </div>
          </div>

          <div className="w-[35%]">
            <div
              className="w-[90%] text-white rounded-md"
              style={{ backgroundImage: `url('${abstImg.src}')` }}
            >
              <div className="bg-black/20 p-4 rounded-md">
                <div className="w-[80%] space-y-8">
                  <h5 className="w-[95%] text-xl">
                    Looking for custom plans and pricing? Request a proposal to
                    receive yours.
                  </h5>

                  <Button className="h-[60px]" text="Request a Proposal" />
                </div>
              </div>
            </div>
          </div>
        </FlexLayout>
      </Section>
    </div>
  );
};

export default Advert;
