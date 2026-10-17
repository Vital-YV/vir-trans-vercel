"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";

export default function ScrollToTopButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const [dockTarget, setDockTarget] = useState<HTMLElement | null>(null);
  const [isDocked, setIsDocked] = useState(false);

  useEffect(() => {
    const slot = document.getElementById('back-to-top-slot');
    const footer = slot?.closest('footer');
    setDockTarget(slot);
    setIsDocked(false);
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setIsDocked(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 200);
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 500; // время в мс
    const start = window.scrollY;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / scrollDuration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easing cubic

      window.scrollTo({ top: start * (1 - ease), behavior: 'instant' });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  if (pathname === '/top-secret' || pathname === '/top-secret/digest') return null;

  if (!dockTarget) return null;

  return createPortal(
    <button
      type="button"
      aria-label="Наверх"
      onClick={scrollToTop}
      className={`${isDocked ? 'relative' : 'fixed bottom-4 right-4 hidden xl:block'} z-20 bg-orange-500 hover:bg-orange-600 text-white
      font-semibold px-[14px] py-[14px] rounded-full shadow-xl transition-all duration-500 ease-in-out transform
      hover:-translate-y-1 hover:scale-105
      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>,
    dockTarget
  );
}
