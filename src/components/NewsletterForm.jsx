"use client";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts } from "../tokens.stylex";
import { useState } from "react";

const fadeIn = stylex.keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const fadeOut = stylex.keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const styles = stylex.create({
  section: {
    display: "flex",
    width: "100%",
  },
  input: {
    flex: "3 3",
    background: colors.darkBackground,
    border: "2px solid",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "1.6rem",
    marginRight: "10px",
    color: colors.link,
    "::placeholder": {
      color: "#C0C0C0",
    },
    ":focus": {
      outline: "none",
    },
  },
  button: {
    flex: "1 1",
    backgroundColor: colors.darkButton,
    borderRadius: "5px",
    color: colors.darkText,
    padding: "10px 20px",
    fontSize: "1.6rem",
    border: "none",
    cursor: "pointer",
    ":hover": {
      backgroundColor: colors.darkButtonHighlight,
    },
    transition: "background-color .3s ease",
  },
  thankYou: {
    fontFamily: fonts.text,
    fontSize: "2rem",
    color:colors.darkText,
  },
  showing: {
    display: "flex",
    width: "100%",
  },
  notShowing: {
    display: "none",
    animationName: fadeOut,
    animationDuration: "1.5s",
    animationFillMode: "forwards",
  },
  fadeIn: {
    animationName: fadeIn,
    animationDuration: "1.5s",
    animationFillMode: "forwards",
  },
});

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    });
    if (res.status === 200) {
      e.target.reset();
      setSubscribed(true);
      setLoading(false);
      setTimeout(() => {
        setSubscribed(false);
      }, 6000);
    } else {
      alert("Something went wrong. Please try again later.");
    }
  };
  return (
    <div {...stylex.props(styles.section)}>
      <form
        onSubmit={handleSubmit}
        {...stylex.props(
          subscribed ? styles.notShowing : styles.showing,
          !loading ? styles.fadeIn : null
        )}
      >
        <input
          type="email"
          placeholder="E-mail"
          required
          {...stylex.props(styles.input)}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <button {...stylex.props(styles.button)}>Subscribe</button>
      </form>
      <span
        {...stylex.props(
          subscribed ? styles.showing : styles.notShowing,
          styles.thankYou,
          styles.fadeIn
        )}
      >
        Welcome! Get ready for inspiring tips!
      </span>
    </div>
  );
}
