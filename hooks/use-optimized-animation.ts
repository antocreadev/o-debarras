"use client";

import { useReducedMotion } from "framer-motion";
import { useMemo } from "react";

export function useOptimizedAnimation() {
  const shouldReduceMotion = useReducedMotion();

  const variants = useMemo(
    () => ({
      fadeIn: {
        initial: shouldReduceMotion ? {} : { opacity: 0 },
        animate: { opacity: 1 },
        transition: {
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
      fadeInUp: {
        initial: shouldReduceMotion ? {} : { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
      fadeInDown: {
        initial: shouldReduceMotion ? {} : { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: {
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
      fadeInLeft: {
        initial: shouldReduceMotion ? {} : { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: {
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
      fadeInRight: {
        initial: shouldReduceMotion ? {} : { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        transition: {
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
      scaleIn: {
        initial: shouldReduceMotion ? {} : { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: {
          duration: shouldReduceMotion ? 0 : 0.4,
          ease: [0.25, 0.1, 0.25, 1.0],
        },
      },
    }),
    [shouldReduceMotion]
  );

  const springConfig = useMemo(
    () => ({
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
      mass: 1,
    }),
    []
  );

  const easing = useMemo(() => [0.25, 0.1, 0.25, 1.0] as const, []);

  return {
    variants,
    springConfig,
    easing,
    shouldReduceMotion,
  };
}

export function getOptimizedTransition(
  duration: number = 0.5,
  delay: number = 0
) {
  return {
    duration,
    delay,
    ease: [0.25, 0.1, 0.25, 1.0] as const,
  };
}
