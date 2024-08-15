import * as stylex from "@stylexjs/stylex";
import { colors, fonts } from "../../tokens.stylex";
import Approach from "../../components/Approach.jsx";
import Values from "../../components/Values.jsx";

const styles = stylex.create({
  body: {
    minHeight: "90vh",
    position: "relative",
    marginTop: "-70px",
  },
  heroContainer: {
    height: "50vh",
  },
  heroImage: {
    backgroundImage: "url('/images/path.jpg')",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
  },
  valuesSection: {
    padding: "75px 50px",
    display: "flex",
    flexDirection: "column",
    background: colors.lightBackground,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  valuesSectionHeading: {
    fontFamily: fonts.subHeading,
    letterSpacing: "2px",
    color: colors.lightHeading,
    fontSize: {
      default: "7.5rem",
      "@media (width <= 490px)": "6rem",
    },
    margin:"10px"
  },
  valuesContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "95%",
  },
  valueContainer: {
    listStyleType: "none",
    maxWidth: "275px",
    textAlign:"center",
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
  approachSection: {
    padding: "75px 50px",
    display: "flex",
    background: colors.darkBackground,
    justifyContent: "space-evenly",
    alignItems: "center",
    flexWrap: "wrap",
  },
  approachHeading: {
    fontFamily: fonts.subHeading,
    letterSpacing: "2px",
    color: colors.darkSubheading,
    fontSize: {
      default: "7.5rem",
      "@media (width <= 490px)": "6rem",
    },
    margin: {
      default: "50px",
      "@media (width <= 590px)": "10px",
    },
  },
  approachText: {
    fontFamily: fonts.text,
    color: colors.darkText,
    fontSize: {
      default: "2.3rem",
      "@media (width <= 550px)": "1.9rem",
    },
    fontWeight: "400",
    maxWidth: "650px",
    minWidth: {
      default: "500px",
      "@media (width <= 590px)": "300px",
    },
    flex: "2 0",
  },
});

export default function CoachingApproach() {
  return (
    <div {...stylex.props(styles.body)}>
      <div {...stylex.props(styles.heroContainer)}>
        <div {...stylex.props(styles.heroImage)}></div>
      </div>
      <Values />
      <Approach />


    </div>
  );
}
