interface ArrowLeftProp {
  fill?: string;
}

const ArrowLeft = ({ fill = "fill-black" }: ArrowLeftProp) => {
  return (
    <svg
      width="34"
      height="12"
      viewBox="0 0 34 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.0303 6.8526C33.3232 6.5597 33.3232 6.08483 33.0303 5.79194L28.2574 1.01896C27.9645 0.726071 27.4896 0.726071 27.1967 1.01896C26.9038 1.31186 26.9038 1.78673 27.1967 2.07963L31.4393 6.32227L27.1967 10.5649C26.9038 10.8578 26.9038 11.3327 27.1967 11.6256C27.4896 11.9185 27.9645 11.9185 28.2574 11.6256L33.0303 6.8526ZM0.5 7.07227H32.5V5.57227H0.5V7.07227Z"
        className={fill}
      />
    </svg>
  );
};

export default ArrowLeft;
