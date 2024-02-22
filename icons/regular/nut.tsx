import React from "react";

function Icon({
  color = "#6E6D99",
  size = 24,
}: {
  color: string;
  size: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        fill={color}
        fillRule="evenodd"
        clipPath="url(#clip0_501_26366)"
        clipRule="evenodd"
      >
        <path d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM9.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z"></path>
        <path d="M14.26 1.883a4.25 4.25 0 00-4.52 0l-5.5 3.453a4.25 4.25 0 00-1.99 3.6v6.129a4.25 4.25 0 001.99 3.6l5.5 3.452a4.25 4.25 0 004.52 0l5.5-3.453a4.25 4.25 0 001.99-3.6V8.936a4.25 4.25 0 00-1.99-3.6l-5.5-3.452zm-3.722 1.27a2.75 2.75 0 012.924 0l5.5 3.453a2.75 2.75 0 011.288 2.33v6.129a2.75 2.75 0 01-1.288 2.329l-5.5 3.453a2.75 2.75 0 01-2.924 0l-5.5-3.453a2.75 2.75 0 01-1.288-2.33V8.936a2.75 2.75 0 011.288-2.329l5.5-3.452z"></path>
      </g>
      <defs>
        <clipPath id="clip0_501_26366">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
