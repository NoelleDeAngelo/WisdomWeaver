import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  //Main//
  background: { default: "#f8f5f2" },
  buttonBackground: { default: "#f45d48" },
  buttonText: { default: "#232323" },
  navHighlight: { default: "#dedede" },
  navText: { default: "#f8f5f2" },
  navBackground: { default: "#416162" },
  //Hero Section//
  heroText: { default: "#ffffff" },
  //Light Sections//
  lightBackground: { default: "#f6f0e5" },
  whiteBackground: { default: "#fefbfb" },
  lightHeading: { default: "#b26429" },
  lightSubheading: { default: "#dc967f" },
  lightText: { default: "#234649" },
  lightLink: { default: "#b26429" },
  lightLinkHighlight: { default: "#078080" },
  lightAccent: { default: "#234649" },
  lightButton: { default: "#eab5ac" },
  //Dark Sections//
  darkBackground: { default: "#365051" },
  darkHeading: { default: "#f6f0e5" },
  darkSubheading: { default: "#eab5ac" },
  darkText: { default: "#f8f5f2" },
  darkLink: { default: "#eab5ac" },
  darkLinkHighlight: { default: "#078080" },
  darkButton: { default: "#e2725b" },
  darkButtonHighlight: { default: "#e78774" },
  darkAccent: { default: "#f6f0e5" },
});

export const spacing = stylex.defineVars({
  none: '0px',
  xsmall: '4px',
  small: '8px',
  medium: '12px',
  large: '20px',
  xlarge: '32px',
  xxlarge: '48px',
  xxxlarge: '96px',
});

export const fonts = stylex.defineVars({
  brand: "Sacramento",
  heading: "Merriweather",
  subHeading: '"Cormorant"',
  text: "Nunito",
});

export const shadows = stylex.defineVars({
  light: "2px 1px 1px rgba(0, 0, 0, 0.08)",
  medium: "4px 2px 3px rgba(0, 0, 0, 0.18)",
  card: " 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
  sepia: "brightness(0.9) contrast(1.1) sepia(0.1)",
});