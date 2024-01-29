import * as stylex from '@stylexjs/stylex';
import Nav from '../components/Nav.js'
import {colors,spacing} from '../tokens.stylex';

const styles = stylex.create({
  page: {
    background:colors.white,
    color: 'black',
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
