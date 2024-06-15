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
  heroImage:{
    backgroundImage: "url('/images/sunsetman.jpg')",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  header:{
    fontWeight:'800',
    letterSpacing: '.6px',
    textAlign: 'center',
    fontSize: {
      default:'2.5rem',
      '@media (width <= 750px)':'1.8rem',
    },
  },

  link:{
    padding:'5vh 0vh',
    color: colors.headline,
    fontSize: {
      default:'1.5rem',
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
      <div {...stylex.props(styles.heroImage)} >
        <div {...stylex.props(styles.hero)}>

          <h1 {...stylex.props(styles.header)}>Embark on a Transformative Journey with Our Intuitive Life Coaching</h1>
          <Link href= 'https://wisdomweavercoaching.youcanbook.me/' {...stylex.props(styles.link)}>Book a Free Consultaion</Link>
        </div>
      </div>
      <div {...stylex.props(styles.section)}>
        Accent area
      </div>
    </div>
  )
}
