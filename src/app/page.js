import * as stylex from '@stylexjs/stylex';
import Nav from '../components/Nav.js'
import {colors,spacing,fonts} from '../tokens.stylex';
import Link from 'next/link';

const styles = stylex.create({
  home: {
    background:colors.background,
    fontFamily: fonts.text,
    padding: 0,
    margin:0,
    minHeight: '75vh',
    display: 'flex ',
    flexDirection: 'column',
  },
  hero:{
    display: 'flex',
    color:colors.heroText,
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
  heroHeader:{
    fontFamily: fonts.heading,
    fontWeight:'500',
    letterSpacing: '.6px',
    textAlign: 'center',
    fontSize: {
      default:'2.5rem',
      '@media (width <= 750px)':'1.8rem',
    },
  },

  heroLink:{
    color:colors.heroText,
    padding:'5vh 0vh',
    fontSize: {
      default:'1.5rem',
      '@media (width <= 750px)':'1.2rem',
    },
    fontWeight:'300'

},
  lightsSection:{
    background: colors.lightBackground,
    color: colors.lightText,
    height:'50vh'
  },

});


export default function Home() {
  return (
    <div {...stylex.props(styles.home)}>
      <div {...stylex.props(styles.heroImage)} >
        <div {...stylex.props(styles.hero)}>

          <h1 {...stylex.props(styles.heroHeader)}>Embark on a Transformative Journey with Our Intuitive Life Coaching</h1>
          <Link href= 'https://wisdomweavercoaching.youcanbook.me/' {...stylex.props(styles.heroLink)}>Book a Free Consultaion</Link>
        </div>
      </div>
      <div {...stylex.props(styles.lightsSection)}>
        <div>
          <h2>Who We Are</h2>
          <p></p>
        </div>

      </div>
    </div>
  )
}
