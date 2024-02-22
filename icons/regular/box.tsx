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
      <g fill={color} clipPath="url(#clip0_501_26526)">
        <path d="M7.308 15.916a.75.75 0 10-.616 1.368l2 .9a.75.75 0 10.616-1.368l-2-.9z"></path>
        <path
          fillRule="evenodd"
          d="M13.792 1.656a4.25 4.25 0 00-3.584 0l-6.5 3.023A4.25 4.25 0 001.25 8.532v7.015a4.25 4.25 0 002.49 3.868l6.5 2.958a4.25 4.25 0 003.52 0l6.5-2.958a4.25 4.25 0 002.49-3.868V8.532a4.25 4.25 0 00-2.458-3.853l-6.5-3.023zm-2.951 1.36a2.75 2.75 0 012.319 0l6.5 3.023c.467.217.854.556 1.128.968l-2.98 1.412-9.066-4.427 2.098-.976zm-3.85 1.79L4.34 6.04a2.747 2.747 0 00-1.13.968L12 11.17l4.074-1.93L6.99 4.807zM2.75 8.45l8.5 4.026v8.676a2.765 2.765 0 01-.39-.143l-6.5-2.958a2.75 2.75 0 01-1.611-2.503V8.532l.001-.083zm10 12.701a2.75 2.75 0 00.388-.142l6.5-2.958a2.75 2.75 0 001.611-2.503V8.532l-.001-.083-8.499 4.025.001 8.676z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_501_26526">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
