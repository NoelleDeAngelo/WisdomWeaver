'use client'
import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';
import { useState } from 'react';


const styles = stylex.create({
  form:{
  },
  input:{
    background:colors.darkBackground,
    border: '2px solid',
    //borderColor: colors.darkButton,
    borderRadius:'5px',
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    marginRight: '10px',
    maxWidth: {
      default:'450px',
      '@media (865px < width <= 1050px )':'200px',
      '@media (width < 865px )':'150px',
    },
    color: colors.link,
    '::placeholder': {
        color: '#C0C0C0',
    },
    ':focus': {
      outline: 'none',
    },
  },
  button:{
    backgroundColor: colors.darkButton,
    borderRadius:'5px',
    color: colors.darkText,
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
        backgroundColor: '#006666',
    },
    transition: 'background-color .3s ease',
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
    <form onSubmit={handleSubmit}>
    <input type= 'email' placeholder='E-mail' required  {...stylex.props(styles.input)} onChange={e=>{setEmail(e.target.value)}} ></input>
    <button {...stylex.props(styles.button)}>Subscribe</button>
  </form>
  )
}


