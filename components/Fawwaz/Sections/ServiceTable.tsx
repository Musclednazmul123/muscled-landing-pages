import React from 'react';
import {Table, TableOfContent, Td, Th} from '../../../components/Fawwaz/Table';
import { AiOutlineCheck, AiFillPhone } from 'react-icons/ai';
import Button from 'components/Fawwaz/Button';

const ServiceTable = () => {
    return (
        <>
            <div className='pt-24 px-6 md:px-24'>
                <div className='table-section-header text-center'>
                    <h4 className='text-2xl md:text-4xl mb-8 font-bold leading-10'>Our Landing Page Design Pricing</h4>
                    <p className='text-2xl font-normal leading-9 mb-16'>View our landing page design services pricing or contact us online for a custom quote</p>
                </div>
                <Table className='table-fixed'>
                    <thead>
                        <tr>
                            <Th
                                className="text-left text-white rounded-tl-xl"
                                content="Features"
                            />
                            <Td
                                className="text-center font-bold"
                                content="Dynamic w/ Testing"
                                type="basic"
                            />

                            <Td
                                className="text-center font-bold"
                                content="Fully-Optimized"
                                type="premium"
                            />
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Fully Responsive Design Across All Devices (Desktop, Mobile, Tablet)"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Online project management scheduling"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Dedicated account representative"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Market research"
                            />
                            <Td 
                                type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Conversion strategy"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Conversion best practices documentation"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="2 hours coaching on strategy implementation"
                            />
                            <Td 
                                type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Development of unique selling position"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Landing page design"
                            />
                            <Td 
                                content="2 Iterations" type="basic" 
                            />
                            <Td 
                                content="2 Iterations"
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Landing page programming/build"
                            />
                            <Td 
                                content="1 Iterations" type="basic" 
                            />
                            <Td 
                                content="3 Iterations" 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Multivariate conversion testing"
                            />
                            <Td 
                                content="1 Iterations" type="basic" 
                            />
                            <Td 
                                content="3 Iterations" 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Copywriting"
                            />
                            <Td 
                                content="By Quote" type="basic" 
                            />
                            <Td 
                                content="By Quote" 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="User testing"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Setup of auto responders"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="PPC campaign review"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Flash/jQuery interactive calls to action"
                            />
                            <Td 
                                type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Conversion path implementation"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Lead forms integrated into CRM (ex. Salesforce.com)"
                            />
                            <Td 
                                type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Performance test reporting"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Conversion reporting"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="450+ SMEs behind campaign driving results"
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} type="basic" 
                            />
                            <Td 
                                content={<AiOutlineCheck className="mx-auto fill-green-500" />} 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Database integration"
                            />
                            <Td 
                                content="By Quote" type="basic" 
                            />
                            <Td 
                                content="By Quote" 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Video creation & implementation"
                            />
                            <Td 
                                content="By Quote" type="basic" 
                            />
                            <Td 
                                content="By Quote" 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Time frame"
                            />
                            <Td 
                                content="7 weeks" type="basic" 
                            />
                            <Td 
                                content="10 to 14 weeks" 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center text-black-80">
                            <Th
                                className="text-left text-white font-normal"
                                content="Investment"
                            />
                            <Td 
                                content="$2,400" type="basic" 
                            />
                            <Td 
                                content="$3,200" 
                                type="premium" 
                            />
						</tr>
                        <tr className="text-center">
                            <Th
                                className="text-white text-left font-normal rounded-bl-xl"
                                content={
                                    <>
                                        <p>
                                        Give Us a Call if You Need Information
                                        </p>
                                        <div className="flex gap-2 items-center mt-2 cursor-pointer">
                                            <AiFillPhone className="fill-sky-500" />
                                            <p className="text-sky-500 font-bold">
                                                888-601-5359
                                            </p>
                                        </div>
                                    </>
                                }
                            />
                            <Td
                                type="basic"
                                content={
                                    <Button
                                        bgColor="bg-black"
                                        textColor="text-white"
                                        className="mx-auto">
                                        Get Started
                                    </Button>
                                }
                            />
                            <Td
                                type="premium"
                                content={
                                    <Button
                                        bgColor="bg-black"
                                        textColor="text-white"
                                        className="mx-auto">
                                        Get Started
                                    </Button>
                                }
                            />
						</tr>
                    </tbody>
                </Table>
            </div>  
        </>
    );
};

export default ServiceTable;