import React, { useState } from "react";

const Range = () => {
  return (
    <div>
      <div className="py-[40px] px-[5px] mt-6 font-sans">
        <div className="flex justify-between py-6 mb-10">
          {/* Number */}
          {/* Label */}
          <div className="text-white text-left">
            <p className="font-sans text-2xl font-semibold">Number of pages</p>
          </div>

          {/* Range div */}
          <div className="flex ">
            {/* Label */}
            <div className={`bg-black h-5 w-[250px] rounded-full`}></div>

            {/* Range */}
            <div className="flex justify-center items-center">
              <div
                className={`-mt-5 bg-white text-black px-[40px] py-[16px] rounded-full absolute w-auto flex justify-center items-center`}
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">10-50</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Silver div */}
            <div className={`bg-slate-600 h-5 w-[350px] rounded-full`}></div>
          </div>
        </div>

        {/* Style of Design */}
        <div className="flex justify-between py-6 mb-10">
          {/* Label */}
          <div className="text-white text-left">
            <p className="font-sans text-2xl font-semibold">Style of design</p>
          </div>

          {/* Range div */}
          <div className="flex ">
            {/* Label */}
            <div className={`bg-black h-5 w-[250px] rounded-full`}></div>

            {/* Range */}
            <div className="flex justify-center items-center">
              <div
                className={`-mt-5 bg-white ml-28 text-black px-[40px] py-[16px] rounded-full absolute w-auto flex justify-center items-center`}
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      Simple Yet Attractive
                    </p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Silver div */}
            <div className={`bg-slate-600 h-5 w-[350px] rounded-full`}></div>
          </div>
        </div>

        {/* Copywriting number of Pages */}
        <div className="flex justify-between py-6 mb-10">
          {/* Label */}
          <div className="text-white text-left">
            <p className="font-sans text-2xl font-semibold">
              Copywriting number of Pages
            </p>
          </div>

          {/* Range div */}
          <div className="flex ">
            {/* Label */}
            <div className={`bg-black h-5 w-[250px] rounded-full`}></div>

            {/* Range */}
            <div className="flex justify-center items-center">
              <div
                className={`-mt-5 bg-white ml-36 text-black px-[40px] py-[16px] rounded-full absolute w-auto flex justify-center items-center`}
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">5-10</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Silver div */}
            <div className={`bg-slate-600 h-5 w-[350px] rounded-full`}></div>
          </div>
        </div>

        {/* SEO */}
        <div className="flex justify-between py-6 mb-10 ">
          {/* Label */}
          <div className="text-white text-left">
            <p className="font-sans text-2xl font-semibold">SEO</p>
          </div>

          {/* Range div */}
          <div className="flex ">
            {/* Label */}
            <div className={`bg-black h-5 w-[250px] rounded-full`}></div>

            {/* Range */}
            <div className="flex justify-center items-center">
              <div
                className={`-mt-5 bg-white ml-48 text-black px-[40px] py-[16px] rounded-full absolute w-auto flex justify-center items-center`}
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">30 KeyWords</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Silver div */}
            <div className={`bg-slate-600 h-5 w-[350px] rounded-full`}></div>
          </div>
        </div>

        {/* Responsive Design */}
        <div className="flex justify-between py-6 mb-10">
          {/* Label */}
          <div className="text-white text-left">
            <p className="font-sans text-2xl font-semibold">
              Responsive Design
            </p>
          </div>

          {/* Range div */}
          <div className="flex ">
            {/* Label */}
            <div className={`bg-black h-5 w-[600px] rounded-full`}></div>

            {/* Range */}
            <div className="flex justify-center items-center">
              <div
                className={`-mt-5 bg-white -ml-36 text-black px-[40px] py-[16px] rounded-full absolute w-auto flex justify-center items-center`}
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Yes</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Silver div */}
            <div className={`bg-slate-600 h-5 w-0 rounded-full`}></div>
          </div>
        </div>

        {/* Database Integration */}
        <div className="flex justify-between py-6 mb-10">
          {/* Label */}
          <div className="text-white text-left">
            <p className="font-sans text-2xl font-semibold">
              Database Integration
            </p>
          </div>

          {/* Range div */}
          <div className="flex ">
            {/* Label */}
            <div className={`bg-black h-5 w-[350px] rounded-full`}></div>

            {/* Range */}
            <div className="flex justify-center items-center">
              <div
                className={`-mt-5 bg-white -ml-24 text-black px-[40px] py-[16px] rounded-full absolute w-auto flex justify-center items-center`}
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Basic</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Silver div */}
            <div className={`bg-slate-600 h-5 w-[250px] rounded-full`}></div>
          </div>
        </div>

        {/* Ecommerce Funtionality */}
        <div className="flex justify-between py-6 mb-10">
          {/* Label */}
          <div className="text-white text-left">
            <p className="font-sans text-2xl font-semibold">
              Ecommerce Funtionality
            </p>
          </div>

          {/* Range div */}
          <div className="flex ">
            {/* Label */}
            <div className={`bg-black h-5 w-[350px] rounded-full`}></div>

            {/* Range */}
            <div className="flex justify-center items-center">
              <div
                className={`-mt-5 bg-white -ml-24 text-black px-[40px] py-[16px] rounded-full absolute w-auto flex justify-center items-center`}
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Basic</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Silver div */}
            <div className={`bg-slate-600 h-5 w-[250px] rounded-full`}></div>
          </div>
        </div>

        {/* CMS */}
        <div className="flex justify-between py-6 mb-10">
          {/* Label */}
          <div className="text-white text-left">
            <p className="font-sans text-2xl font-semibold">CMS</p>
          </div>

          {/* Range div */}
          <div className="flex">
            {/* Label */}
            <div className={`bg-black h-5 w-[350px] rounded-full`}></div>

            {/* Range */}
            <div className="flex justify-center items-center">
              <div
                className={`-mt-5 bg-white -ml-24 text-black px-[40px] py-[16px] rounded-full absolute w-auto flex justify-center items-center`}
              >
                <div className="flex">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Standard</p>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Silver div */}
            <div className={`bg-slate-600 h-5 w-[250px] rounded-full`}></div>
          </div>
        </div>

        <div className="flex justify-end w-full mt-16">
          <button className="bg-black w-[600px] rounded-lg text-white p-4">
            <p className="font-sans text-xl font-semibold">See Pricing</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Range;
