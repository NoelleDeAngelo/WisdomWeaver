import * as stylex from "@stylexjs/stylex";
import Nav from "../components/Nav.js";
import { colors, spacing, fonts } from "../tokens.stylex";
import Link from "next/link";
import About from "../components/About.js";
import Services from "../components/Services.js";



const styles = stylex.create({
  home: {
    background: colors.background,
    fontFamily: fonts.text,
    padding: 0,
    margin: 0,
    minHeight: "80vh",
    display: "flex ",
    flexDirection: "column",
  },
  hero: {
    display: "flex",
    color: colors.heroText,
    alignItems: "center",
    flexDirection: "column",
    height: "80vh",
    minHeight: "275px",
    justifyContent: "center",
    padding: {
      default: "10vh 10vw",
    },
    minWidth: "200px",
  },
  heroImage: {
    backgroundImage: "url('/images/sunsetman.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  heroHeader: {
    fontFamily: fonts.heading,
    fontWeight: "500",
    letterSpacing: ".6px",
    textAlign: "center",
    fontSize: {
      default: "60px",
      "@media (455px< width <= 865px)": "50px",
      "@media (width <= 455px)": "40px",
    },
  },
  heroLink: {
    color: colors.heroText,
    background: {
      default: colors.darkButton,
      ":hover": colors.darkButtonHighlight,
    },
    fontFamily: fonts.text,
    textDecoration:"none",
    margin: "5%",
    padding:"15px",
    fontSize: {
      default: "22px",
      "@media (width <= 750px)": "1.2rem",
    },
    fontWeight: "300",
  },
});

export default function Home() {
  return (
    <div {...stylex.props(styles.home)}>
      <div {...stylex.props(styles.heroImage)}>
        <div {...stylex.props(styles.hero)}>
          <h1 {...stylex.props(styles.heroHeader)}>
            Embark on a Transformative Journey with Our Intuitive Life Coaching
          </h1>
          <Link
            href="https://wisdomweavercoaching.youcanbook.me/"
            {...stylex.props(styles.heroLink)}
          >
            Get Started
          </Link>
        </div>
      </div>
      <About/>
      <Services/>
    </div>
  );
}
