import * as stylex from '@stylexjs/stylex';



export const colors = stylex.defineVars({
  //Main//
  background: { default: "#f8f5f2" },
  buttonBackground: { default: "#f45d48" },
  buttonText: { default: "#232323" },
  navHighlight: { default: "#dedede" },
  navText: { default: "#f8f5f2" },
  //Hero Section//
  heroText: { default: "#ffffff" },
  //Light Sections//
  lightBackground: { default: "#f6f0e5" },
  lightHeading: { default: "#b26429" },
  lightSubheading: { default: "#e2725b" },
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
  darkLink: { default: "#b26429" },
  darkLinkHighlight: { default: "#078080" },
  darkButton: { default: "#e2725b" },
  darkButtonHighlight: { default: "#e78774" },
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