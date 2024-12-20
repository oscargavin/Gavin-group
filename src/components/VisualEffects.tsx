"use client";

import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const isOverDarkRef = useRef(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastCheckTime = useRef(0);
  const checkInterval = 32;

  useEffect(() => {
    if (!cursorRef.current) return;
    document.body.style.cursor = "none";

    const isElementDark = (element: Element): boolean => {
      const bgColor = window.getComputedStyle(element).backgroundColor;
      if (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent") {
        return element.parentElement
          ? isElementDark(element.parentElement)
          : false;
      }
      const rgb = bgColor.match(/\d+/g);
      if (!rgb) return false;

      const luminance =
        (0.299 * Number(rgb[0]) +
          0.587 * Number(rgb[1]) +
          0.114 * Number(rgb[2])) /
        255;
      return luminance < 0.5;
    };

    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(
        target.tagName.toLowerCase() === "button" ||
          target.tagName.toLowerCase() === "a" ||
          !!target.closest("button") ||
          !!target.closest("a"),
      );

      const now = performance.now();
      if (now - lastCheckTime.current > checkInterval) {
        const elementsUnderCursor = document.elementsFromPoint(
          e.clientX,
          e.clientY,
        );
        isOverDarkRef.current = elementsUnderCursor.some(isElementDark);
        lastCheckTime.current = now;
      }
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updateCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          opacity: isHidden ? 0 : 1,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[100] transition-opacity duration-150"
      >
        <div
          className={`transform-gpu rounded-full transition-[width,height,background-color,border] duration-150 ${
            isPointer ? "h-12 w-12 border-2" : "h-4 w-4"
          }`}
          style={{
            backgroundColor: isOverDarkRef.current
              ? isPointer
                ? "transparent"
                : "rgba(255, 255, 255, 0.9)"
              : isPointer
                ? "transparent"
                : "rgba(0, 0, 0, 0.9)",
            borderColor: isOverDarkRef.current
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(0, 0, 0, 0.8)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }

        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
};

export { CustomCursor };
