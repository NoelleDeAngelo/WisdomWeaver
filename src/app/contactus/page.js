import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  page: {
    background: '#28595A',
    color: '#f37353',
  },
});


export default function ContactUs() {
  return (
    <div {...stylex.props(styles.page)}>
      <h1 >Contact Us</h1>
    </div>
  )
}