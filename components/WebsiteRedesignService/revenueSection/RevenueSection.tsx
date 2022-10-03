import React from 'react'
import Card from '../../Fawwaz/Card/Card'
import cardBg from '../../../components/assets/qwe.png'
import Button from '../../Fawwaz/Button'
import ReactPlayerModal from "../../../components/ReactPlayerModal";
import playIcon from 'components/playIcon';



const RevenueSection = () => {
    return (
        <div className="p-3 bg-red-100">
            <div className="flex flex-wrap gap-10 justify-center py-20">
                <div className="max-w-[760px] space-y-7">
                    <h2 className="text-[40px] leading-[40px] font-bold">
                        Grow your revenue with website redesign services.
                    </h2>
                    <p className="text-xl leading-5">
                        <span>
                            People take about 15 minutes to consume content, and 60% of them would rather read something more than just a wall of text. Your website needs to be both beautiful and effective. It takes four seconds before your site’s visitor switches to another site, so it's imperative that you invest in a company that can deliver.
                        </span>
                        <br /><br />
                        <span>Make a site that garners attention and makes people stay longer with Muscled Digital Agency. Our in-house design and development team is ready to roll out and make the most of your investment count.</span>
                        <br /><br />

                        <span>
                            Scroll down to see more specific details about how we do our website redesign services and know what kinds of questions you need to ask in order to communicate what your redesigned website is going to be.
                        </span>
                        <br /><br />

                        <span>
                            If you’re looking for a top-notch and competitive company, schedule Muscled Digital Agency a call.
                        </span>
                    </p>
                </div>

                <div className="w-full md:w-[400px]">
                    <Card className="max-w-[440px] w-full p-6 rounded-md mb-7 relative self-start my-3">
                        <img
                            src={cardBg.src}
                            alt={cardBg.src}
                            className="absolute top-0 left-0 w-full h-full z-10 rounded-md"
                        />
                        <p className="relative text-white max-w-[210px] font-bold leading-[150%] z-20">
                            Looking for custom plans and pricing? Request a
                            proposal to receive yours.
                        </p>
                        <Button
                            bgColor="bg-black"
                            textColor="text-white"
                            className="mt-6 relative z-20 py-3.5 px-5">
                            Request a Proposal
                        </Button>
                    </Card>
                    <ReactPlayerModal
                        width="w-fit"
                        url="https://www.youtube.com/embed/D0UnqGm_miA"
                        thumbnail="https://www.youtube.com/embed/D0UnqGm_miA"
                        Icon={playIcon}
                    />
                </div>
            </div>
        </div>
    )
}

export default RevenueSection