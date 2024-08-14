import * as stylex from "@stylexjs/stylex";
import { colors, fonts } from "../../tokens.stylex";

const styles = stylex.create({
  body: {
    minHeight: "90vh",
    position: "relative",
    marginTop: "-70px",
  },
  heroContainer: {
    height: "50vh",
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
    flexDirection: "column",
    background: colors.lightBackground,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  valuesSectionHeading: {
    fontFamily: fonts.subHeading,
    letterSpacing: "2px",
    color: colors.lightHeading,
    fontSize: {
      default: "7.5rem",
      "@media (width <= 490px)": "6rem",
    },
    margin:"10px"
  },
  valuesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "95%",
  },
  valueContainer: {
    listStyleType: "none",
    maxWidth: "275px",
    textAlign:"center",
  },
  valueHeading: {
    fontFamily: fonts.subHeading,
    fontSize: "3.6rem",
    letterSpacing: ".4px",
    color: colors.lightSubheading,
  },
  valueText: {
    fontFamily: fonts.text,
    color: colors.lightText,
    fontSize: "1.8rem",
  },
  approachSection: {
    padding: "75px 50px",
    display: "flex",
    background: colors.darkBackground,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  approachHeading: {
    fontFamily: fonts.subHeading,
    letterSpacing: "2px",
    color: colors.darkSubheading,
    fontSize: {
      default: "7.5rem",
      "@media (width <= 490px)": "6rem",
    },
    margin: {
      default: "50px",
      "@media (width <= 590px)": "10px",
    },
  },
  approachText: {
    fontFamily: fonts.text,
    color: colors.darkText,
    fontSize: {
      default: "2.3rem",
      "@media (width <= 550px)": "1.9rem",
    },
    fontWeight: "400",
    maxWidth: "650px",
    minWidth: {
      default: "500px",
      "@media (width <= 590px)": "300px",
    },
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
        <h1 {...stylex.props(styles.valuesSectionHeading)}>Values</h1>
        <ul {...stylex.props(styles.valuesContainer)}>
          <li {...stylex.props(styles.valueContainer)}>
            <h2 {...stylex.props(styles.valueHeading)}>Authenticity</h2>
            <p {...stylex.props(styles.valueText)}>
              Being true to oneself and honoring individual journeys.
            </p>
          </li>
          <li {...stylex.props(styles.valueContainer)}>
            <h2 {...stylex.props(styles.valueHeading)}>Resilience</h2>
            <p {...stylex.props(styles.valueText)}>
              Strength and adaptability in overcoming challenges.
            </p>
          </li>
          <li {...stylex.props(styles.valueContainer)}>
            <h2 {...stylex.props(styles.valueHeading)}>Well-Being</h2>
            <p {...stylex.props(styles.valueText)}>
              A balanced approach to mental, emotional, and physical health.
            </p>
          </li>
          <li {...stylex.props(styles.valueContainer)}>
            <h2 {...stylex.props(styles.valueHeading)}>Connection</h2>
            <p {...stylex.props(styles.valueText)}>
              Meaningful relationships and a sense of community.
            </p>
          </li>
          <li {...stylex.props(styles.valueContainer)}>
            <h2 {...stylex.props(styles.valueHeading)}>Cultural Wisdom</h2>
            <p {...stylex.props(styles.valueText)}>
              Drawing inspiration from diverse cultural teachings.
            </p>
          </li>
        </ul>
      </div>
      <div {...stylex.props(styles.approachSection)}>
        <h1 {...stylex.props(styles.approachHeading)}>Approach</h1>
        <h4 {...stylex.props(styles.approachText)}>
          Rooted in the transformative principles of Sydney Banks and the
          Positive Intelligence framework by Shirzad Chamine, my coaching
          approach emphasizes the importance of understanding the Three
          Principles—Mind, Consciousness, and Thought. This foundational
          knowledge helps you recognize how your perception of reality is
          shaped, empowering you to access your natural state of well-being.
          Complementing this, I integrate Positive Intelligence techniques to
          build mental strength. By identifying and mitigating Saboteurs—those
          self-limiting thought patterns—we work together to activate your Sage,
          a mindset that fosters positivity, emotional intelligence, and
          resilience in the face of life&apos;s challenges.
        </h4>
      </div>
      {/* <div>
        Accredidation
      </div> */}
    </div>
  );
}
