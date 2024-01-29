import * as stylex from '@stylexjs/stylex';
import {colors,spacing} from '../tokens.stylex';

const styles = stylex.create({
  page: {
    background: colors.darkTeal,
    color: colors.white,
    padding:0,
    margin:0,
    height: '5vh'
  },
});


export default function Nav() {
  return (
    <div {...stylex.props(styles.page)}>
      <div>Wisdom Weaver Coaching</div>
    </div>
  )
}