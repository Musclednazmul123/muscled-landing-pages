import React from 'react';
// import { TableOfContent } from '../Table';
import GuideItem from '../../extra/GuideItem';
import TableOfContents from '../../extra/TableOfContents';
import Button from 'components/Fawwaz/Button';
import SpeechBubble from 'components/assets/svg/SpeechBubble';
import { BiChevronRight } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai'

const GuideDetail = () => {
    return (
        <>
            <div className="pt-24 px-6 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="order-2 md:order-1 md:col-span-2">
                    <GuideItem 
                        id='why-ppc'
                        question='What is PPC?'
                        headingSize='large'
                        children={
                            <>
                                <p>
                                Before taking a deep dive into landing pages let´s first cover the basics of PPC. PPC or Paid per clicks, is an advertising strategy that allows you to reach valuable leads and potential customers interested in your business. These ads appear at the top of the search results, right above the organic listings.
                                </p>
                                <p>
                                PPC ads are a fantastic way of attracting valuable leads that are interested in your business. 
                                </p>
                                <p>    
                                In order to begin using PPC ads, you first need to assign the keywords for your page. The keywords will then trigger your ad to appear in relevant search results. Long tail keywords (which are three or more words) will help reach more qualified leads towards your page.
                                </p>
                                <p>
                                After you have chosen your keywords, you will have to bid for your ads placement. You will set a maximum bid (in this case the amount of money you are willing to pay per click on your ad). This amount is flexible and can be changed at any moment.
                                </p>
                                <p>
                                Your ad´s placement will be determined by both your bid and quality score. Once your placement is confirmed, you will launch your campaign. 
                                </p>
                                <p>
                                You can run PPC ad´s on different social media platforms as well, not just google. The ad´s will appear in the users newsfeed. It's a great way to directly reach new leads and potential customers. 
                                </p>
                                <p>
                                Social media ad´s are seamlessly integrated into a user's news feed. By combining both PPC and social media ads, you will only pay when someone clicks on your ad. The money invested in only going towards valuable leads and potential clients interested in your products and services. 
                                </p>
                                <p>
                                We'll go deeper on these landing pages at a later point. But for now focus on why it's important to have a landing page for your PPC and social media ads. 
                                </p>
                            </>
                        }
                    />

                    <GuideItem 
                        id='ppc-campaign'
                        question='Why have a landing page for a PPC campaign?'
                        headingSize='large'
                        children={
                            <>
                                <p>
                                You can't just depend on SEO (search engine optimization) and online advertising to increase your site's traffic. Converting thaat traffic into sales is a completely different thing. That's why having landing page PPC services is key to your business.
                                </p>
                                <p>
                                The role of the landing page is to convert a visitor to stay and use your site, be it purchasing one of your products or even sharing your page in online communities for others to view.  Instead of dropping your viewers directly on your homepage where they may get lost and not know what to do next, you redirect them to a highly targeted landing page that leads them to the next step in your sales process.  
                                </p>
                                <p>
                                By having a professional landing page design service your business will enjoy growth in customers, a reduced bounce rate and many other benefits. 
                                </p>
                            </> 
                        }
                    />

                    <GuideItem 
                        id='page-guide'
                        question='How Landing Pages Guide Your Audience'
                        headingSize='small'
                        children={
                            <>
                                <p>
                                own an outdoor recreation company and you are currently running a Google Ads campaign that targets searches related to outdoor hobbies.
                                </p>
                                <p>
                                To make a clear example, you should think of your landing pages in terms of continuity. For example you
                                </p>
                                <p>
                                If you don't have a landing page potential customers who clicked on the ad seeking more information for camping supplies would end up on your homepage. Given the breadth of products and supplies for outdoor activities the customer then needs to figure out how to navigate your website until he reaches the section related to camping.
                                </p>
                                <p>
                                This is already too much work for most people, and it will result in poor conversion rates. When a potential customer clicks on your advertisement, they’re more inclined to make a purchase if they’re presented with the information, price, and so on right away.
                                </p>
                                <p>
                                Cut your distractions and simplify your sales process. Humans want consistency.
                                </p>
                            </>
                        }
                    />

                    <GuideItem 
                        id='better-exp'
                        question='How landing pages help you provide a better experience'
                        headingSize='small'
                        children = {
                            <>
                                <p>
                                Landing pages structure your data and make it more accessible. It will be impossible for your website to be optimized for improved user metrics if everything is directed to your homepage.
                                </p>
                                <p>
                                A single modification on your website impacts everyone who visits it. Increasing the conversion rate for one demographic may reduce the rate of another. 
                                </p>
                                <p>
                                Landing pages function as divisions. Muscled Digital Agency helps you launch a website that has clear and natural divisions through the integration of better landing pages.
                                </p>
                            </>
                        }
                    />

                    <GuideItem 
                        id='how-much'
                        question='How much do you need to spend on a custom landing page?'
                        headingSize='large'
                        children={
                            <>
                                <p>
                                The price varies.
                                </p>
                                <p>
                                The amount of content, testing, development, and optimization that goes into a single landing page affects its pricing. A simple PPC landing page might as well be free, but if you want a complex social media landing page with a strong call to action, you’re going to have to spend a little bit more.
                                </p>
                                <p>
                                The cost of hiring a designer might range from $1,400 to $3,200, depending on the design and how optimized you want it to be. The more complicated you’re trying to make it, the more you’re going to pay.
                                </p>
                            </>
                        }
                    />

                    <GuideItem 
                        id='how-much-specific'
                        question='How much does a specific custom landing page cost?'
                        headingSize='large'
                        children={
                            <>
                                <p>
                                There are two ways you can get visitors to your landing pages: through social media such as Facebook Pages, Twitter, and so on; or through PPC advertising. The purpose of these landing pages depends on the marketing strategy you’re using. Learn more about them below.
                                </p>
                            </>
                        }
                    />

                    <GuideItem 
                        id='short-form'
                        question='It has short forms'
                        headingSize='small'
                        children={
                            <>
                                <p>
                                It’s normal for businesses to have forms on their landing pages to collect information from their audience. If you feel the need to have one, make sure to keep it short and straightforward.
                                </p> 
                                <p>
                                People will feel like their time is wasted on a lengthy form. You’re going to risk losing leads if your form is too long. 
                                </p>
                                <p>
                                Most businesses will only request a first name, last name, and email address. These details are sufficient for you to begin contacting that lead. You can get more useful information later on by running an email marketing campaign.
                                </p>
                                <p>
                                By keeping your forms brief, you will encourage more people to fill them out and share their information with you. This is still a valuable lead.
                                </p>
                                <div>
                                    <div className='bg-[#0D263D] px-24 py-20'>
                                        <div className="flex flex-col lg:flex lg:flex-row mb-4 gap-10">
                                            <div className='text-white'>
                                                <p className='text-base mb-2'>
                                                    93% of the Muscled customers are extremely satisfied with their digital marketing results.
                                                </p>
                                                <p className='text-sm'>
                                                “Working with Muscled, everything is very organised and strategic. We’re only a year into our partnership nd our expectations have definetly been met.”
                                                </p>
                                            </div>
                                            <div>
                                                <SpeechBubble />
                                            </div>
                                        </div>
                                        <div>
                                            <Button
                                                bgColor="bg-black"
                                                textColor="text-white"
                                                className="mx-auto">
                                                View more client Testimonials
                                            </Button>
                                        </div>
                                    </div>
                                    <p>
                                        Your landing page will be abandoned if it fails to capture the target audience. Most users will not have the time to test your credibility. In a snap, they will know if they can trust you based on the design of your landing page. They will also scoff and leave your landing pages alone if the content you’ve shown is different from the branding that you wanted to establish.

                                        Your landing pages and marketing materials must be strong, clear, and brief to turn users into fans or customers. At the very least, it should look professional instead of out of place. All the best-designed landing pages have incorporated the components we’ve presented above and more.
                                    </p>
                                </div>
                            </>
                        }
                    />
                    
                    <GuideItem 
                        id='faq'
                        question='FAQs about landing page design services'
                        headingSize='large'
                        children={
                            <>
                                <h4 className='text-2xl'>What are landing page design services?</h4>
                                <p>
                                Landing page design services typically comprise designing, developing, testing, and launching a landing page where the traffic from ads is directed to. Landing page design services boost a website’s conversion rates through ad campaigns, email marketing, and many more. 
                                </p>
                                <h4 className='text-2xl'>How much does it usually cost?</h4>
                                <p>
                                The price varies depending on the design of your page, the number of pages that need to be made, and the landing page design firm. Businesses will typically invest $75 to $3000 per landing page.
                                </p>
                            </>
                        }
                    />

                    <GuideItem 
                        id='get-most'
                        question='Get the most out of your landing page designs'
                        headingSize='large'
                        children={
                            <>
                                <p>
                                If you want to do more with your website and ad campaigns, schedule a call. We’re looking forward to giving your website the workout that it needs!
                                </p>
                                <div className='px-12 py-9 bg-[#086680] flex flex-col gap-2'>
                                    <h4 className='text-3xl text-white'>For verified ratings of our marketing services,please read our:</h4>
                                    <div className='flex text-[#F8CC25]'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                    <div className='flex items-center text-[#D2D2D2] text-base'>
                                        <p>INDUSTRY-LEADING 863 TESTIMONIALS</p>
                                        <BiChevronRight size={25}/>
                                    </div>
                                    <div className='flex items-center text-[#D2D2D2] text-base'>
                                        <p>MUSCLED Agency Rating 4.9 out of 5 with 267 ratings</p>
                                    </div>
                                </div>
                            </>
                        }
                    />

                </div>
                <div className='order-1 col-span-1 lg:order-2 lg:ml-auto md:w-full lg:max-w-[400px]'>
                    <TableOfContents 
                        questions={
                            [
                                {
                                    id: 'why-ppc',
                                    question: 'What is PPC?'
                                },
                                {
                                    id: 'ppc-campaign',
                                    question: 'Why have a landing page for a PPC campaign?'
                                },
                                {
                                    id: 'page-guide',
                                    question: 'How Landing Pages Guide Your Audience'
                                },
                                {
                                    id: 'better-exp',
                                    question: 'How landing pages help you provide a better experience'
                                },
                                {
                                    id: 'how-much',
                                    question: 'How much do you need to spend on a custom landing page?'
                                },
                                {
                                    id: 'how-much-specific',
                                    question: 'How much does a specific custom landing page cost?'
                                }

                            ]
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default GuideDetail; 




