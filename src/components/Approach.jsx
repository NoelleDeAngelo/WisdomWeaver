import * as stylex from "@stylexjs/stylex";
import { colors, fonts } from "../tokens.stylex";

const styles = stylex.create({

  approachSection: {
    padding: "75px 50px",
    display: "flex",
    background: colors.lightBackground,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  approachHeading: {
    fontFamily: fonts.subHeading,
    letterSpacing: "2px",
    color: colors.lightHeading,
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
    color: colors.lightText,
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


export default function Approach() {
  return (
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
  );
}