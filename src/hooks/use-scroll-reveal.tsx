"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollRevealProps {
  threshold?: number;
  once?: boolean;
}

export const useScrollReveal = ({
  threshold = 0.1,
  once = true,
}: UseScrollRevealProps = {}) => {
  // Specify the type explicitly as HTMLDivElement
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
  });

  return [ref, isInView] as const; // Return as tuple for better typing
};
