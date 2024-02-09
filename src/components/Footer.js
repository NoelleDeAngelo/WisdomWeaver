import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';

const styles = stylex.create({
  page: {
    background: colors.background,
    fontFamily: fonts.text,
    color: colors.link,
    height: '8vh'
  },
});


export default function Footer() {
  return (
    <div {...stylex.props(styles.page)}>
     <div>Footer</div>
    </div>
  )
}