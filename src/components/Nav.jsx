import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts,shadows} from '../tokens.stylex';
import Link from 'next/link';
import HamburgerMenu from './HamburgerMenu.jsx';


const styles = stylex.create({
  navBar: {
    width: "100%",
    position: "relative",
    zIndex: "1000",
    color: colors.navText,
    padding: "15px",
    //marginTop: "15px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "linear-gradient(black, 25%, transparent)",
  },
  brandName: {
    color: colors.navText,
    textDecoration: "none",
    textShadow: shadows.medium,
    fontFamily: fonts.brand,
    fontSize: {
      default: "5rem",
      "@media (450px < width <= 1000px )": "3.5rem",
      "@media (width <= 450px)": "2.5rem",
    },
    margin: spacing.medium,
    paddingTop: "20px",
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
    textShadow: shadows.medium,
    padding: "0vw 1vw",
    fontFamily: fonts.heading,
    fontWeight: "100",
    fontSize: {
      default: "2.5rem",
      "@media (width <= 1000px)": "1.8rem",
    },
    color: {
      default: colors.navText,
      ":hover": colors.navHighlight,
    },
    transform: {
      default: null,
      ":hover": "scale(0.98)",
    },
  },
});


export default function Nav() {
  return (
    <div {...stylex.props(styles.navBar)}>
      <Link href="/" {...stylex.props(styles.brandName)}>
        Wisdom Weaver Coaching
      </Link>
      <HamburgerMenu />
      <div {...stylex.props(styles.linkList)}>
        <Link href="/" {...stylex.props(styles.link)}>
          Home
        </Link>
        <Link href="/coachingapproach" {...stylex.props(styles.link)}>
          Approach
        </Link>
        {/* <Link href='/blog' {...stylex.props(styles.link)}>Blog</Link> */}
        <Link href="/contactus" {...stylex.props(styles.link)}>
          Contact Us
        </Link>
        {/* <Link href='/resources' {...stylex.props(styles.link)}>Resources</Link> */}
      </div>
    </div>
  );
}