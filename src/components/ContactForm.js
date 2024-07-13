"use client"
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts } from "../tokens.stylex";



const styles = stylex.create({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  messageBox: {
    resize: "none",
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
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input type="text" name="firstName" id="firstName" required />
        <label htmlFor="lastName">First Name: </label>
        <input type="text" name="lastName" id="lastName" required />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message: </label>
        <textarea
          name="message"
          id="message"
          cols="50"
          rows="5"
          required
          {...stylex.props(styles.messageBox)}
        />
      </div>
      <div>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
}