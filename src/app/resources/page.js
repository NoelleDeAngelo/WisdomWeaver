import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  page: {
    background: '#28595A',
    color: '#f37353',
  },
});


export default function Resources() {
  return (
    <div {...stylex.props(styles.page)}>
      <h1 >Additional Resources</h1>
    </div>
  )
}