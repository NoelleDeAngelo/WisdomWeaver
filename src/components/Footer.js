import * as stylex from "@stylexjs/stylex";
import {colors,spacing,fonts} from "../tokens.stylex";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NewsletterForm from "./NewsletterForm.js"

const styles = stylex.create({
  footer: {
    display:'flex',
    flexDirection:{
      default:'row',
      '@media (width <= 500px)':'column',
    },
    justifyContent: 'space-between',
    alignItems:'center',
    background: colors.darkBackground,
    fontFamily: fonts.text,
    color: colors.darkSubheading,
    height: '15vh',
    fontSize:'1.4rem',
  },
  logoContainer:{
    display:'flex',
    flexDirection: 'column',
    padding: '0px 5vw',
  },
  logo:{
    fontFamily: fonts.brand,
    letterSpacing:'.7px',
    fontSize:{
      default:'1.9rem',
      '@media (980px < width <= 1200px )':'1.4rem',
      '@media (800px < width <= 980px )':'1.2rem',
      '@media (width <= 800px)':'1rem',
    },
  },
  tagline:{
    fontFamily: fonts.text,
    alignSelf:'center',
    fontSize:{
      default:'1.4rem',
      '@media (980px < width <= 1200px )':'1.2rem',
      '@media (800px < width <= 980px )':'1rem',
      '@media (width <= 800px)':'.8rem',
    },
  },
  newsletter:{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

  },
  newsletterText:{
    marginBottom: '10px',
    fontSize:{
      default:'1.4rem',
      '@media (980px < width <= 1200px )':'1.2rem',
      '@media (800px < width <= 980px )':'1rem',
      '@media (width <= 800px)':'.9rem',
    },
  },
  followUs:{
    padding: '0px 5vw',
    fontSize:{
      default:'1.4rem',
      '@media (980px < width <= 1200px )':'1.2rem',
      '@media (width <= 980px )':'1rem',
    },
    textAlign: 'center',
  },
  socialIconList:{
    margin: '5px 0px',
    display:'flex',
    justifyContent:'space-around',

  },
  socialIcon:{
    color:colors.darkSubheading,
  }
});


export default function Footer() {

  return (
    <div {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.logoContainer)}>
        <div {...stylex.props(styles.logo)}>Wisdom Weaver Coaching</div>
        <span {...stylex.props(styles.tagline)}>Catch your dreams</span>
      </div>
      <div {...stylex.props(styles.newsletter)}><p {...stylex.props(styles.newsletterText)}>Receive more helpful insights to your inbox</p>
        <NewsletterForm/>
      </div>
      <div {...stylex.props(styles.followUs)}>Follow Us
        <div {...stylex.props(styles.socialIconList)}>
          <a href='https://www.facebook.com/share/yJDKhqvUKAZXQGHu/?mibextid=qi2Omg'><FaFacebook {...stylex.props(styles.socialIcon)}/></a>
          <a href='https://www.instagram.com/wisdomweavercoaching?igsh=MTZzOG5iMm9qc3dubw=='><FaInstagram {...stylex.props(styles.socialIcon)}/></a>
          {/* <FaXTwitter {...stylex.props(styles.socialIcon)}/> */}
        </div>
      </div>

    </div>
  )
}