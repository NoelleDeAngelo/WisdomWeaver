import * as stylex from '@stylexjs/stylex';
import {colors,spacing,fonts} from '../tokens.stylex';


const styles = stylex.create({
  navBar: {
    background: colors.darkTeal,
    color: colors.white,
    padding:0,
    margin:0,
    height: '5vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  brandName: {
    fontFamily: fonts.brand,
  },
  link: {
    listStyle: 'none'
  },
});


export default function Nav() {
  return (
    <div {...stylex.props(styles.navBar)}>
      <div {...stylex.props(styles.brandName)}>Wisdom Weaver Coaching</div>
      <div>
        <ul>
          <li {...stylex.props(styles.link)}>Home</li>
          <li {...stylex.props(styles.link)}>Approach</li>
          <li {...stylex.props(styles.link)}>About</li>
          <li {...stylex.props(styles.link)}>Blog</li>
          <li {...stylex.props(styles.link)}>Contact Us</li>
          <li {...stylex.props(styles.link)}>Our Services</li>
          <li {...stylex.props(styles.link)}>Additional Resources</li>

        </ul>
      </div>
    </div>
  )
}