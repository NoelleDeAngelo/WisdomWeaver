'use client'
import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';
import { useState } from 'react';


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
    <input type= 'email' required onChange={e=>{setEmail(e.target.value)}} ></input>
    <button>Subscribe</button>
  </form>
  )
}