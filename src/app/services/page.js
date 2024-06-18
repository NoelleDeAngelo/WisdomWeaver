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


export default function Services() {
  return (
    <div {...stylex.props(styles.page)}>
    <div {...stylex.props(styles.section)}>
      <h1 {...stylex.props(styles.heading)}>Our Services</h1>
      <h4 {...stylex.props(styles.text)}>At Wisdom Weaver Coaching Coaching, we offer a range of personalized coaching services designed to meet your unique needs and goals. Whether you're seeking one-on-one coaching, group workshops, or specialized programs, we have a solution tailored just for you. Our services include:
      </h4>
      <ul>
        <li>One-on-One Coaching: Experience the power of personalized coaching tailored to your specific goals and aspirations. Work closely with Wisdom Weaver coach to gain clarity, overcome challenges, and achieve meaningful results.</li>
        <li>Group Workshops: Join a supportive community of like-minded individuals and participate in engaging workshops designed to foster personal growth, enhance skills, and promote positive change.</li>
        <li>Specialized Programs: From career development to wellness coaching, our specialized programs are designed to address specific areas of focus and help you achieve your objectives with clarity and confidence.</li>
        <li>Corporate Coaching: Elevate team performance, enhance leadership skills, and cultivate a culture of success within your organization with our customized corporate coaching programs.</li>
      </ul>
      <p {...stylex.props(styles.text)}>Whatever your needs may be, we are here to provide the guidance, support, and resources you need to unlock your full potential and live a life of purpose and fulfillment.</p>
    </div>
  </div>
  )
}