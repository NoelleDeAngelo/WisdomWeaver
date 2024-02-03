'use client'
import * as stylex from '@stylexjs/stylex';
import {colors,spacing} from '../tokens.stylex';
import { TiThMenu } from "react-icons/ti";


let menuOpen = false;

const styles = stylex.create({
  menu: {
    display: {
      default:'none',
      '@media (max-width: 1000px)': 'flex',
    },
    position: 'absolute',
    right:'1rem',
    fontSize: '35px'
  },
});


export default function HamburgerMenu({menuOpen}) {
  return (
  <TiThMenu onClick= {()=> {menuOpen = !menuOpen; console.log(`in menu ${menuOpen}`)}} {...stylex.props(styles.menu)} />  )
}