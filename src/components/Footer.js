import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const styles = stylex.create({
  footer: {
    display:'flex',
    justifyContent: 'space-between',
    alignItems:'center',
    background: colors.cardBackground,
    fontFamily: fonts.text,
    color: colors.link,
    height: '20vh',
    fontSize:'1.4rem',
  },
  logoContainer:{
    display:'flex',
    flexDirection: 'column',
    padding: '0px 5vw',
  },
  logo:{
    fontFamily: fonts.brand,
    fontStyle: 'italic',
    fontSize:{
      default:'1.8rem',
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
    textAlign: 'center',
    fontSize:{
      default:'1.4rem',
      '@media (980px < width <= 1200px )':'1.2rem',
      '@media (800px < width <= 980px )':'1rem',
      '@media (width <= 800px)':'.8rem',
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
    color:colors.link,
  }
});


export default function Footer() {
  return (
    <div {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.logoContainer)}>
        <div {...stylex.props(styles.logo)}>Wisdom Weaver Coaching</div>
        <span {...stylex.props(styles.tagline)}>Catch your dreams</span>
      </div>
      <div {...stylex.props(styles.newsletter)}>Receive more helpful insights to your inbox
        <form>
          <input type= 'text'></input>
          <button>Subscribe</button>
        </form>
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