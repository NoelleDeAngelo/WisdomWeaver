import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts } from "../tokens.stylex";


const styles = stylex.create({
  sectionContainer: {
    background: colors.darkBackground,
    display: "flex",
    flexDirection: "column",
  },
  sectionHeading: {
    fontFamily: fonts.subHeading,
    fontSize: "35px",
    color: colors.darkHeading,
  },
  serviceContainer: {
    maxWidth:'300px',
  },
  serviceHeading: {
    color: colors.darkSubheading,
  },
  serviceText: {
    color: colors.darkText,
  },
  left: {},
  right: {},
});

export default function Services() {
  return (
    <div {...stylex.props(styles.sectionContainer)}>
      <h2 {...stylex.props(styles.sectionHeading)}>Our Services</h2>
      <div {...stylex.props(styles.serviceContainer, styles.left)}>
        <h3 {...stylex.props(styles.serviceHeading)}>One on One coaching</h3>
        <p {...stylex.props(styles.serviceText)}>
          Experience the power of personalized coaching tailored to your
          specific goals and aspirations. Work closely with a Wisdom Weaver
          coach to gain clarity, overcome challenges, and achieve meaningful
          results.
        </p>
      </div>
      <div {...stylex.props(styles.serviceContainer, styles.right)}>
        <h3 {...stylex.props(styles.serviceHeading)}>Group Workshops</h3>
        <p {...stylex.props(styles.serviceText)}>
          Join a supportive community of like-minded individuals and participate
          in engaging workshops designed to foster personal growth, enhance
          skills, and promote positive change.
        </p>
      </div>
      <div {...stylex.props(styles.serviceContainer, styles.left)}>
        <h3 {...stylex.props(styles.serviceHeading)}>Specilized Programs</h3>
        <p {...stylex.props(styles.serviceText)}>
          From career development to wellness coaching, our specialized programs
          are designed to address specific areas of focus and help you achieve
          your objectives with clarity and confidence.
        </p>
      </div>
      <div {...stylex.props(styles.serviceContainer, styles.right)}>
        <h3 {...stylex.props(styles.serviceHeading)}>Corporate Coaching</h3>
        <p {...stylex.props(styles.serviceText)}>
          Elevate team performance, enhance leadership skills, and cultivate a
          culture of success within your organization with our customized
          corporate coaching programs.
        </p>
      </div>
    </div>
  );
};