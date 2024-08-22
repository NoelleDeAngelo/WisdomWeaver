import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import { colors, fonts } from "../../tokens.stylex";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const styles = stylex.create({
  page: {
    minHeight: "80vh",
    background: colors.whiteBackground,
  },
  navBackground: {
    position: "relative",
    height: "70px",
    top: "-70px",
    background: colors.navBackground,
  },
  contactSection: {
    padding: {
      default: "25px 100px",
      "@media (width <= 550px)": "10px 5%",
    },
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    background: colors.whiteBackground,
  },
  sectionLeft: {
    margin: "0 7%",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    color: colors.lightHeading,
    fontSize: {
      default: "7rem",
      "@media (width <= 390px)": "6rem",
    },
    fontFamily: fonts.subHeading,
  },
  text: {
    margin: "15px",
    fontFamily: fonts.text,
    fontSize: {
      default: "1.7rem",
      "@media (width <= 390px)": "1.6rem",
    },
    color: colors.lightText,
  },
  socialIconList: {},
  socialIcon: {
    color: colors.darkButton,
    fontSize: "3rem",
    margin: "5%",
  },
  link: {
    display: "block",
    color: colors.heroText,
    background: {
      default: colors.darkButton,
      ":hover": colors.darkButtonHighlight,
    },
    fontFamily: fonts.text,
    textDecoration: "none",
    marginTop: "55px",
    padding: "15px",
    borderRadius: "5px",
    fontSize: {
      default: "2rem",
      "@media (width <= 750px)": "1.8rem",
    },
    fontWeight: "300",
    textAlign: "center",
    maxWidth: "220px",
  },
  sectionRight: {
    display: "flex",
    justifyContent: "center",
    padding: "25px",
    width: "40%",
  },
});


export default function ContactUs() {


  return (
    <div {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.navBackground)}></div>
      <div {...stylex.props(styles.contactSection)}>
        <div {...stylex.props(styles.sectionLeft)}>
          <h1 {...stylex.props(styles.heading)}>Contact Us</h1>
          <h4 {...stylex.props(styles.text)}>
            Araceli@wisdomweavercoaching.com
            <br></br>
            <br></br>
            (408)-540-8109
          </h4>
          <div {...stylex.props(styles.socialIconList)}>
            <a
              href="https://www.facebook.com/share/yJDKhqvUKAZXQGHu/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook {...stylex.props(styles.socialIcon)} />
            </a>
            <a
              href="https://www.instagram.com/wisdomweavercoaching?igsh=MTZzOG5iMm9qc3dubw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram {...stylex.props(styles.socialIcon)} />
            </a>
          </div>
          <Link
            href="https://wisdomweavercoaching.youcanbook.me/"
            target="_blank"
            rel="noopener noreferrer"
            {...stylex.props(styles.link)}
          >
            Book a Free Consultaion
          </Link>
        </div>
        <div {...stylex.props(styles.sectionRight)}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}