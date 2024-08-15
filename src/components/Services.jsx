
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
      <h2 {...stylex.props(styles.sectionHeading)}>Services</h2>
      <div {...stylex.props(styles.serviceContainer)}>
        <div {...stylex.props(styles.textContainer, styles.reverse)}>
          <h3 {...stylex.props(styles.serviceHeading)}>One on One Coaching</h3>
          <p {...stylex.props(styles.serviceText)}>
            Experience the transformative power of coaching tailored
            specifically to your unique journey. Gain deeper insights, navigate
            challenges, and create meaningful, lasting change in your life.
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
            Join a supportive network of individuals who share a drive for
            personal development. Participate in enriching workshops that foster
            growth, enhance skills, and inspire positive transformation.
          </p>
        </div>
      </div>
      <div {...stylex.props(styles.serviceContainer)}>
        <div {...stylex.props(styles.textContainer, styles.reverse)}>
          <h3 {...stylex.props(styles.serviceHeading)}>Specialized Programs</h3>
          <p {...stylex.props(styles.serviceText)}>
            From career development and wellness to mindset transformation and
            personal growth, our programs are crafted to address specific areas
            of focus, helping you achieve your objectives with clarity and
            confidence.
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
            Enhance team performance, develop leadership skills, and foster a
            culture of success within your organization through tailored
            corporate coaching programs.
          </p>
        </div>
      </div>
    </div>
  );
};