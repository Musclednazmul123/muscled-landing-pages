import React from "react";

const SimpleCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-14">
      <div className="flex flex-col w-full md:flex-row justify-center items-center my-14">
        <div className="xl:w-[29%] w-full font-sans  bg-[#c400001a] ml-[20px] mb-20">
          <div className="pl-5 py-5 flex flex-col justify-start h-[350px] items-start">
            <h2 className="text-2xl font-medium pb-5">Web Design Services</h2>
            <ul className="py-5 text-xl font-sans">
              <li className="pb-5">
                <a href="#">Web Design</a>
              </li>
              <li className="pb-5">
                <a href="#">Website Redesign</a>
              </li>
              <li className="pb-5">
                <a href="#">Landing Page Design</a>
              </li>
              <li className="pb-5">
                <a href="#">Rapid Web Design</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="xl:w-[29%] w-full font-sans  bg-[#c400001a] ml-[20px] mb-20">
          <div className="pl-5 py-5 flex flex-col justify-start h-[350px] items-start">
            <h2 className="text-2xl font-medium pb-5">
              Web Marketing Services
            </h2>
            <ul className="py-5 text-xl font-sans">
              <li className="pb-5">
                <a href="#">SEO</a>
              </li>
              <li className="pb-5">
                <a href="#">Website Copywriting</a>
              </li>
              <li className="pb-5">
                <a href="#">PPC Management</a>
              </li>
              <li className="pb-5">
                <a href="#">Content Marketing</a>
              </li>
              <li className="pb-5">
                <a href="#">All Internet Marketing Services</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="xl:w-[29%] w-full font-sans  bg-[#c400001a] ml-[20px] mb-20">
          <div className="pl-5 py-5 flex flex-col justify-start h-[350px] items-start">
            <h2 className="text-2xl font-medium pb-5">
              Learn More About CMS Development
            </h2>
            <ul className="py-5 text-xl font-sans">
              <li className="pb-5">
                <a href="#">The Complete Guide to Redesigning Your Website</a>
              </li>
              <li className="pb-5">
                <a href="#">How to Know Which CMS to Use</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
