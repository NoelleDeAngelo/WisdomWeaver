import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  page: {
    background: '#28595A',
    color: '#f37353',
  },
});


export default function Blog() {
  return (
    <div {...stylex.props(styles.page)}>
      <h1 >Blog/Articles</h1>
    </div>
  )
}