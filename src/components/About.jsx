import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts, shadows } from "../tokens.stylex";
import Image from "next/image";

const styles = stylex.create({
  aboutSection: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
    minHeight: "450px",
    padding: {
      default: "75px",
      "@media (width < 1125px)": "25px 0px",
    },
    background: colors.whiteBackground,
  },
  aboutAccentBlock: {
    background: colors.lightBackground,
    width: {
      default: "25%",
      "@media (width < 950px)": "100%",
    },
    height: {
      default: "100%",
      "@media (width < 950px)": "325px",
    },
    position: "absolute",
    top: "0px",
    left: "0px",
  },
  aboutImageContainer: {
    display: "flex",
    flex: "1 0 100px",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "300px",
  },
  aboutImage: {
    borderRadius: "50%",
    filter: "brightness(0.9) contrast(1.15)",
    position: "relative",
    left: {
      default: "10vw",
      "@media (width < 950px)": "0px",
    },
    top: {
      default: "25px",
      "@media (width < 950px)": "0px",
    },
    alignSelf: "center",
    justifySelf: "center",
    outline: "6px solid",
    outlineColor: colors.lightAccent,
    outlineOffset: "4px",
    width: {
      default: "400px",
      "@media (975px < width <= 1350px)": "275px",
      "@media (width <= 975px)": "250px",
    },
    height: {
      default: "400px",
      "@media (975px < width <= 1350px)": "275px",
      "@media (width <= 975px)": "250px",
    },
  },
  about: {
    display: "flex",
    flexDirection: "column",
    flex: "3 1 700px",
    paddingBottom: "20px",
    justifyContent: "center",
    alignItems: {
      default: null,
      "@media (width <= 950px)": "center",
    },
  },
  aboutHeading: {
    fontFamily: fonts.subHeading,
    color: colors.lightHeading,
    textShadow: shadows.light,
    marginLeft: {
      default: "20%",
      "@media (width <= 950px)": "0",
    },
    marginBottom: "5",
    marginTop: "65px",
    fontSize: {
      default: "7rem",
      "@media (width < 500px)": "5rem",
    },
  },
  aboutText: {
    color: colors.lightText,
    fontSize: "2.2rem",
    letterSpacing: ".6px",
    marginTop: "0px",
    marginBottom: "15px",
    marginRight: "10vw",
    marginLeft: {
      default: "25%",
      "@media (width <= 665px)": "10vw",
    },
    maxWidth: "700px",
  },
});

export default function About() {
  return (
    <div {...stylex.props(styles.aboutSection)}>
      <div {...stylex.props(styles.aboutAccentBlock)}></div>
      <Image
        {...stylex.props(styles.aboutImage)}
        src="/images/Araceli.png"
        width={375}
        height={375}
        alt="Image of the founder of Wisdom Weaver Coaching"
      />
      <div {...stylex.props(styles.about)}>
        <h2 {...stylex.props(styles.aboutHeading)}>Who I Am</h2>
        <p {...stylex.props(styles.aboutText)}>
          With over 30 years of experience in the human development and public
          service sector, I have dedicated my career to supporting individuals
          from diverse backgrounds. My education and career have spanned various
          roles, working with a wide range of populations, which has enriched my
          understanding of human potential and resilience. Additionally, as a
          child of immigrant parents of native Mexican descent, I developed a
          deep appreciation for the wisdom held sacred among indigenous cultures
          around the world.
        </p>
        <p {...stylex.props(styles.aboutText)}>
          In 2017, my life took a surprising turn when my husband and I
          relocated to the Big Island of Hawaii, seeking healing and a better
          life balance. During a life-threatening health crisis that left my
          husband in a coma, I experienced a pivotal moment of insight that
          helped bring him back, defying medical expectations. This profound
          experience ignited a new purpose within me: to share my insights and
          support others in their journeys.
        </p>
        <p {...stylex.props(styles.aboutText)}>
          Certified as an innate well-being specialist through the International
          Guild of Hypnotherapy and trained in NLP and the Three Principles (3P)
          by David Key, my coaching style combines mindset shifts and practical
          tools to empower individuals to navigate life&apos;s challenges with
          resilience and clarity.
        </p>
      </div>
    </div>
  );
}
