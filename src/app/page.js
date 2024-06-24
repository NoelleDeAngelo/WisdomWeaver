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
  aboutSection:{
    display:'flex',
    flexFlow:'row wrap',
    minHeight:'450px',
  },
  aboutImageContainer:{
    display:'flex',
    flex: '1 0 200px',
    alignItems:'center',
    justifyContent:'center',
  },
  about:{
    display:'flex',
    flexDirection:'column',
    background:'white',
    flex: '3 0 600px',
    justifyContent:'center',
  },
  aboutHeading:{
    color: colors.lightHeading,
    marginLeft:'22%',
    marginBottom:'0',
    justifySelf:'flex-start',
  },
  aboutText:{
    color: colors.lightText,
    marginLeft:'25%',
    paddingRight:'100px',
    maxWidth:'700px',

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
      <div {...stylex.props(styles.aboutSection)}>
        <div {...stylex.props(styles.aboutImageContainer)}>image</div>
        <div {...stylex.props(styles.about)}>
          <h2 {...stylex.props(styles.aboutHeading)}>Who We Are</h2>
          <p {...stylex.props(styles.aboutText)}>At Wisdom Weaver Coaching, we are dedicated to helping individuals unleash their inner greatness and live authentically. Founded by Araceli Lopez, our coaching practice is built upon a foundation of passion, expertise, and a genuine commitment to supporting others in their personal and professional growth. As a certified coach, I have helped countless clients overcome challenges, break through limitations, and create meaningful change in their lives. Our mission is simple: to inspire and empower you to become the best version of yourself. Whether you're navigating a career transition, seeking to improve your well-being, or striving for greater fulfillment, we are here to provide the guidance, support, and encouragement you need to thrive. Get to know us more and discover how our transformative coaching services can help you unlock your potential and create a life you love</p>
        </div>

      </div>
    </div>
  )
}
