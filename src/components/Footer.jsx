import * as stylex from "@stylexjs/stylex";
import {colors,spacing,fonts} from "../tokens.stylex";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NewsletterForm from "./NewsletterForm.jsx"

const styles = stylex.create({
  footer: {
    display: "flex",
    flexDirection: {
      default: "row",
      '@media (width < 800px)':"column",

    },
    justifyContent: "space-between",
    alignItems: "center",
    background: colors.darkBackground,
    fontFamily: fonts.text,
    color: colors.darkSubheading,
    minHeight: "15vh",
  },
  logoContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "10px 5vw",
  },
  logo: {
    fontFamily: fonts.brand,
    letterSpacing: ".7px",
    fontSize: {
      default: "3.4rem",
      "@media (980px < width <= 1200px )": "3rem",
      "@media (860px < width <= 980px )": "2.5rem",
      "@media (width <= 860px)": "2.2rem",
    },
  },
  tagline: {
    fontFamily: fonts.text,
    alignSelf: "center",
    fontSize: {
      default: "2.3rem",
      "@media (980px < width <= 1200px )": "1.8rem",
      "@media (860px < width <= 980px )": "1.6rem",
      "@media (width <= 860px)": "1.4rem",
    },
  },
  newsletterSection: {
    display:"flex",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  newsletterText: {
    marginBottom: "10px",
    fontSize: {
      default: "2.1rem",
      "@media (990px < width <= 1200px )": "1.8rem",
      "@media (850px < width <= 990px )": "1.6rem",
      "@media (width <= 850px)": "1.4rem",
    },
  },
  followUs: {
    padding: "0px 5vw",
    fontSize: {
      default: "2.4rem",
      "@media (980px < width <= 1200px )": "2.2rem",
      "@media (width <= 980px )": "1.8rem",
    },
    textAlign: "center",
  },
  socialIconList: {
    margin: "5px 0px",
    display: "flex",
    justifyContent: "space-around",
  },
  socialIcon: {
    color: colors.darkSubheading,
  },
});


export default function Footer() {

  return (
    <div {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.logoContainer)}>
        <div {...stylex.props(styles.logo)}>Wisdom Weaver Coaching</div>
        <span {...stylex.props(styles.tagline)}>Catch your dreams</span>
      </div>
      <div {...stylex.props(styles.newsletterSection)}>
        <span {...stylex.props(styles.newsletterText)}>
          Receive more helpful insights to your inbox
        </span>
        <NewsletterForm />
      </div>
      <div {...stylex.props(styles.followUs)}>
        Follow Us
        <div {...stylex.props(styles.socialIconList)}>
          <a href="https://www.facebook.com/share/yJDKhqvUKAZXQGHu/?mibextid=qi2Omg">
            <FaFacebook {...stylex.props(styles.socialIcon)} />
          </a>
          <a href="https://www.instagram.com/wisdomweavercoaching?igsh=MTZzOG5iMm9qc3dubw==">
            <FaInstagram {...stylex.props(styles.socialIcon)} />
          </a>
          {/* <FaXTwitter {...stylex.props(styles.socialIcon)}/> */}
        </div>
      </div>
    </div>
  );
}