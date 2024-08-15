import * as stylex from "@stylexjs/stylex";
import Nav from "../components/Nav.jsx";
import { colors, spacing, fonts } from "../tokens.stylex";
import Link from "next/link";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";



const styles = stylex.create({
  home: {
    background: colors.background,
    fontFamily: fonts.text,
    padding: 0,
    margin: 0,
    display: "flex ",
    flexDirection: "column",
    position:"relative",
    marginTop: "-70px",
  },
  heroSection: {
  },
  heroText: {
    display: "flex",
    color: colors.heroText,
    alignItems: "center",
    flexDirection: "column",
    height: "80vh",
    minHeight: "275px",
    justifyContent: "center",
    padding: {
      default: "100px 10vw",
    },
    minWidth: "200px",
  },
  heroImage: {
    backgroundImage: "url('/images/sunsetman.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroHeader: {
    margin: "0",
    fontFamily: fonts.heading,
    fontWeight: "500",
    letterSpacing: ".6px",
    textAlign: "center",
    fontSize: {
      default: "6rem",
      "@media (455px< width <= 865px)": "5rem",
      "@media (width <= 455px)": "4rem",
    },
  },
  heroLink: {
    color: colors.heroText,
    background: {
      default: colors.darkButton,
      ":hover": colors.darkButtonHighlight,
    },
    fontFamily: fonts.text,
    textDecoration: "none",
    margin: "5%",
    padding: "15px",
    borderRadius: "5px",
    fontSize: {
      default: "2.5rem",
      "@media (width <= 750px)": "2.1rem",
    },
    fontWeight: "300",
  },
});

export default function Home() {
  return (
    <div {...stylex.props(styles.home)}>
      <div {...stylex.props(styles.heroSection)}>
        <div {...stylex.props(styles.heroImage)}>
          <div {...stylex.props(styles.heroText)}>
            <h1 {...stylex.props(styles.heroHeader)}>
              Embark on a Transformative Journey with Our Intuitive Life
              Coaching
            </h1>
            <Link
              href="https://wisdomweavercoaching.youcanbook.me/"
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.heroLink)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <About />
      <Services />
    </div>
  );
}
