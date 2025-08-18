import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts, shadows } from "../tokens.stylex";
import Image from "next/image";

const styles = stylex.create({
  aboutSection: {
    position: "relative",
    display: "flex",
    flexFlow: "row wrap",
    minHeight: "450px",
    //background: colors.lightBackground,
    backgroundImage: "url('/images/FounderBg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgrooundAttachment: "fixed",
  },

  sectionCard: {
    background: '#f9ede4',
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    minHeight: "400px",
    gap: "40px",
    borderRadius: "2px",
    boxShadow: shadows.card,
  },

  //-----Founder Section Styles-----//
  founderSection: {
    padding: {
      default: "75px 5vw",
    },
    margin: {
      default: "100px 2vw 50px 10vw",
      "@media (width <= 800px)": "50px 0",
    },
  },

  founderTextContainer: {
    display: "flex",
    flexDirection: "column",
    flex: "3 1 700px",
    paddingBottom: "20px",
    justifyContent: "center",
    marginLeft: {
      default: "5%",
      "@media (width <= 950px)": "3%",
    },
    alignItems: {
      default: null,
      "@media (width <= 950px)": "center",
    },
    textAlign: {
      default: "left",
      "@media (width <= 950px)": "center",
    },
  },

  //-----Soul Section Styles-----//
  soulSection: {
    flexDirection: "column",
    justifyContent: "stretch",
    padding: {
      default: "75px 5vw",
    },
    margin: {
      default: "100px 10vw 100px 2vw",
      "@media (width <= 800px)": "50px 0",
    },
  },

  aboutBlurb: {
    color: colors.lightText,
    fontSize: "2.5rem",
    letterSpacing: ".8px",
    margin: "0px 6%",
    width: "100%",
    textAlign: {
      default: "left",
      "@media (width <= 950px)": "center",
    },
    fontFamily: fonts.text,
  },

  practicesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    width: "100%",
    marginTop: "50px",
  },

  practicesCard: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    margin: "10px",
    background: "#fef7f4",
    boxShadow: "0 4px 12px rgba(35, 70, 73, 0.06)",
    border: "1px solid rgba(35, 70, 73, 0.08)",
    boxShadow: shadows.card,
    minHeight: "250px",
    maxWidth: "400px",
    textAlign: "center",
  },

  practicesHeading: {
    fontFamily: fonts.subHeading,
    fontSize: "3.6rem",
    fontWeight: "600",
    letterSpacing: ".5px",
    color: colors.lightSubheading,
    textShadow: "0 1px 1px rgba(0, 0, 0, 0.03)",
    margin: "0 5%",
  },

  practicesBlurb: {
    color: colors.lightText,
    fontSize: "1.8rem",
    letterSpacing: ".5px",
    margin: "0px 0 10px",
    fontWeight: "800",
    maxWidth: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    textShadow: shadows.text,
  },

  aboutImage: {
    borderRadius: "50%",
    alignSelf: "center",
    justifySelf: "center",
    outline: "6px solid",
    outlineColor: colors.lightAccent,
    outlineOffset: "4px",
    width: {
      default: "350px",
      "@media (975px < width <= 1350px)": "275px",
      "@media (width <= 975px)": "250px",
    },
    height: "auto",
  },

  aboutHeading: {
    fontFamily: fonts.subHeading,
    color: colors.lightHeading,
    textShadow: shadows.light,
    width: "100%",
    margin: "0 5%",
    fontSize: {
      default: "7rem",
      "@media (width < 500px)": "5rem",
    },
    textAlign: {
      default: "left",
      "@media (width <= 950px)": "center",
    },
  },

  aboutText: {
    color: colors.lightText,
    fontSize: "2rem",
    letterSpacing: ".8px",
    marginTop: "0px",
    marginBottom: "15px",
    maxWidth: "900px",
    textShadow: shadows.text,
  },
});

export default function About() {
  return (
    <div {...stylex.props(styles.aboutSection)}>
      <section {...stylex.props(styles.founderSection, styles.sectionCard)}>
        <h2 {...stylex.props(styles.aboutHeading)}>Founder and Coach</h2>
        <Image
          {...stylex.props(styles.aboutImage)}
          src="/images/Araceli.png"
          width={800}
          height={800}
          alt="Image of the founder of Wisdom Weaver Coaching"
        />
        <div {...stylex.props(styles.founderTextContainer)}>
          <p {...stylex.props(styles.aboutText)}>
            Araceli López is a Transformational Life Coach and the visionary
            founder of Wisdom Weaver Coaching, where she guides women through
            powerful journeys of healing, self-discovery, and soul-aligned
            achievement. A fierce believer in the power of visibility and
            vulnerability, Araceli helps women reclaim their voices, stand fully
            in their light, and live lives that reflect their soul&apos;s
            purpose. Her work is infused with Divine Feminine wisdom, grounded
            presence, and the invitation to be truly and unapologetically seen.
          </p>
          <p {...stylex.props(styles.aboutText)}>
            Drawing from her own experiences of profound loss, ancestral
            healing, and spiritual awakening, Araceli holds compassionate space
            for others to unravel old patterns, awaken inner wisdom, and embody
            their highest truth. Her signature approach weaves together mindset
            coaching, emotional alchemy, and sacred ritual to support deep,
            lasting transformation.
          </p>
          <p {...stylex.props(styles.aboutText)}>
            A fierce believer in the power of visibility and vulnerability,
            Araceli helps women reclaim their voices, stand fully in their
            light, and live lives that reflect their soul&apos;s purpose. Her
            work is infused with Divine Feminine wisdom, grounded presence, and
            the invitation to be truly and unapologetically seen.
          </p>
        </div>
      </section>
      <section {...stylex.props(styles.soulSection, styles.sectionCard)}>
        <h2 {...stylex.props(styles.aboutHeading)}>
          Soul Inspired Coaching & Healing
        </h2>
        <p {...stylex.props(styles.aboutBlurb)}>
          Gentle, Spirit-led practices that support emotional clarity, inner
          peace, and purpose-aligned living.
        </p>
        <div {...stylex.props(styles.practicesContainer)}>
          <div {...stylex.props(styles.practicesCard)}>
            <h3 {...stylex.props(styles.practicesHeading)}>
              Spiritual Life Coaching
            </h3>
            <p {...stylex.props(styles.aboutText)}>
              <strong {...stylex.props(styles.practicesBlurb)}>
                Prayerful guidance to reconnect with purpose.
              </strong>
            </p>
            <p {...stylex.props(styles.aboutText)}>
              Spirit-led coaching to help you release limiting beliefs and align
              with peace, clarity, and joy.
            </p>
          </div>

          <div {...stylex.props(styles.practicesCard)}>
            <h3 {...stylex.props(styles.practicesHeading)}>
              Intuitive Energy Healing
            </h3>
            <p {...stylex.props(styles.aboutText)}>
              <strong {...stylex.props(styles.practicesBlurb)}>
                Healing through reverence and divine presence.
              </strong>
            </p>
            <p {...stylex.props(styles.aboutText)}>
              A gentle, body-based practice that supports emotional and
              spiritual healing through your body&apos;s innate wisdom and the
              Divine&apos;s loving presence.
            </p>
          </div>

          <div {...stylex.props(styles.practicesCard)}>
            <h3 {...stylex.props(styles.practicesHeading)}>
              Non-Therapeutic Hypnosis
            </h3>
            <p {...stylex.props(styles.aboutText)}>
              <strong {...stylex.props(styles.practicesBlurb)}>
                Inner reflection to illuminate your path.
              </strong>
            </p>
            <p {...stylex.props(styles.aboutText)}>
              A supportive tool for guided prayer, visualization, and
              intention-setting to navigate challenges with clarity and purpose.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
