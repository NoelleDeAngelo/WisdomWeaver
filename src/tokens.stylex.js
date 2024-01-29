import * as stylex from '@stylexjs/stylex';


export const colors = stylex.defineVars({
  orange: {default:'#f37353'},
  darkTeal: {default:'#28595A'},
  lightTeal: {default:'#25726D'},
  tan: {default:'#EDD7BF'},
  green: {default:'#55685c'},
  brown: {default:'#554741'},
  white: {default:'#fcf5ed'},
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