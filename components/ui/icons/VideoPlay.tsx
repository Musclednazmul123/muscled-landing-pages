const VideoPlay = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 508 403"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_4_24004)">
        <rect x="25" y="25" width="448" height="343" rx="10" fill="#D9D9D9" />
      </g>
      <path
        d="M271.787 169H225.991C224.89 169 224 170 224 171.238V222.713C224 223.951 224.89 224.951 225.991 224.951H271.787C272.888 224.951 273.778 223.951 273.778 222.713V171.238C273.778 170 272.888 169 271.787 169ZM256.959 197.591L244.552 208.557C244.092 208.963 243.413 208.599 243.413 207.942V186.016C243.413 185.359 244.092 184.988 244.552 185.401L256.959 196.36C257.042 196.433 257.109 196.527 257.155 196.633C257.201 196.74 257.225 196.857 257.225 196.975C257.225 197.094 257.201 197.211 257.155 197.318C257.109 197.424 257.042 197.518 256.959 197.591Z"
        fill="black"
        fillOpacity="0.05"
      />
      <path
        d="M256.959 197.591L244.552 208.557C244.092 208.963 243.413 208.599 243.413 207.942V186.016C243.413 185.359 244.092 184.988 244.552 185.401L256.959 196.36C257.042 196.433 257.109 196.527 257.155 196.633C257.201 196.74 257.225 196.857 257.225 196.975C257.225 197.094 257.201 197.211 257.155 197.318C257.109 197.424 257.042 197.518 256.959 197.591Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_4_24004"
          x="0"
          y="0"
          width="508"
          height="403"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="10"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_4_24004"
          />
          <feOffset dx="5" dy="5" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.695833 0 0 0 0 0.687135 0 0 0 0 0.687135 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4_24004"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4_24004"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default VideoPlay;
