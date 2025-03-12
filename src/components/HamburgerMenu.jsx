"use client";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts, shadows } from "../tokens.stylex";
import { animations } from "../animations.stylex";
import { TiThMenu } from "react-icons/ti";
import { IoCloseCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { useState, useEffect } from "react";

const styles = stylex.create({
  menuIcon: {
    display: {
      default: "none",
      "@media (width <= 800px)": "flex",
    },
    padding: "5px 20px",
    fontSize: "3.5rem",
  },
  menu: {
    flexDirection: "column",
  },

  hamList: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: "30px",
    top:"15px",
    padding: "55px 0px",
    background: colors.darkBackground,
    boxShadow: shadows.card,
    borderRadius: "2px",

  },
  closeIcon: {
    fontSize: "3rem",
    position: "absolute",
    right: "5px",
    top:"5px",
  },
  hamLink: {
    textDecoration: "none",
    padding: "10px 30px",
    fontFamily: fonts.text,
    fontSize: "2.5rem",
    textAlign: "center",
    color: {
      default: colors.navText,
      ":hover": colors.navHighlight,
    },
    background: colors.darkBackground,
  },
  active: {
    display: "flex",
    animationName: animations.fadeInLeft,
    animationDuration: ".3s",
    animationTimingFunction: "ease-out",
  },
  inactive: {
    display: "none",
  },
});

export default function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 1001px)")
      .addEventListener("change", (e) => setMenuOpen(false));
  }, []);

  return (
    <div {...stylex.props(styles.menu)}>
      <TiThMenu
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        {...stylex.props(styles.menuIcon)}
      />
      <div
        {...stylex.props(
          styles.hamList,
          menuOpen ? styles.active : styles.inactive
        )}
      >
        <IoCloseCircleOutline
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          {...stylex.props(styles.closeIcon)}
        />
        <Link
          href="/"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          {...stylex.props(styles.hamLink)}
        >
          Home
        </Link>
        <Link
          href="/coachingapproach"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          {...stylex.props(styles.hamLink)}
        >
          Approach
        </Link>
        {/* <Link href='/blog' onClick= {()=> {setMenuOpen(!menuOpen)}} {...stylex.props(styles.hamLink)}>Blog</Link> */}
        <Link
          href="/contactus"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          {...stylex.props(styles.hamLink)}
        >
          Contact Us
        </Link>
        {/* <Link href='/resources' onClick= {()=> {setMenuOpen(!menuOpen)}} {...stylex.props(styles.hamLink)}>Resources</Link> */}
      </div>
    </div>
  );
}
