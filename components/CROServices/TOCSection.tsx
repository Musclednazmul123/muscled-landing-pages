import React, { useEffect } from "react";
import Link from "next/link";

export type TOCSectionsProps = {
  links?: Array<{
    title?: string;
    to?: string;
  }>;
};

const TOCSections = (props: TOCSectionsProps) => {
 

  const [isHidden, setIsHidden] = React.useState(false);

  return (
    <div className="rounded-lg border border-gray-300 overflow-hidden">
      <div className="px-7 py-4 bg-[#F2F2F2] flex items-center">
        <div className="mr-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="24"
              height="24"
              rx="5"
              fill="black"
              fill-opacity="0.8"
            />
            <path
              d="M20 9.77778H7.55556V8H20V9.77778ZM20 13.3333H7.55556V11.5556H20V13.3333ZM20 16.8889H7.55556V15.1111H20V16.8889ZM5.77778 16.8889H4V15.1111H5.77778V16.8889ZM5.77778 8V9.77778H4V8H5.77778ZM5.77778 13.3333H4V11.5556H5.77778V13.3333Z"
              fill="white"
            />
          </svg>
        </div>

        <p className="text-lg font-bold">Table of Contents</p>
        <button
          className="ml-auto"
          onClick={() => {
            setIsHidden((s) => !s);
          }}
        >
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: isHidden ? "rotate(0deg)" : "rotate(180deg)",
            }}
          >
            <path
              d="M2.28571 0.428555L8 6.14284L13.7143 0.428555L16 1.57141L8 9.57141L-3.49691e-07 1.57141L2.28571 0.428555Z"
              fill="black"
              fill-opacity="0.8"
            />
          </svg>
        </button>
      </div>
      {isHidden && (
        <div className="mb-6 mt-6">
          {props.links?.map((v) => (
            <Link href={v.to || "/#"} key={v.title}>
              <a>
                <div className="px-7 flex items-center mb-7">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <path
                      d="M-5.84694e-06 8.57143L3.57142 5L-6.47138e-06 1.42857L0.714279 4.37114e-07L5.71428 5L0.71428 10L-5.84694e-06 8.57143Z"
                      fill="black"
                      fill-opacity="0.8"
                    />
                    <path
                      d="M6.14257 8.57143L9.714 5L6.14257 1.42857L6.85686 4.37114e-07L11.8569 5L6.85686 10L6.14257 8.57143Z"
                      fill="black"
                      fill-opacity="0.8"
                    />
                  </svg>
                  <p>{v.title}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TOCSections;
