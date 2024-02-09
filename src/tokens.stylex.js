import * as stylex from '@stylexjs/stylex';


export const colors = stylex.defineVars({
  orange: {default:'#f37353'},
  darkTeal: {default:'#28595A'},
  lightTeal: {default:'#25726D'},
  tan: {default:'#EDD7BF'},
  green: {default:'#55685c'},
  brown: {default:'#554741'},
  white: {default:'#fcf5ed'},
  background:{default:'#feefe8'},
  button: {default:'#078080'},
  buttonText:{default:'#232323'},
  headline: {default:'#232323'},
  paragraph:{default:'#222525'},
  hilight:{default:'#089c9c'},
  link:{default:'#f45d48'}

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
  brand: 'sans-serif',
});