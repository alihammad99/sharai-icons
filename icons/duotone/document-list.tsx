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
      <g fill={color} clipPath="url(#clip0_1282_487)">
        <path
          d="M18.25 20.006c0 1.994 1.057 2.744 1.75 2.744H5.5a4.25 4.25 0 01-4.25-4.25v-14A3.25 3.25 0 014.5 1.25H15a3.245 3.245 0 013.25 3.244v15.512z"
          opacity="0.4"
        ></path>
        <path d="M6 7a1 1 0 100 2 1 1 0 000-2zM8.25 8A.75.75 0 019 7.25h5a.75.75 0 010 1.5H9A.75.75 0 018.25 8zM19.91 22.746c-.692-.062-1.66-.831-1.66-2.74V12.25h3.25c.69 0 1.25.56 1.25 1.25v6.25a3 3 0 01-2.84 2.996zM5 12a1 1 0 112 0 1 1 0 01-2 0zM9 11.25a.75.75 0 000 1.5h5a.75.75 0 000-1.5H9zM5 16a1 1 0 112 0 1 1 0 01-2 0zM9 15.25a.75.75 0 000 1.5h5a.75.75 0 000-1.5H9z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1282_487">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
