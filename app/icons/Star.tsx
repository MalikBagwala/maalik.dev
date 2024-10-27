import { ComponentProps } from "react";

const Star = ({ ...props }: ComponentProps<"svg">) => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      {...props}
    >
      <path d="M26.222 13.111c0-2.28-2.28-3.99-4.56-3.99-2.85 0-4.56-2.28-4.56-4.56C16.531 2.28 15.391 0 13.111 0 10.83 0 9.12 2.28 9.12 4.56c0 2.85-2.28 4.56-4.56 4.56S0 10.83 0 13.112c0 2.28 2.28 3.99 4.56 3.99 2.85 0 4.56 2.28 4.56 4.56 0 2.281 1.71 4.561 3.991 4.561 2.28 0 3.99-2.28 3.99-4.56s2.28-4.56 4.56-4.56c2.281-.57 4.561-1.71 4.561-3.99z"></path>
    </svg>
  );
};

export default Star;
