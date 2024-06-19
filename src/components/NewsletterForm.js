'use client'
import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';


export default function NewsletterForm(){
  const handleSubmit= async (e)=> {
    e.preventDefault();
    await fetch('/api/newsletter', {
      method:'POST',
      body: JSON.stringify({hello:'world'})
    })
  }
  return (
    <form onSubmit={handleSubmit}>
    <input type= 'email' ></input>
    <button>Subscribe</button>
  </form>
  )
}