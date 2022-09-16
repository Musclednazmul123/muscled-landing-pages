interface ChevronDownProp {
    fill?: string;
  }
  
  const ChevronDown = ({ fill = "fill-black" }: ChevronDownProp) => {
    return (
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.28571 0.42941L8 6.14369L13.7143 0.429409L16 1.57227L8 9.57227L-3.49691e-07 1.57227L2.28571 0.42941Z"
          className={`${fill}`}
          fillOpacity="0.8"
        />
      </svg>
    );
  };
  
  export default ChevronDown;