import React from "react";


export default function Funnel() {
  return (
    <>
      <svg
        width={80}
        height={80}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 11H72L48 43H32L8 11Z" fill="url(#paint0_linear_5_1754)" />
        <path d="M32 43H48V67L32 73V43Z" fill="url(#paint1_linear_5_1754)" />
        <path d="M8 7H72V11H8V7Z" fill="url(#paint2_linear_5_1754)" />
        <path
          d="M59 40C59 51.0457 50.0457 60 39 60C27.9543 60 19 51.0457 19 40C19 28.9543 27.9543 20 39 20C50.0457 20 59 28.9543 59 40Z"
          fill="url(#paint3_linear_5_1754)"
        />
        <path
          d="M38.6482 51H40.4014L40.4097 49.1215C43.9574 48.8672 45.9917 46.9312 46 44.1832C45.9917 41.2711 43.5687 39.9422 41.0216 39.3434L40.4758 39.2039L40.5089 34.5199C41.8321 34.7496 42.6838 35.5371 42.8162 36.7184H45.7684C45.7188 34.1098 43.6514 32.2066 40.5254 31.9113L40.5337 30H38.7805L38.7723 31.9113C35.6711 32.223 33.4383 34.1098 33.4466 36.825C33.4466 39.2367 35.1749 40.623 37.9618 41.3367L38.7061 41.5254L38.673 46.4883C37.1927 46.2586 36.126 45.4219 36.0184 43.9371H33C33.1158 47.0133 35.2494 48.8426 38.6565 49.1215L38.6482 51ZM40.4262 46.4883L40.4593 41.9848C41.9644 42.4195 42.9237 42.9937 42.9319 44.1586C42.9237 45.3727 41.9396 46.2422 40.4262 46.4883ZM38.7226 38.7609C37.5814 38.4 36.5394 37.8012 36.556 36.6363C36.5642 35.5781 37.3664 34.7578 38.7557 34.5199L38.7226 38.7609Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_5_1754"
            x1="62.8"
            y1="8.42857"
            x2="49.8431"
            y2="43.7533"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C40000" />
            <stop offset={1} stopColor="#FF7262" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_5_1754"
            x1="45.7"
            y1="41.4732"
            x2="33.9144"
            y2="55.0022"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C40000" />
            <stop offset={1} stopColor="#FF7262" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_5_1754"
            x1="62.8"
            y1="6.67857"
            x2="62.5708"
            y2="11.6777"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C40000" />
            <stop offset={1} stopColor="#FF7262" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_5_1754"
            x1="43.6667"
            y1="33.3333"
            x2="76.3333"
            y2="-1.33333"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF7262" />
            <stop offset={1} stopColor="#C40000" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
