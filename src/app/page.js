import * as stylex from '@stylexjs/stylex';
import Nav from '../components/Nav.js'
import {colors,spacing,fonts} from '../tokens.stylex';

const styles = stylex.create({
  page: {
    background:colors.background,
    color: colors.headline,
    fontFamily: fonts.text,
    padding: 0,
    margin:0,
    height: '87vh',

  },
});


export default function Home() {
  return (
    <div {...stylex.props(styles.page)}>
      <div >Home</div>
    </div>
  )
}
