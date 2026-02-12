"use client";

import React from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
  style?: React.CSSProperties;
}

export function Spotlight({ fill, style }: SpotlightProps) {
  return (
    <svg
      style={{
        pointerEvents: "none",
        position: "absolute",
        zIndex: 1,
        height: "169%",
        width: "84%",
        opacity: 0,
        animation: "spotlight 2s ease 0.75s forwards",
        top: "-10rem",
        left: "15rem",
        ...style,
      }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#spotlight-filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="spotlight-filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}
