'use client'
import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';
import { useState } from 'react';


const styles = stylex.create({
  form: {
    display: "flex",
    width:"100%",
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
      backgroundColor: "#006666",
    },
    transition: "background-color .3s ease",
  },
});



export default function NewsletterForm(){
  const [email, setEmail]= useState("");

  const handleSubmit= async (e)=> {
    e.preventDefault();
    await fetch('/api/newsletter', {
      method:'POST',
      body: JSON.stringify({'email':email})
    })
  }
  return (
    <form onSubmit={handleSubmit} {...stylex.props(styles.form)}>
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
  );
}


