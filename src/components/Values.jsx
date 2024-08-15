import * as stylex from "@stylexjs/stylex";
import { colors, fonts } from "../tokens.stylex";

const styles = stylex.create({

  Section: {
    padding: "75px 50px",
    display: "flex",
    flexDirection: "column",
    background: colors.lightBackground,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  sectionHeading: {
    fontFamily: fonts.subHeading,
    letterSpacing: "2px",
    color: colors.lightHeading,
    fontSize: {
      default: "7.5rem",
      "@media (width <= 490px)": "6rem",
    },
    margin: "10px",
  },
  listContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "95%",
  },
  valueContainer: {
    listStyleType: "none",
    maxWidth: "275px",
    textAlign: "center",
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
});

export default function Values() {
  return (
      <div {...stylex.props(styles.Section)}>
        <h1 {...stylex.props(styles.sectionHeading)}>Values</h1>
        <ul {...stylex.props(styles.listContainer)}>
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
  );
}