import * as stylex from '@stylexjs/stylex';
import {colors,spacing} from '../tokens.stylex';

const styles = stylex.create({
  page: {
    background: colors.background,
    color: colors.orange,
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