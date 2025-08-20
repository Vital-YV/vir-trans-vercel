'use client';

import { useEffect, useState } from 'react';

const getRandom = (min: number, max: number) =>
    Math.random() * (max - min) + min;

export default function QuestionRain() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    // Generate 30 question drops with random styles
    const drops = Array.from({ length: 50 }).map((_, i) => {
        const left = `${getRandom(0, 100)}vw`;
        const size = getRandom(20, 60);
        const blur = getRandom(0, 3);
        const opacity = getRandom(0.3, 0.9);
        const duration = `${getRandom(8, 20)}s`;
        const delay = `${getRandom(0, 10)}s`;
        const rotate = getRandom(-45, 45);

        return (
            <div
                key={i}
                className="absolute top-[-10%] pointer-events-none select-none"
                style={{
                    left,
                    opacity,
                    filter: `blur(${blur}px)`,
                    animationName: 'fall',
                    animationDuration: duration,
                    animationTimingFunction: 'linear',
                    animationIterationCount: 'infinite',
                    animationDelay: delay,
                    transform: `rotate(${rotate}deg)`,
                }}
            >
                <svg
                    className="fill-[#FB8500]"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.1557 11.7325C11.9132 12.6849 10.5 13.7681 10.5 16.5H13.5C13.5 14.8569 14.5665 13.9249 15.6611 12.9683C16.815 11.96 18 10.9244 18 9C18 5.685 15.315 3 12 3C8.685 3 6 5.685 6 9H9C9 7.35 10.35 6 12 6C13.65 6 15 7.35 15 9C15 10.3188 14.1304 10.9854 13.1557 11.7325ZM13.5 21.75V18.75H10.5V21.75H13.5Z"
                        fill="#FB8500"
                    />
                </svg>

            </div>
        );
    });

    return (
        <>
            <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-100%) rotate(0deg);
          }
          100% {
            transform: translateY(200vh) rotate(360deg);
          }
        }
      `}</style>

            <div className="absolute inset-0 overflow-hidden z-0">{drops}</div>
        </>
    );
}
