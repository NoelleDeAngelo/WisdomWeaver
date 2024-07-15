"use client";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts } from "../tokens.stylex";

const styles = stylex.create({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minWidth: "300px",
    marginTop: "50px",
  },
  formRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: "16px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    flexGrow: "1",
    flexShrink: "1",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: fonts.subHeading,
    fontSize: "18px",
    fontWeight: "300",
    letterSpacing: ".5px",
  },
  input: {
    border: "1px solid #A9A9A9",
    padding: "5px",
    marginRight: "15px",
    fontFamily: fonts.text,
    fontSize: "18px",
    fontWeight: "300",
    letterSpacing: ".8px",
    background: "#fafafa",
  },
  messageBox: {
    resize: "none",
  },
  sendButton: {
    border:"none",
    color: colors.heroText,
    background: {
      default: colors.darkButton,
      ":hover": colors.darkButtonHighlight,
    },
    fontFamily: fonts.text,
    padding: "15px",
    marginTop:"8px",
    borderRadius: "5px",
    fontSize: {
      default: "20px",
      "@media (width <= 750px)": "18px",
    },
    fontWeight: "300",
    textAlign: "center",
  },
  sectionRight: {
    display: "flex",
    justifyContent: "center",
    padding: "25px",
    width: "40%",
  },
});

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={handleSubmit} {...stylex.props(styles.form)}>
      <div {...stylex.props(styles.formRow)}>
        <div {...stylex.props(styles.inputContainer)}>
          <label htmlFor="firstName" {...stylex.props(styles.label)}>
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            {...stylex.props(styles.input)}
          />
        </div>
        <div {...stylex.props(styles.inputContainer)}>
          <label htmlFor="lastName" {...stylex.props(styles.label)}>
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            {...stylex.props(styles.input)}
          />
        </div>
      </div>
      <div {...stylex.props(styles.formRow)}>
        <div {...stylex.props(styles.inputContainer)}>
          <label htmlFor="email" {...stylex.props(styles.label)}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            {...stylex.props(styles.input)}
          />
        </div>
      </div>
      <div {...stylex.props(styles.formRow)}>
        <div {...stylex.props(styles.inputContainer)}>
          <label htmlFor="message" {...stylex.props(styles.label)}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            //cols="50"
            rows="5"
            required
            {...stylex.props(styles.input, styles.messageBox)}
          />
        </div>
      </div>
      <div>
        <input type="submit" value="Send" {...stylex.props(styles.sendButton)} />
      </div>
    </form>
  );
}
