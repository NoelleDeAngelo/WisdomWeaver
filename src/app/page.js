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
    //background:'black',
    backgroundImage: "url('https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    //width: '100%',
    //height:'100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
  header:{
    fontWeight:'300',
    textAlign: 'center',
  },

  link:{
    padding:'5vh 0vh',
    color: colors.headline,
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
      <div {...stylex.props(styles.heroImage)} >
        <div {...stylex.props(styles.hero)}>

          <h1 {...stylex.props(styles.header)}>Embark on a Transformative Journey with Our Intuitive Life Coaching</h1>
          <Link href= 'https://wisdomweavercoaching.youcanbook.me/' {...stylex.props(styles.link)}>Start Your Journey Today</Link>
        </div>
      </div>
      <div {...stylex.props(styles.section)}>
        Accent area
      </div>
    </div>
  )
}
