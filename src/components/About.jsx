import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts } from "../tokens.stylex";
import Image from "next/image";


const styles = stylex.create({
  aboutSection: {
    display: "flex",
    flexFlow: "row wrap",
    minHeight: "450px",
  },
  aboutImageContainer: {
    display: "flex",
    flex: "1 0 100px",
    alignItems: "center",
    justifyContent: "center",
    background: colors.lightBackground,
    minHeight: "250px",
  },
  aboutImage: {
    borderRadius: "50%",
    position: "relative",
    left: {
      default: "50%",
      "@media (width <= 799px)": "0px",
    },
    outline: "6px solid",
    outlineColor: colors.lightAccent,
    outlineOffset: "4px",
    width: {
      default: "275px",
      "@media (850px < width <= 950px)": "250px",
      "@media (width <= 850px)": "200px",
    },
    height: {
      default: "275px",
      "@media (850px < width <= 950px)": "250px",
      "@media (width <= 850px)": "200px",
    },
  },
  about: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    flex: "3 1 600px",
    paddingBottom:'20px',
    justifyContent: "center",
    alignItems: {
      default: null,
      "@media (width <= 950px)": "center",
    },
  },
  aboutHeading: {
    fontFamily: fonts.subHeading,
    color: colors.lightHeading,
    marginLeft: {
      default: "22%",
      "@media (799px < width <= 9500px)": "15%",
      "@media (width <= 799px)": "0",
    },
    marginBottom: "0",
    fontSize: "4.5rem",
  },
  aboutText: {
    color: colors.lightText,
    fontSize: "2.2rem",
    marginTop: "10px",
    marginBottom: "10px",
    marginRight: "10%",
    marginLeft: {
      default: "25%",
      "@media (width <= 799px)": "10%",
    },
    maxWidth: "700px",
    textAlign: {
      default: "left",
      "@media (width <= 950px)": "center",
    },
  },
});

export default function About() {
  return (
    <div {...stylex.props(styles.aboutSection)}>
      <div {...stylex.props(styles.aboutImageContainer)}>
        <Image
          {...stylex.props(styles.aboutImage)}
          src="/images/Araceli.png"
          width={275}
          height={275}
          alt="Image of the founder of Wisdom Weaver Coaching"
        />
      </div>
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
