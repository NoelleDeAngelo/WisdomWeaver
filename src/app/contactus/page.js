import * as stylex from "@stylexjs/stylex";
import Link from "next/link";
import ContactForm from "../../components/ContactForm.js";
import { colors, spacing, fonts } from "../../tokens.stylex";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const styles = stylex.create({
  page: {
    height: "100vh",
    background: colors.whiteBackground,
  },
  navBackground: {
    position: "relative",
    height: "70px",
    top: "-55px",
    background: colors.darkBackground,
  },
  contactSection: {
    padding: "25px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-around",
    background: colors.whiteBackground,
  },
  sectionLeft: {
    margin: "0 7%",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    color: colors.lightHeading,
    fontSize: "70px",
    fontFamily: fonts.subHeading,
  },
  text: {
    margin: "15px",
    fontFamily: fonts.text,
    fontSize: "18px",
    //postion: "relative",
    color: colors.lightText,
  },
  socialIconList: {
  },
  socialIcon: {
    color: colors.darkButton,
    fontSize: "30px",
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
      default: "20px",
      "@media (width <= 750px)": "18px",
    },
    fontWeight: "300",
    textAlign: "center",
    maxWidth: "220px",
    //alignSelf: "center",
  },
  sectionRight: {
    display: "flex",
    justifyContent:"center",
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
            (555)-555-5555
          </h4>
          <div {...stylex.props(styles.socialIconList)}>
            <a href="https://www.facebook.com/share/yJDKhqvUKAZXQGHu/?mibextid=qi2Omg">
              <FaFacebook {...stylex.props(styles.socialIcon)} />
            </a>
            <a href="https://www.instagram.com/wisdomweavercoaching?igsh=MTZzOG5iMm9qc3dubw==">
              <FaInstagram {...stylex.props(styles.socialIcon)} />
            </a>
          </div>
          <Link
            href="https://wisdomweavercoaching.youcanbook.me/"
            {...stylex.props(styles.link)}
          >
            Book a Free Consultaion
          </Link>
        </div>
        <div {...stylex.props(styles.sectionRight)}>
          <ContactForm/>
        </div>
      </div>
    </div>
  );
}