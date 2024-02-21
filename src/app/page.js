import * as stylex from '@stylexjs/stylex';
import Nav from '../components/Nav.js'
import {colors,spacing,fonts} from '../tokens.stylex';
import Link from 'next/link';

const styles = stylex.create({
  home: {
    background:colors.background,
    color: colors.headline,
    fontFamily: fonts.text,
    padding: 0,
    margin:0,
    minHeight: '75vh',
    display: 'flex ',
    flexDirection: 'column',
  },
  hero:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '40vh',
    minHeight: '275px',
    justifyContent:'center',
    padding:{
    default:'10vh 25vw',
    '@media (width <= 700px)':'10vh 10vw',
  },
    minWidth: '200px',
  },
  header:{
    fontWeight:'300',
    textAlign: 'center',
  },

link:{
  padding:'5vh 0vh',
  color: colors.link,
  fontSize: {
    default:'1.3rem',
    '@media (width <= 750px)':'1.2rem',
  },
  fontStyle: 'italic',
  fontWeight:'300'

},
  section:{
    background: colors.accentBackground,
    color: colors.paragraph,
  },

});


export default function Home() {
  return (
    <div {...stylex.props(styles.home)}>
      <div {...stylex.props(styles.hero)}>
        <h1 {...stylex.props(styles.header)}>Embark on a Transformative Journey with Our Intuitive Life Coaching</h1>
        <Link href= '/contactus' {...stylex.props(styles.link)}>Start Your Journey Today</Link>
      </div>
      <div {...stylex.props(styles.section)}>
        Accent area
      </div>
    </div>
  )
}
