import * as stylex from '@stylexjs/stylex';
import { colors, fonts } from "../../tokens.stylex";

const styles = stylex.create({
  body: {
    minHeight: "90vh",
    position: "relative",
    top: "-70px",
  },
  heroContainer: {
    height: "40vh",
  },
  heroImage: {
    backgroundImage: "url('/images/path.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
  },
  valuesSection: {
    padding: "75px 50px",
    display: "flex",
    background: colors.darkBackground,
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  valueHeading: {
    fontFamily: fonts.subHeading,
    letterSpacing: "2px",
    color: colors.darkSubheading,
    fontSize: {
      default: "5.5rem",
      "@media (width <= 490px)": "4rem",
    },
    margin: "50px",
    alignSelf: "center",
  },
  valueText: {
    fontFamily: fonts.text,
    color: colors.darkText,
    fontSize: {
      default: "1.8rem",
      //"@media (width <= 1200px)": "1.6rem",
    },
    fontWeight: "400",
    maxWidth: "650px",
    minWidth:"320px",
    flex: "2 0",
  },
});


export default function CoachingApproach() {
  return (
    <div {...stylex.props(styles.body)}>
      <div {...stylex.props(styles.heroContainer)}>
        <div {...stylex.props(styles.heroImage)}></div>
      </div>
      <div {...stylex.props(styles.valuesSection)}>
        <h1 {...stylex.props(styles.valueHeading)}>Our Values</h1>
        <h4 {...stylex.props(styles.valueText)}>
          Our approach to transformational
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