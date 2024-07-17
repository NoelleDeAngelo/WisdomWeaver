import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts } from "../tokens.stylex";


const styles = stylex.create({
  body: {
    color: 'black',
    background: "lightgray",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    margin:"8px"

  },
  container: {
    display: "flex",
    flexDirection:"column",
    flex:"1 1 auto",
    background: "white",
    borderRadius: "5px",
    margin: "2px 4px",

  },
  heading: {
    fontFamily: fonts.subHeading,
    fontSize: "3rem",
    padding: "5px 15px",
    margin:"0px",
  },
  text: {
    fontFamily: fonts.text,
    fontSize: "1.6rem",
  },
  name: {
    margin:"0px 20px",
  },
  email: {
    margin:"5px 20px",
  },
  message: {
    margin:"20px"
  },
})


export default function EmailTemplate({name, email, message}) {
  return (
    <div {...stylex.props(styles.body)}>
      <div {...stylex.props(styles.container)}></div>
      <div {...stylex.props(styles.container)}>
        <h1 {...stylex.props(styles.heading)}>New Message</h1>
        <p {...stylex.props(styles.text, styles.name)}>
          You have a message from <strong> {name}</strong>.
        </p>
        <p {...stylex.props(styles.text, styles.email)}>
          Email:{email}
        </p>
      </div>
      <div {...stylex.props(styles.container)}>
        <p {...stylex.props(styles.text, styles.message)}>{message}</p>
      </div>
    </div>
  );
}