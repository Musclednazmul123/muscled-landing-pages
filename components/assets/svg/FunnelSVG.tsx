import React, { FC } from "react";
import { SVGProps } from "types/types";

const FunnelSVG: FC<SVGProps> = ({ className, ...props }) => {
  return (
    <svg
      width="81"
      height="81"
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 11.5H72.5L48.5 43.5H32.5L8.5 11.5Z"
        fill="url(#paint0_linear_2_12712)"
      />
      <path
        d="M32.5 43.5H48.5V67.5L32.5 73.5V43.5Z"
        fill="url(#paint1_linear_2_12712)"
      />
      <path
        d="M8.5 7.5H72.5V11.5H8.5V7.5Z"
        fill="url(#paint2_linear_2_12712)"
      />
      <path
        d="M59.5 40.5C59.5 51.5457 50.5457 60.5 39.5 60.5C28.4543 60.5 19.5 51.5457 19.5 40.5C19.5 29.4543 28.4543 20.5 39.5 20.5C50.5457 20.5 59.5 29.4543 59.5 40.5Z"
        fill="url(#paint3_linear_2_12712)"
      />
      <path
        d="M39.1482 51.5H40.9014L40.9097 49.6215C44.4574 49.3672 46.4917 47.4312 46.5 44.6832C46.4917 41.7711 44.0687 40.4422 41.5216 39.8434L40.9758 39.7039L41.0089 35.0199C42.3321 35.2496 43.1838 36.0371 43.3162 37.2184H46.2684C46.2188 34.6098 44.1514 32.7066 41.0254 32.4113L41.0337 30.5H39.2805L39.2723 32.4113C36.1711 32.723 33.9383 34.6098 33.9466 37.325C33.9466 39.7367 35.6749 41.123 38.4618 41.8367L39.2061 42.0254L39.173 46.9883C37.6927 46.7586 36.626 45.9219 36.5184 44.4371H33.5C33.6158 47.5133 35.7494 49.3426 39.1565 49.6215L39.1482 51.5ZM40.9262 46.9883L40.9593 42.4848C42.4644 42.9195 43.4237 43.4937 43.4319 44.6586C43.4237 45.8727 42.4396 46.7422 40.9262 46.9883ZM39.2226 39.2609C38.0814 38.9 37.0394 38.3012 37.056 37.1363C37.0642 36.0781 37.8664 35.2578 39.2557 35.0199L39.2226 39.2609Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_12712"
          x1="63.3"
          y1="8.92857"
          x2="50.3431"
          y2="44.2533"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C40000" />
          <stop offset="1" stopColor="#FF7262" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2_12712"
          x1="46.2"
          y1="41.9732"
          x2="34.4144"
          y2="55.5022"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C40000" />
          <stop offset="1" stopColor="#FF7262" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2_12712"
          x1="63.3"
          y1="7.17857"
          x2="63.0708"
          y2="12.1777"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C40000" />
          <stop offset="1" stopColor="#FF7262" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2_12712"
          x1="44.1667"
          y1="33.8333"
          x2="76.8333"
          y2="-0.833328"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7262" />
          <stop offset="1" stopColor="#C40000" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default FunnelSVG;
