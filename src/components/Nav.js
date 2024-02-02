import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';
import Link from 'next/link'


const styles = stylex.create({
  navBar: {
    background: colors.darkTeal,
    color: colors.white,
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
    display: 'flex',
    height:'100%',
  },
  link: {
    alignItems: 'center',
    textDecoration:'none',
    padding:spacing.medium,
    color: colors.white,
    backgroundColor: {
      default: colors.darkTeal,
      ':hover': colors.lightTeal,
    },
  },
});


export default function Nav() {
  return (
    <div {...stylex.props(styles.navBar)}>
      <div {...stylex.props(styles.brandName)}>Wisdom Weaver Coaching</div>
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