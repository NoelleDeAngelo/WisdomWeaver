import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  page: {
    background: '#28595A',
    color: '#f37353',
  },
  section:{
    padding: '75px 100px',
    display:'flex',
    flexDirection:'column',
  },
  heading:{
    marginBottom:'20px'
  },
  text:{
    margin:'0px',
  },
});


export default function Resources() {
  return (
    <div {...stylex.props(styles.page)}>
      <div {...stylex.props(styles.section)}>
        <h1 {...stylex.props(styles.heading)}>Additional Resources</h1>
        <h4 {...stylex.props(styles.text)}>
        </h4>
      </div>
    </div>
  )
}