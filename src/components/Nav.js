import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu.js'

let menuOpen= false;

const styles = stylex.create({
  navBar: {
    background: colors.button,
    color: colors.buttonText,
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
    fontSize: '1.2rem',
    margin: spacing.medium,
  },
  linkList: {
    display: {
      default:'flex',
      '@media (max-width: 1000px)': 'none',
    },
    height:'100%',
  },
  link: {
    alignItems: 'center',
    textDecoration:'none',
    padding:spacing.medium,
    color: colors.buttonText,
    backgroundColor: {
      default: colors.button,
      ':hover': colors.hilight,
    },
  },
  menu: {
    display: {
      default:'none',
      '@media (max-width: 1000px)': 'flex',
    },
    position: 'absolute',
    right:'1rem',
    fontSize: '35px'
  },
});


export default function Nav() {
  return (
    <div {...stylex.props(styles.navBar)}>
      <div {...stylex.props(styles.brandName)}>Wisdom Weaver Coaching</div>
      <HamburgerMenu menuOpen= {menuOpen}/>
      <div {...stylex.props(styles.linkList)}>
      <Link href='/' {...stylex.props(styles.link)}>Home</Link>
      <Link href='/coachingapproach' {...stylex.props(styles.link)}>Approach</Link>
      <Link href='/about' {...stylex.props(styles.link)}>About</Link>
      <Link href='/blog' {...stylex.props(styles.link)}>Blog</Link>
      <Link href='/contactus' {...stylex.props(styles.link)}>Contact Us</Link>
      <Link href='/services' {...stylex.props(styles.link)}>Our Services</Link>
      <Link href='/resources' {...stylex.props(styles.link)}>Additional Resources</Link>
      </div>
    </div>
  )
}