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
      <g fill={color} clipPath="url(#clip0_501_26408)">
        <path d="M8.25 8A.75.75 0 019 7.25h5a.75.75 0 010 1.5H9A.75.75 0 018.25 8zM6 7a1 1 0 100 2 1 1 0 000-2zM5 12a1 1 0 112 0 1 1 0 01-2 0zM9 11.25a.75.75 0 000 1.5h5a.75.75 0 000-1.5H9zM5 16a1 1 0 112 0 1 1 0 01-2 0zM9 15.25a.75.75 0 000 1.5h5a.75.75 0 000-1.5H9z"></path>
        <path
          fillRule="evenodd"
          d="M19.583 22.745a.738.738 0 01-.083.005h-14a4.25 4.25 0 01-4.25-4.25v-14A3.25 3.25 0 014.5 1.25H15a3.248 3.248 0 013.25 3.248v7.752h3.25c.69 0 1.25.56 1.25 1.25v6.25a3 3 0 01-3.167 2.995zM2.75 4.5c0-.966.784-1.75 1.75-1.75H15c.967 0 1.75.782 1.75 1.748V19.75c0 .546.146 1.059.401 1.5H5.5a2.75 2.75 0 01-2.75-2.75v-14zm15.5 9.25v6a1.5 1.5 0 003 0v-6h-3z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_501_26408">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
