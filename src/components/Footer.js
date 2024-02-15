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
  },
  tagline:{
    fontSize:'1rem',
    fontFamily: fonts.text,
    alignSelf:'center'
  },
  newsletter:{

  },
  followUs:{
    padding: '0px 5vw',
    fontSize:'1.4rem'
  },
  socialIconList:{
    margin: '5px 0px',
    display:'flex',
    justifyContent:'space-around',

  },
  socialIcon:{

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
          <FaFacebook {...stylex.props(styles.socialIcon)}/>
          <FaInstagram {...stylex.props(styles.socialIcon)}/>
          <FaXTwitter {...stylex.props(styles.socialIcon)}/>
        </div>
      </div>

    </div>
  )
}