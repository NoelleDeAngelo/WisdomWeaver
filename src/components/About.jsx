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
        <h2 {...stylex.props(styles.aboutHeading)}>Founder and Coach</h2>
        <p {...stylex.props(styles.aboutText)}>
          Araceli López is a Transformational Life Coach and the visionary
          founder of Wisdom Weaver Coaching, where she guides women through
          powerful journeys of healing, self-discovery, and soul-aligned
          achievement. A fierce believer in the power of visibility and
          vulnerability, Araceli helps women reclaim their voices, stand fully
          in their light, and live lives that reflect their soul&apos;s purpose.
          Her work is infused with Divine Feminine wisdom, grounded presence,
          and the invitation to be truly and unapologetically seen.
        </p>
        <p {...stylex.props(styles.aboutText)}>
          Drawing from her own experiences of profound loss, ancestral healing,
          and spiritual awakening, Araceli holds compassionate space for others
          to unravel old patterns, awaken inner wisdom, and embody their highest
          truth. Her signature approach weaves together mindset coaching,
          emotional alchemy, and sacred ritual to support deep, lasting
          transformation.
        </p>
        <p {...stylex.props(styles.aboutText)}>
          A fierce believer in the power of visibility and vulnerability,
          Araceli helps women reclaim their voices, stand fully in their light,
          and live lives that reflect their soul&apos;s purpose. Her work is
          infused with Divine Feminine wisdom, grounded presence, and the
          invitation to be truly and unapologetically seen.
        </p>
      </div>
    </div>
  );
}
