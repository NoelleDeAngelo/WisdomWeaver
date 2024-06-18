import * as stylex from '@stylexjs/stylex';
import Link from 'next/link';
import {colors,spacing,fonts} from '../../tokens.stylex';

const styles = stylex.create({
  page: {
    background: '#28595A',
    color: '#f37353',
  },
  section:{
    padding: '75px 100px',
    display:'flex',
    flexDirection:'column',
  },
  heading:{
    marginBottom:'20px'
  },
  text:{
    margin:'0px',
  },
  linkContainer:{
    margin: '20px',
  },
  link:{
    color: colors.headline,
    fontSize: {
      default:'1.5rem',
      '@media (width <= 750px)':'1.2rem',
    },
    fontStyle: 'italic',
    fontWeight:'300',
},
});


export default function ContactUs() {
  return (
    <div {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.section)}>
        <h1 {...stylex.props(styles.heading)}>Contact Us</h1>
        <h4 {...stylex.props(styles.text)}>Ready to take the first step towards positive change? We would love to hear from you! Whether you have questions about our coaching services, want to schedule a consultation, or simply wish to connect, feel free to reach out to us. You can contact us via phone, email, or by scheduling below. We value your privacy and confidentiality, and all communications will be kept strictly confidential. Let's start the conversation and explore how we can support you on your journey to personal growth and fulfillment. We look forward to connecting with you soon!
        </h4>
        <div {...stylex.props(styles.linkContainer)}>
          <Link href= 'https://wisdomweavercoaching.youcanbook.me/' {...stylex.props(styles.link)}>Book a Free Consultaion</Link>
        </div>

      </div>
    </div>
  )
}