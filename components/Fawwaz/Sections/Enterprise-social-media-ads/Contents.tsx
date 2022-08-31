import React from 'react'

import { Section } from '..';
import { TableOfContent } from '../../Table';

import { AiOutlineRight, AiFillStar } from 'react-icons/ai';

const learnMore = [
	"9 Popular Social Messaging Apps For Your Business",
	"9 Tips To Help You Nail Your Social Commerce Plan",
	"7 Tips For Social Media Optimization",
	"Top 11 Traits Of The Best Social Media Firms",
	"Top Social Media Sites For Marketers",
	"How Much Does Advertising On Facebook Cost?",
	"How Much Does It Cost To Advertise On Instagram?",
	"How To Handle A Crisis On Social Media",
	"How To Advertise On Social Media: Stop Scrollin’. Here’s What To Know",
	"Build An Audience On Social Media With These Tips",
	"What Is Social Media Management (And What Does It Include?)",
	"Which Social Media Platforms Are Right For Your Business?",
	"Social Media Marketing For Businesses",
	"What Can A Social Media Marketing Company Do For Your Business?",
	"Is Social Media Marketing Right For Your Business?",
	"Social Media And SEO: Can Social Media Improve Your SEO Rankings?",
	"How To Gauge Social ROI And Why It Matters",
	"What Are Social Media KPIs?",
	"32 Reasons Why Social Media Marketing Is Important",
	"How Much Does Facebook Advertising Cost?",
];

const What = [
	{
		title: "So, what do you get when you choose to partner with us? Practically everything.",
		description: {
			one: "So, why did you decide to invest in social media marketing services?",
			two: "You might have probably thought do so because you want to:",
			three: "At Muscled, we recognize these goals, as well as the value you want to see in outsourcing your enterprise social media advertising. That’s why our services provide a complete package for advertising on social media.",
			four: "For example, Muscled’s social media advertising plans include:",
			five: "As your business social media advertising partner, we provide you with a solution that actually works. Whether you’re looking to reach out on TikTok,Twitter, Instagram, or another social media network, we will take care of your advertising campaign so your company can optimize its time and resources while achieving an impressive return on investment (ROI).",
		},
	},
];

const So = [
	"Save in-house team members’ time",
	"Improve returns from advertising on social media",
	"Boost social media advertising initiatives",
	"Get a better social media advertising strategy",
	"Access industry-leading experts",
	"Optimize internal marketing costs",
	"And more",
];

const Example = [
	"Dedicated account manager, plus a team of platform-specific specialists",
	"Social advertising audit",
	"Social advertising strategy recommendations and/or development",
	"Social media ad creatives",
	"Network tracking pixel installation",
	"Daily account monitoring",
	"Weekly ad creative analysis and optimization",
	"Monthly ad audience analysis and optimization",
	"Customized reports",
	"Monthly reporting",
];

const builtIdentity = [
	{
		title: "Build brand Identity",
		description: {
			one: "Social media is one of the best channels for establishing and building brand Identity.",
			two: "While difficult to accurately measure, brand identity and awareness plays a critical role in a consumer or business buyer turning into a customer. Someone has to discover your brand before they even consider becoming a client, which is why brand awareness is a critical marketing goal.",
			three: "Using social media ads, your business can be able to target future customers by targeting users based on their location, interests, demographics, and more. You can even use existing customer data to find people similar to your client base.",
		},
	},
];

const How = [
	{
		title: "How do we help your business?",
		description:
			"Enterprise social media advertising from Muscled helps your business:",
	},
];

const generateSales = [
	{
		title: "Generate offline and online sales",
		description: {
			one: "Investing in social media advertising earns you revenue.",
			two: "Instagram or Facebook ads promoting your products or services, for example, can make users  visit your online store or brick-and-mortar location. Accurate targeting, convincing ad copy, and an amazing landing page, however, are essential if you want to get results of social media advertising.",
			three: "That’s why it’s worthwhile to partner with an experienced social media advertising agency like Muscled.",
			four: "Not only do we feature an in-house social media team, but we’ve also been named a “Meta Business Partner.” That means we’ve demonstrated phenomenal expertise and client results when it comes to marketing and advertising on platforms like Youtube and Facebook.",
		},
	},
];

const earnCustomer = [
	{
		title: "Once you earn a customer, be able to keep it",
		description: {
			one: "Earning a new customer costs 10 times more than keeping an existing one.",
			two: "For brands today, it’s critical to earn and maintain a customer’s loyalty to your brand. When you have customers loyal to your brand and business, these same customer’s will attract others into becoming your customer too. In fact, 80% of people get advice about their next purchase from social media",
			three: "Building a smart and competitive social media ad campaign strategy and being able to pull it off can help your company engage with these brand advocates consistently, which can keep your business top-of-mind. Plus, having these brand advocates as followers can increase engagement and even shares for organic posts.",
		},
	},
];

const improveBussiness = [
	{
		title: "Improve business social media advertising ROI",
		description: {
			one: "Moving to business social media advertising services can improve your ROI too.",
			two: "From boosting your conversion rates to cutting down on costs per click(CPC),  working with an experienced agency like Muscled can help your business get returns from advertising on social media platforms like LinkedIn, Facebook, and Pinterest.",
			three: "The best part is that your business improves its ROI without the unnecessarily high costs of expanding your internal marketing team. With our business social media advertising management services, you get an entire social media team instantly, which let’s you focus on other areas of your business entirely.",
		},
	},
];

const increase = [
	{
		title: "Increase Remarketing Opportunity",
		description: {
			one: "Remarketing is a powerful online advertising strategy. Retargeted ads make people 70% more likely to convert, which means more people you reach out too, more conversions, more sales. You want to utilize (and benefit) from social media remarketing.",
			two: "The installation of tracking pixels, like from Facebook and LinkedIn, allows your business to initiate remarketing campaigns on these social media platforms.Whenever someone visits your website while logged into their Facebook account, for example, you have the ability to remarket to them on Facebook later.",
			three: "With  Muscled, your business can earn from this social media advertising benefit. Our team will set up the tracking pixels, curate the campaigns, and construct the ads so you can start earning off the missed revenue.",
		},
	},
];

const Why = [
	{
		title: "Why do brands choose Muscled for social media advertising?",
		description:
			"Companies like yours make Muscled their social media advertising partner for a few reasons, including:",
	},
];

const onePartner = [
	{
		title: "We’re a one-stop shop, get everything you need in one partner",
		description: {
			one: "When investing in social media advertising services, having a single partner is invaluable.",
			two: "You spend less time going on multiple calls from different entities regarding different needs.",
			three: "Instead, you have one trusted partner that takes care of everything for you. So you spend less time coordinating and more time on other aspects of your business.",
			four: "Since Muscled is a full-service digital marketing agency, our #+ team of online and social media experts handles every aspect of your campaign. From installing your tracking pixels to developing your ad strategy to building your ad creatives, we do it all — and we do it well.",
			five: "That’s why more than 91% of our clients make us their long-term partner.",
		},
	},
];

const allrounderTeam = [
	{
		title: "Get an all-rounder team",
		description: {
			one: "Establishing an internal social media team is a significant investment, even for an enterprise-level company. In addition to the cost of recruiting and hiring, your company also has to manage salaries and benefits all year round, which isn’t exactly cheap.",
			two: "With our enterprise social media advertising services, your business gets a much more cost-effective option without sacrificing quality. You also get to support your in-house marketing team, minus the time and cost of building an internal social media team.",
			three: "Plus, you get instant access to the best in the industry, which pump your social media ROI.",
		},
	},
];

const PartnerAgency = {
	title: "Partner with the agency that puts focus on the value they give to the client",
	description: {
		one: "No matter how much you spend on advertising, we all want to see returns.",
		two: "At Muscled, our social media agency focuses not only on the results but we want it to be real results. We focus on the metrics that matter the most for you and your business, we’re sales driven. That’s why, in the past # years, we’ve helped our clients earn more than  #$ in revenue.",
		three: "Our services (over the last # years) have also generated the following results for our clients:",
		four: "As your partner, you can trust Muscled to help your brand thrive using social media. Whether you’re looking to build your follower base, boost your online sales, or improve your brand awareness, our team of experts can get the job done.",
	},
};

const PartnerList = [
	"5.2 million phone calls",
	"7.8 million leads",
	"12.9 million managed transactions",
];

const FAQs = [
	{
		title: "FAQs about enterprise social media advertising services",
		description: {
			one: "Looking to learn more about our enterprise social media advertising services? Read our FAQ:",
			two: "What are enterprise social media advertising services?",
			three: "Enterprise social media advertising services use social media ads to promote enterprise organizations on networks like Facebook, Instagram, LinkedIn, and Twitter. Enterprises use social media advertising to build brand awareness, attract followers, reduce client churn, and drive revenue.",
			four: "So, how much does Social Media Advertising Services cost anyway?",
			five: "Services like these and how much they cost depends on a few factors, such as the strategy, ad spend and the agency they partner up with. Typically, enterprises will invest $450 to more than $6000 into social media advertising each month.",
		},
	},
];

const moreFollower = [
	{
		title: "Get more followers : Increase your sales",
		description: {
			one: "Social media advertising allows your business the opportunity not only to increase its online following but also the growth itself. Using social media platforms and a trusted social media agency like Muscled, you can build brand identity and awareness, customer loyalty, and sales.",
			two: "Start using social media to grow your business via social media advertising, if you want to learn what we can do for you. Contact us online or call us at ##### for a consultation today. ",
		},
	},
];

const Contents: React.FC = () => {
  return (
    <Section className="pt-32 grid grid-cols-1 lg:grid-cols-5 gap-3">
    <div className="order-1 col-span-1 lg:order-2 lg:col-span-2 lg:ml-auto md:w-full lg:max-w-[400px]">
        <TableOfContent />
        <div className="mt-16">
            <h1 className="mb-5">
                Learn more about social media advertising
            </h1>
            <ul className="text-[15px] underline decoration-1">
                {learnMore.map((item, key) => (
                    <li key={key} className="py-2">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>

    <div className="order-2 col-span-1 lg:order-1 lg:col-span-3 ml-0 my-10 lg:ml-10 lg:my-0">
        <div>
            {What.map((content, key) => (
                <div key={key}>
                    <h1 className="text-[40px] mb-16">
                        {content.title}
                    </h1>
                    <div className="text-xl">
                        <p>{content.description.one}</p>
                        <p>{content.description.two}</p>
                        <ul className="my-8 ml-10 list-disc">
                            {So.map((item, key) => (
                                <li key={key}>{item}</li>
                            ))}
                        </ul>
                        <p className="my-8">
                            {content.description.three}
                        </p>
                        <p>{content.description.four}</p>
                        <ul className="my-8 ml-10 list-disc">
                            {Example.map((item, key) => (
                                <li key={key}>{item}</li>
                            ))}
                        </ul>
                        <p>{content.description.five}</p>
                    </div>
                </div>
            ))}

            <img
                src="https://picsum.photos/200"
                alt=""
                className="w-[760px] h-[525px] mt-[132px] mb-[60px]"
            />

            {How.map((content, key) => (
                <div key={key}>
                    <h1 className="text-[40px] mb-[70px]">
                        {content.title}
                    </h1>
                    <p className="text-xl">{content.description}</p>
                </div>
            ))}

            {builtIdentity.map((content, key) => (
                <div key={key} className="text-xl">
                    <h1 className="my-12">{content.title}</h1>
                    <p className="my-4">
                        {content.description.one}
                    </p>
                    <p className="my-4">
                        {content.description.two}
                    </p>
                    <p className="my-4">
                        {content.description.three}
                    </p>
                </div>
            ))}

            {generateSales.map((content, key) => (
                <div key={key} className="text-xl">
                    <h1 className="my-12">{content.title}</h1>
                    <p className="my-4">
                        {content.description.one}
                    </p>
                    <p className="my-4">
                        {content.description.two}
                    </p>
                    <p className="my-4">
                        {content.description.three}
                    </p>
                    <p className="my-4">
                        {content.description.four}
                    </p>
                </div>
            ))}

            {earnCustomer.map((content, key) => (
                <div key={key} className="text-xl">
                    <h1 className="my-12">{content.title}</h1>
                    <p className="my-4">
                        {content.description.one}
                    </p>
                    <p className="my-4">
                        {content.description.two}
                    </p>
                    <p className="my-4">
                        {content.description.three}
                    </p>
                </div>
            ))}

            {improveBussiness.map((content, key) => (
                <div key={key} className="text-xl">
                    <h1 className="my-12">{content.title}</h1>
                    <p className="my-4">
                        {content.description.one}
                    </p>
                    <p className="my-4">
                        {content.description.two}
                    </p>
                    <p className="my-4">
                        {content.description.three}
                    </p>
                </div>
            ))}

            {increase.map((content, key) => (
                <div key={key} className="text-xl">
                    <h1 className="my-12">{content.title}</h1>
                    <p className="my-4">
                        {content.description.one}
                    </p>
                    <p className="my-4">
                        {content.description.two}
                    </p>
                    <p className="my-4">
                        {content.description.three}
                    </p>
                </div>
            ))}

            <img
                src="https://picsum.photos/210"
                alt=""
                className="w-[760px] h-[525px] mt-[60px] mb-[60px]"
            />

            {Why.map((content, key) => (
                <div key={key}>
                    <h1 className="text-[40px] mb-16">
                        {content.title}
                    </h1>
                    <p className="text-xl">{content.description}</p>
                </div>
            ))}

            {onePartner.map((content, key) => (
                <div key={key} className="text-xl">
                    <h1 className="my-12">{content.title}</h1>
                    <p className="my-4">
                        {content.description.one}
                    </p>
                    <p className="my-4">
                        {content.description.two}
                    </p>
                    <p className="my-4">
                        {content.description.three}
                    </p>
                    <p className="my-4">
                        {content.description.four}
                    </p>
                    <p className="my-4">
                        {content.description.five}
                    </p>
                </div>
            ))}

            {allrounderTeam.map((content, key) => (
                <div key={key} className="text-xl">
                    <h1 className="my-12">{content.title}</h1>
                    <p className="my-4">
                        {content.description.one}
                    </p>
                    <p className="my-4">
                        {content.description.two}
                    </p>
                    <p className="my-4">
                        {content.description.three}
                    </p>
                </div>
            ))}

            <div className="text-xl">
                <h1 className="my-12">{PartnerAgency.title}</h1>
                <p className="pt-14 pb-20">
                    {PartnerAgency.description.one}
                </p>
                <p className="my-4">
                    {PartnerAgency.description.two}
                </p>
                <p className="my-4">
                    {PartnerAgency.description.three}
                </p>
                <ul className="my-4 ml-10 list-disc">
                    {PartnerList.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))}
                </ul>
                <p className="my-4">
                    {PartnerAgency.description.four}
                </p>
            </div>

            {FAQs.map((content, key) => (
                <div key={key}>
                    <h1 className="text-[40px] mt-20 mb-16">
                        {content.title}
                    </h1>
                    <div className="text-xl">
                        <p className="my-4">
                            {content.description.one}
                        </p>
                        <h1 className="my-12">
                            {content.description.two}
                        </h1>
                        <p className="my-4">
                            {content.description.three}
                        </p>
                        <h1 className="my-12">
                            {content.description.four}
                        </h1>
                        <p className="my-4">
                            {content.description.five}
                        </p>
                    </div>
                </div>
            ))}

            {moreFollower.map((content, key) => (
                <div key={key}>
                    <h1 className="text-[40px] mt-20 mb-16">
                        {content.title}
                    </h1>
                    <div className="text-xl">
                        <p className="my-4">
                            {content.description.one}
                        </p>
                        <p className="my-4">
                            {content.description.two}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-28 max-w-[650px] w-auto bg-sky-800 text-white p-12 space-y-5">
            <p className="font-bold text-3xl">
                For verified ratings of our marketing
                services,please read our:
            </p>
            <div className="flex">
                <AiFillStar className="fill-yellow-400 text-3xl" />
                <AiFillStar className="fill-yellow-400 text-3xl" />
                <AiFillStar className="fill-yellow-400 text-3xl" />
                <AiFillStar className="fill-yellow-400 text-3xl" />
                <AiFillStar className="fill-yellow-400 text-3xl" />
            </div>
            <div className="text-[#D2D2D2] font-medium flex items-center">
                <p>INDUSTRY-LEADING 863 TESTIMONIALS</p>
                <AiOutlineRight className="ml-8" />
            </div>
            <p className="text-[#D2D2D2] font-normal">
                MUSCLED Agency Rating 4.9 out of 5 with 267 ratings
            </p>
        </div>
    </div>
</Section>
  )
}

export default Contents