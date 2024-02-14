import * as stylex from '@stylexjs/stylex';



export const colors = stylex.defineVars({
  background:{default:'#feefe8'},
  accentBackground:{default:'#f8f5f2'},
  buttonBackground: {default:'#f45d48'},
  buttonText:{default:'#232323'},
  headline: {default:'#232323'},
  paragraph:{default:'#222525'},
  navHilight:{default:'#f37353'},
  link:{default:'#f45d48'},
  accentLink:{default:'##078080'},
  navBackround:{default:'#078080'},
  navText:{default:'#232323'},
  cardBackground:{default:'#fffffe'},
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
  brand: 'Lora',
  text: 'Lato',
});