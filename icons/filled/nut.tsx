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
      <g clipPath="url(#clip0_501_27038)">
        <path
          fill={color}
          fillRule="evenodd"
          d="M9.74 1.883a4.25 4.25 0 014.52 0l5.5 3.453a4.25 4.25 0 011.99 3.6v6.129a4.25 4.25 0 01-1.99 3.6l-5.5 3.452a4.25 4.25 0 01-4.52 0l-5.5-3.453a4.25 4.25 0 01-1.99-3.6V8.936a4.25 4.25 0 011.99-3.6l5.5-3.452zM12 15a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_501_27038">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
