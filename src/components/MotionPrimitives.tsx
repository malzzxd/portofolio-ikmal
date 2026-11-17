import { motion, useScroll, useSpring } from 'motion/react';

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const SPRING_SNAPPY = {
  type: 'spring' as const,
  stiffness: 440,
  damping: 32,
  mass: 0.75,
};

export const SPRING_GENTLE = {
  type: 'spring' as const,
  stiffness: 280,
  damping: 28,
  mass: 0.9,
};

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 'some' as const,
};

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 right-0 left-0 z-50 h-0.5 origin-left bg-blue-700 pointer-events-none no-print"
    />
  );
}
