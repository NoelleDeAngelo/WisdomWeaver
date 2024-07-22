"use client";
import * as stylex from "@stylexjs/stylex";
import { colors, fonts } from "../tokens.stylex";
import { useState } from "react";

const fadeInAndOut = stylex.keyframes({
  "0%": { opacity: 0 },
  "15%": { opacity: 1 },
  "85%": {opacity: 1 },
  "100%": { opacity: 0 },
});


const styles = stylex.create({
  contactForm: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    minWidth: "300px",
    marginTop: "50px",
  },
  formRow: {
    display: "flex",
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
    fontSize: "1.8rem",
    fontWeight: "300",
    letterSpacing: ".5px",
  },
  input: {
    border: "1px solid #A9A9A9",
    padding: "5px",
    marginRight: "15px",
    fontFamily: fonts.text,
    fontSize: "1.8rem",
    fontWeight: "300",
    letterSpacing: ".8px",
    background: "#fafafa",
  },
  messageBox: {
    resize: "none",
  },
  sendButton: {
    border: "none",
    color: colors.heroText,
    background: {
      default: colors.darkButton,
      ":hover": colors.darkButtonHighlight,
    },
    fontFamily: fonts.text,
    padding: "15px",
    marginTop: "8px",
    borderRadius: "5px",
    fontSize: {
      default: "2rem",
      "@media (width <= 750px)": "1.8rem",
    },
    fontWeight: "300",
    textAlign: "center",
  },
  thankYouNotShowing: {
    display: "none",
  },
  thankYouShowing: {
    marginTop: "25px",
    display: "block",
    animationName: fadeInAndOut,
    animationDuration: "5s",
    animationFillMode: "forwards",
  },
  thankYou: {
    fontFamily: fonts.subHeading,
    fontSize: "2.2rem",
    fontWeight: "300",
    letterSpacing: ".5px",
  },
});

export default function ContactForm() {

  const [showing, setShowing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await fetch("/api/sendEmail", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      e.target.reset();
      setShowing(true);
      setTimeout(() => {
        setShowing(false)
      }, 6000);
    } else {
      alert("Something went wrong. Please try again later.")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} {...stylex.props(styles.contactForm)}>
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
              rows="5"
              required
              {...stylex.props(styles.input, styles.messageBox)}
            />
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="Send"
            {...stylex.props(styles.sendButton)}
          />
        </div>
      </form>
      <div
        {...stylex.props(
          showing ? styles.thankYouShowing : styles.thankYouNotShowing
        )}
      >
        <p {...stylex.props(styles.thankYou)}>
          Thank you. Your message has been sent.
        </p>
      </div>
    </div>
  );
}
