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
      <g fill={color} clipPath="url(#clip0_1282_491)">
        <path
          d="M13.792 1.656a4.25 4.25 0 00-3.584 0l-6.5 3.023A4.25 4.25 0 001.25 8.532v7.015a4.25 4.25 0 002.49 3.868l6.5 2.958a4.25 4.25 0 003.52 0l6.5-2.958a4.25 4.25 0 002.49-3.868V8.532a4.25 4.25 0 00-2.458-3.853l-6.5-3.023z"
          opacity="0.4"
        ></path>
        <path d="M17.759 8.394l4.355-2.098c.264.427.453.9.553 1.4L12.75 12.47v10.217a4.25 4.25 0 01-1.5 0V12.475L1.32 7.77c.091-.502.272-.978.528-1.41l10.15 4.809 4.04-1.946L5.256 3.959l1.752-.814 10.752 5.25z"></path>
        <path d="M7.308 15.916a.75.75 0 10-.616 1.368l2 .9a.75.75 0 10.616-1.368l-2-.9z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1282_491">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Icon;
