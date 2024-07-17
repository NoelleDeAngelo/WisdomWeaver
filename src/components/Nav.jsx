import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu.jsx';


const styles = stylex.create({
  navBar: {
    width: "100%",
    position: "relative",
    zIndex: "1000",
    color: colors.navText,
    padding: 0,
    marginTop: "15px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brandName: {
    fontFamily: fonts.brand,
    fontSize: {
      default: "40px",
      "@media (450px < width <= 1000px )": "35px",
      "@media (width <= 450px)": "25px",
    },
    margin: spacing.medium,
    letterSpacing: ".7px",
  },
  linkList: {
    display: {
      "@media (width <= 800px)": "none",
      "@media (width > 800px)": "flex",
    },
    height: "100%",
    alignItems: "center",
    marginRight: "15px",
  },
  link: {
    alignItems: "center",
    textDecoration: "none",
    padding: "0vw .7vw",
    fontFamily: fonts.text,
    fontSize: {
      default: "22px",
      "@media (width <= 1000px)": "18px",
    },
    color: {
      default: "white",
      ":hover": colors.navHighlight,
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
      {/* <Link href='/blog' {...stylex.props(styles.link)}>Blog</Link> */}
      <Link href='/ContactUs' {...stylex.props(styles.link)}>Contact Us</Link>
      <Link href='/resources' {...stylex.props(styles.link)}>Resources</Link>
      </div>
    </div>
  )
}