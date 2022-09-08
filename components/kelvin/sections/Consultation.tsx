import { Section } from "../../Fawwaz/Sections";
import Table from "../Table";
import CheckMark from "components/assets/svg/checkMark";

const Consultation = () => {
  return (
    <div className="py-10">
      <Section>
        <h2 className="text-4xl mb-20 w-[85%]">
          Social Media Advertising: Standard Consultation and Reporting Plans
        </h2>

        <Table
          headers={[
            "Features",
            "1 Social Network",
            "2 Social Networks",
            "3 Social Networks",
            "4 Social Networks",
            "5 Social Networks",
          ]}
          rows={[
            [
              "Number of Unique Ads",
              "up to 4",
              "up to 6",
              "up to 8",
              "up to 9",
              "up to 10",
            ],
            [
              "Number of Advertising Campaigns/Target Audiences",
              "up to 4",
              "up to 6",
              "up to 8",
              "up to 9",
              "up to 10",
            ],
            [
              "Number of Unique Custom Advertising Images",
              "0",
              "1",
              "2",
              "3",
              "4",
            ],
            ["Social Media Remarketing Campaign & Ad", "0", "1", "1", "1", "1"],
            [
              "Monthly Advertising Targeting & Copy Tweaks",
              "up to 4",
              "up to 6",
              "up to 7",
              "up to 8",
              "up to 9",
            ],
            ["Demographic Targeting", "0", "2", "2", "2", "2"],
            [
              "Keywords, Interest, User Intent Targeting",
              "0",
              "1",
              "1",
              "1",
              "1",
            ],
            [
              "School/Profession/Workplace Targeting",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Company Size, Industry, Job Title, etc. Targeting",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Custom Image Compression & Delivery of Source Files",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Mobile Device Optimized Ads",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Installation of Network Tracking Pixels on Website",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Dedicated Social Media Advertising Account Manager",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Monitoring of Social Ad Comments",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "48 Business Hour Response Time",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Up to 1 personal Social Media Consultations per Month",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Standard WebFX Monthly Reporting & Analysis",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Access to MarketingCloudFX",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Ad Account Setup & Optimization",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "450+ SMEs behind campaign driving results",
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
              <CheckMark />,
            ],
            [
              "Weekly Call or Campaign Status Update (optional)",
              "$450/month",
              "$450/month",
              "$450/month",
              "$450/month",
              "$450/month",
            ],
            [
              "Initial Campaign Investment – Month 1",
              "$950",
              "$1,350",
              "$1,650",
              "$1,850",
              "$2,350",
            ],
            [
              "Ongoing Monthly Campaign Investment (Standard Advertising Consultation and Reporting)",
              "$550 or 15% of ad spend, whichever is greater",
              "$750 or 15% of ad spend, whichever is greater",
              "$950 or 15% of ad spend, whichever is greater",
              "$1,150 or 15% of ad spend, whichever is greater",
              "$1,150 or 15% of ad spend, whichever is greater",
            ],
            [
              "Required Ad Spend Range (Standard Advertising Consultation and Reporting)",
              "$1,000 – $10,000",
              "$2,000 – $10,000",
              "$3,000 – $10,000",
              "$4,000 – $10,000",
              "$5,000 – $10,000",
            ],
          ]}
        />
      </Section>
    </div>
  );
};

export default Consultation;
