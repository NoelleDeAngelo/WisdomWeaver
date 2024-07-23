import * as stylex from '@stylexjs/stylex';
import { colors, fonts } from "../../tokens.stylex";

const styles = stylex.create({
  body: {
    background: colors.lightBackground,
    minHeight: "80vh",
  },
  navBackground: {
    position: "absolute",
    height: "80px",
    width: "100%",
    right:"15px",
    top: "0px",
    zIndex:"2",
    // background: "linear-gradient(black, 20%, transparent)",
    //opacity:".4"
  },
  heroContainer: {
    position: "relative",
    top: "-70px",
    height: "35vh",
  },
  heroImage: {
    backgroundImage: "url('/images/path.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
  },
  section: {
    padding: "75px 100px",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    marginBottom: "20px",
  },
  text: {
    margin: "0px",
  },
});


export default function CoachingApproach() {
  return (
    <div {...stylex.props(styles.body)}>
      <div {...stylex.props(styles.navBackground)}></div>
      <div {...stylex.props(styles.heroContainer)}>
        <div {...stylex.props(styles.heroImage)}></div>
      </div>
      <div {...stylex.props(styles.section)}>
        <h1 {...stylex.props(styles.heading)}>Coaching Approach</h1>
        <h4 {...stylex.props(styles.text)}>
          Welcome to Wisdom Weaver Coaching! Our approach to transformational
          coaching is deeply rooted in the belief that every individual
          possesses the power to unlock their full potential and lead a
          fulfilling life. We understand that personal growth is a journey, and
          our coaching methodology is designed to empower you every step of the
          way. Our approach combines a blend of proven coaching techniques,
          personalized strategies, and compassionate guidance to support you in
          overcoming obstacles, discovering your strengths, and achieving your
          goals. We believe in fostering a supportive and non-judgmental
          environment where you can explore new possibilities, gain clarity, and
          create lasting positive change. Whether you&apos;re seeking to enhance
          your career, improve relationships, or cultivate a greater sense of
          purpose, our coaching approach is tailored to meet your unique needs
          and aspirations. Let&apos;s embark on this transformative journey
          together and unlock the extraordinary potential that lies within you.
        </h4>
      </div>
    </div>
  );
}