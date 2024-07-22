
import * as stylex from "@stylexjs/stylex";
import { colors,fonts } from "../tokens.stylex";
import Image from "next/image";


const styles = stylex.create({
  ServicesSection: {
    background: colors.darkBackground,
    display: "flex",
    flexDirection: "column",
  },
  sectionHeading: {
    fontFamily: fonts.subHeading,
    fontSize: {
      default: "8rem",
      "@media (width <= 550px)": "5rem",
    },
    letterSpacing: "2px",
    color: colors.darkHeading,
    alignSelf: "center",
  },
  serviceContainer: {
    margin: "8% 5%",
    display: "flex",
    flexDirection: "row",
    "@media (width <= 850px)": {
      flexDirection: "column",
    },
    justifyContent: "space-around",
    alignItems: "center",
  },
  reverse: {
    "@media (width <= 850px)": {
      order: 1,
    },
  },
  photo: {
    width: "60%",
    height: "auto",
    maxWidth: "500px",
    minWidth: "320px",
    borderRadius: ".5%",
  },
  textContainer: {
    maxWidth: "600px",
    minWidth: "270px",
    flexShrink: "1",
    alignSelf: "center",
    margin: "0px 5%",
  },
  serviceHeading: {
    fontFamily: fonts.subHeading,
    letterSpacing: "1px",
    color: colors.darkSubheading,
    fontSize: "3.5rem",
  },
  serviceText: {
    color: colors.darkText,
    fontSize: "2.5rem",
  },
});

export default function Services() {
  return (
    <div {...stylex.props(styles.ServicesSection)}>
      <h2 {...stylex.props(styles.sectionHeading)}>Our Services</h2>
      <div {...stylex.props(styles.serviceContainer)}>
        <div {...stylex.props(styles.textContainer, styles.reverse)}>
          <h3 {...stylex.props(styles.serviceHeading)}>One on One Coaching</h3>
          <p {...stylex.props(styles.serviceText)}>
            Experience the power of personalized coaching tailored to your
            specific goals and aspirations. Work closely with a Wisdom Weaver
            coach to gain clarity, overcome challenges, and achieve meaningful
            results.
          </p>
        </div>
        <Image
          {...stylex.props(styles.photo)}
          src="/images/OneOnOne.jpg"
          width={480}
          height={360}
          alt="Image of an open notebook in front of a open laptop"
        />
      </div>
      <div {...stylex.props(styles.serviceContainer)}>
        <Image
          {...stylex.props(styles.photo)}
          src="/images/Group.jpg"
          width={480}
          height={360}
          alt="Image of a group of women talking and laughing"
        />
        <div {...stylex.props(styles.textContainer)}>
          <h3 {...stylex.props(styles.serviceHeading)}>Group Workshops</h3>
          <p {...stylex.props(styles.serviceText)}>
            Join a supportive community of like-minded individuals and
            participate in engaging workshops designed to foster personal
            growth, enhance skills, and promote positive change.
          </p>
        </div>
      </div>
      <div {...stylex.props(styles.serviceContainer, styles.reverse)}>
        <div {...stylex.props(styles.textContainer, styles.reverse)}>
          <h3 {...stylex.props(styles.serviceHeading)}>Specialized Programs</h3>
          <p {...stylex.props(styles.serviceText)}>
            From career development to wellness coaching, our specialized
            programs are designed to address specific areas of focus and help
            you achieve your objectives with clarity and confidence.
          </p>
        </div>
        <Image
          {...stylex.props(styles.photo)}
          src="/images/Specialized.jpg"
          width={480}
          height={360}
          alt="Image of small rocks stacked in a tower"
        />
      </div>
      <div {...stylex.props(styles.serviceContainer)}>
        <Image
          {...stylex.props(styles.photo)}
          src="/images/Corporate.jpg"
          width={480}
          height={360}
          alt="Image of a woman giving a presentation to a group in a meeting room"
        />
        <div {...stylex.props(styles.textContainer)}>
          <h3 {...stylex.props(styles.serviceHeading)}>Corporate Coaching</h3>
          <p {...stylex.props(styles.serviceText)}>
            Elevate team performance, enhance leadership skills, and cultivate a
            culture of success within your organization with our customized
            corporate coaching programs.
          </p>
        </div>
      </div>
    </div>
  );
};