import * as stylex from '@stylexjs/stylex';

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
});


export default function About() {
  return (
    <div {...stylex.props(styles.page)}>
    <div {...stylex.props(styles.section)}>
      <h1 {...stylex.props(styles.heading)}>About Us</h1>
      <h4 {...stylex.props(styles.text)}>At Wisdom Weaver Coaching, we are dedicated to helping individuals unleash their inner greatness and live authentically. Founded by Araceli Lopez, our coaching practice is built upon a foundation of passion, expertise, and a genuine commitment to supporting others in their personal and professional growth. As a certified coach, I have helped countless clients overcome challenges, break through limitations, and create meaningful change in their lives. Our mission is simple: to inspire and empower you to become the best version of yourself. Whether you're navigating a career transition, seeking to improve your well-being, or striving for greater fulfillment, we are here to provide the guidance, support, and encouragement you need to thrive. Get to know us more and discover how our transformative coaching services can help you unlock your potential and create a life you love.
      </h4>
    </div>
  </div>
  )
}