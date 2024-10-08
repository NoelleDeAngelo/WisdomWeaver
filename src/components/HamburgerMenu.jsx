"use client";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing, fonts } from "../tokens.stylex";
import { TiThMenu } from "react-icons/ti";
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
  },
  hamLink: {
    alignItems: "center",
    textDecoration: "none",
    padding: "12px",
    fontFamily: fonts.Subheading,
    fontSize: "2rem",
    color: {
      default: colors.lightText,
      ":hover": colors.navHighlight,
    },
    backgroundColor: {
      default: colors.background,
    },
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.25)",
  },
  active: {
    display: "flex",
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
