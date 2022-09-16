import { NextPage } from "next";

// Components
import SimpleCard from "../../components/CMSDevelopmentService/SimpleCard";
import SimpleCustomCMS from "../../components/CMSDevelopmentService/SimpleCustomCMS";
import CMSHero from "../../components/CMSDevelopmentService/CMSHero";
import AboutCMS from "../../components/CMSDevelopmentService/AboutCMS"; 
import Testimonial from "components/landingPage/Testimonials/Testimonial";
import OurPartner from "components/landingPage/OurPartner/OurPartner";

const Page: NextPage = () => {
  return (
    <div>
      <CMSHero />
      <OurPartner />
      <SimpleCustomCMS />
      <Testimonial />
      <AboutCMS />
      <SimpleCard />
    </div>
  );
};
export default Page;
