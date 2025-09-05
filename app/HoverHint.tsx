"use client";

import React, { useEffect, useRef, useState } from "react";

type HoverHintProps = {
  size?: number;
  className?: string;
  mode?: "loop" | "onSelfHover" | "onTargetHover";
  targetRef?: React.RefObject<HTMLElement>;
  targetSelector?: string;
  title?: string;
};

export default function HoverHint({
  size = 24,
  className = "",
  mode = "loop",
  targetRef,
  targetSelector,
  title = "Наведите курсор",
}: HoverHintProps) {
  const [animating, setAnimating] = useState(true); // всегда анимируем
  const selfRef = useRef<HTMLSpanElement | null>(null);

  return (
    <>
      <style>{`
        @keyframes ht-bounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        @keyframes ht-pulse {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.3); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.6; }
        }
        @keyframes ht-float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(-2px, -2px); }
          100% { transform: translate(0, 0); }
        }
        .ht-bounce { animation: ht-bounce 900ms ease-in-out infinite; transform-origin: center; }
        .ht-pulse { animation: ht-pulse 1200ms ease-in-out infinite; transform-origin: center; }
        .ht-float { animation: ht-float 1.5s ease-in-out infinite; }
        .ht-outline { fill: none; stroke: currentColor; stroke-width: 1.5; opacity: 0.7; }
      `}</style>

      <span
        ref={selfRef}
        role={title ? "img" : undefined}
        aria-label={title}
        title={title}
        className={`${className} inline-block ht-float`}
      >
        <svg
          width={size * 2}
          height={size * 2}
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Пульсирующий круг */}
          <circle
            cx={24}
            cy={24}
            r={17}
            className="ht-pulse ht-outline"
          />

          {/* Курсор */}
          <g transform="scale(0.037) translate(150, 130)">
            <path
              d="M593.066667 846.933333c-2.133333 0-4.266667 0-8.533334-2.133333s-8.533333-6.4-12.8-10.666667l-78.933333-183.466666-96 89.6c-2.133333 4.266667-6.4 6.4-12.8 6.4-2.133333 0-6.4 0-8.533333-2.133334-6.4-2.133333-12.8-10.666667-12.8-19.2V256c0-8.533333 4.266667-17.066667 12.8-19.2 2.133333-2.133333 6.4-2.133333 8.533333-2.133333 4.266667 0 10.666667 2.133333 14.933333 6.4l341.333334 320c6.4 6.4 8.533333 14.933333 6.4 23.466666-2.133333 8.533333-10.666667 12.8-19.2 14.933334l-134.4 12.8 83.2 181.333333c2.133333 4.266667 2.133333 10.666667 0 17.066667-2.133333 4.266667-6.4 10.666667-10.666667 12.8l-61.866667 27.733333c-4.266667-4.266667-8.533333-4.266667-10.666666-4.266667z"
              fill="currentColor"
            />
            <path
              d="M593.066667 846.933333c-2.133333 0-4.266667 0-8.533334-2.133333s-8.533333-6.4-12.8-10.666667l-78.933333-183.466666-96 89.6c-2.133333 4.266667-6.4 6.4-12.8 6.4-2.133333 0-6.4 0-8.533333-2.133334-6.4-2.133333-12.8-10.666667-12.8-19.2V256c0-8.533333 4.266667-17.066667 12.8-19.2 2.133333-2.133333 6.4-2.133333 8.533333-2.133333 4.266667 0 10.666667 2.133333 14.933333 6.4l341.333334 320c6.4 6.4 8.533333 14.933333 6.4 23.466666-2.133333 8.533333-10.666667 12.8-19.2 14.933334l-134.4 12.8 83.2 181.333333c2.133333 4.266667 2.133333 10.666667 0 17.066667-2.133333 4.266667-6.4 10.666667-10.666667 12.8l-61.866667 27.733333c-4.266667-4.266667-8.533333-4.266667-10.666666-4.266667z"
              className="ht-outline"
            />
          </g>
        </svg>

        {title && <span className="sr-only">{title}</span>}
      </span>
    </>
  );
}
