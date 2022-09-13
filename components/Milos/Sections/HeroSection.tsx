import { Section } from "."
import { Button } from '../CustomElements';


const HeroSection = () => {
  return (
    <>
      <div className="min-h-[515px] mt-[70px] mb-20 bg-black-70 lg:px-0 flex justify-center items-center">
        <Section className="text-center">
          <h1 className="text-[36px] leading-normal lg:text-[56px] lg:leading-72 text-white">
            Be part of our mission and provide
            industry-leading digital marketing
            services to businesses all over the world,
            all while growing as a person and making
            the world a better place.
          </h1>
        </Section>
      </div>
      <Button
        className="mx-auto"
        text="I want to apply"
        icon={
          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.293 12.793L6.707 14.207L13.414 7.49997L6.707 0.792969L5.293 2.20697L9.586 6.49997H0V8.49997H9.586L5.293 12.793Z" fill="white" />
          </svg>
        }
        textColor="white"
        backgroundColor="black"
      />
    </>
  );
};

export default HeroSection;
