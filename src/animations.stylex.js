import * as stylex from "@stylexjs/stylex";

const pulse = stylex.keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(1.1)" },
  "100%": { transform: "scale(1)" },
});

const fadeIn = stylex.keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const fadeOut = stylex.keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const fadeInLeft = stylex.keyframes({
  "0%": { opacity: 0, transform: "translateX(100%)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const fadeOutRight = stylex.keyframes({
  "0%": { opacity: 1, transform: "translateX(0)" },
  "100%": { opacity: 0, transform: "translateX(100%)" },
});

export const animations = stylex.defineVars({
  pulse,
  fadeIn,
  fadeOut,
  fadeInLeft,
  fadeOutRight,
});
