import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu.js';


const styles = stylex.create({
  navBar: {
    width:'100%',
    position:'absolute',
    zIndex:'1000',
    color: colors.navText,
    padding:0,
    margin:0,
    height: '5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    minHeight: '40px',

  },
  brandName: {
    fontFamily: fonts.brand,
    fontSize: {
      default:'1.8rem',
      '@media (310px < width <= 350px )':'1.2rem',
      '@media (width <= 310px)':'1rem',
    },
    margin: spacing.medium,
    letterSpacing:'.7px'
  },
  linkList: {
    display: {
      '@media (width <= 1000px)': 'none',
      '@media (width > 1000px)': 'flex',
    },
    height:'100%',
    alignItems:'center',
    marginRight:'15px',
  },
  link: {
    alignItems: 'center',
    textDecoration:'none',
    padding:'0vw .5vw',
    fontFamily: fonts.text,
    fontSize: '1.1rem',
    color: {
      default: '#f8f5f2',
      ':hover': colors.navHighlight,
    },
  },
});


export default function Nav() {
  return (
    <div {...stylex.props(styles.navBar)}>
      <div {...stylex.props(styles.brandName)}>Wisdom Weaver Coaching</div>
      <HamburgerMenu />
      <div {...stylex.props(styles.linkList)}>
      <Link href='/' {...stylex.props(styles.link)}>Home</Link>
      <Link href='/coachingapproach' {...stylex.props(styles.link)}>Approach</Link>
      <Link href='/about' {...stylex.props(styles.link)}>About</Link>
      <Link href='/blog' {...stylex.props(styles.link)}>Blog</Link>
      <Link href='/contactus' {...stylex.props(styles.link)}>Contact Us</Link>
      <Link href='/services' {...stylex.props(styles.link)}>Our Services</Link>
      <Link href='/resources' {...stylex.props(styles.link)}>Resources</Link>
      </div>
    </div>
  )
}