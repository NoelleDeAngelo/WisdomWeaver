
import * as stylex from "@stylexjs/stylex";
import { colors, fonts, shadows } from "../tokens.stylex";
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
      default: "10rem",
      "@media (width <= 550px)": "7rem",
    },
    letterSpacing: "2px",
    color: colors.darkHeading,
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
    alignSelf: "center",
    marginTop: {
      default: "100px",
      "@media (width < 1125px)": "25px 0px",
    },
    marginBottom: "10px",
  },
  serviceContainer: {
    margin: "5% 5%",
    padding: "2% 5%",
    display: "flex",
    flexDirection: "row",
    maxWidth: "1200px",
    borderRadius: "10px",
    //background: colors.whiteBackground,
    backgroundImage: "url('/images/ServiceBg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: shadows.cardOnDark,
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
  left: {
    alignSelf: "flex-start",
    "@media (width <= 1500px)": {
      alignSelf: "center",
    },
  },
  right: {
    alignSelf: "flex-end",
    "@media (width <= 1500px)": {
      alignSelf: "center",
    },
  },
  photo: {
    width: "60%",
    height: "auto",
    maxWidth: "500px",
    minWidth: "320px",
    borderRadius: "6px",
    filter: shadows.sepia,
    boxShadow: shadows.light,
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
    color: colors.lightPink,
    fontSize: {
      default: "5.5rem",
      "@media (width <= 550px)": "4rem",
    },
    textAlign: "center",
    margin: "20px",
  },
  serviceText: {
    color: colors.lightText,
    fontSize: {
      default: "2.5rem",
      "@media (width <= 550px)": "2rem",
    },
    letterSpacing: ".6px",
    textShadow: shadows.text,
  },
});

export default function Services() {
  return (

      <div {...stylex.props(styles.ServicesSection)}>
        <h2 {...stylex.props(styles.sectionHeading)}>Services</h2>
        <div {...stylex.props(styles.serviceContainer, styles.right)}>
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
      <div {...stylex.props(styles.serviceContainer, styles.left)}>
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
      <div {...stylex.props(styles.serviceContainer, styles.right)}>
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
          alt="Image of small rocks stacked into a tower"
        />
      </div>
      <div {...stylex.props(styles.serviceContainer, styles.left)}>
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