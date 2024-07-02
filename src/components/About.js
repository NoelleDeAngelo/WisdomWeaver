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
    justifyContent: "center",
    alignItems: {
      default: null,
      "@media (width <= 950px)": "center",
    },
  },
  aboutHeading: {
    fontFamily:fonts.subHeading,
    color: colors.lightHeading,
    marginLeft: {
      default: "22%",
      "@media (799px < width <= 9500px)": "15%",
      "@media (width <= 799px)": "0",
    },
    marginBottom: "0",
  },
  aboutText: {
    color: colors.lightText,
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
        <h2 {...stylex.props(styles.aboutHeading)}>Who We Are</h2>
        <p {...stylex.props(styles.aboutText)}>
          At Wisdom Weaver Coaching, we are dedicated to helping individuals
          unleash their inner greatness and live authentically. Founded by
          Araceli Lopez, our coaching practice is built upon a foundation of
          passion, expertise, and a genuine commitment to supporting others in
          their personal and professional growth. As a certified coach, I have
          helped countless clients overcome challenges, break through
          limitations, and create meaningful change in their lives. Our mission
          is simple: to inspire and empower you to become the best version of
          yourself. Whether you're navigating a career transition, seeking to
          improve your well-being, or striving for greater fulfillment, we are
          here to provide the guidance, support, and encouragement you need to
          thrive. Get to know us more and discover how our transformative
          coaching services can help you unlock your potential and create a life
          you love.
        </p>
      </div>
    </div>
  );
}
