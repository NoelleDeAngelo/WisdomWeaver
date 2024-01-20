import * as stylex from '@stylexjs/stylex';

const styles = stylex.create({
  page: {
    background: '#28595A',
    color: '#f37353',
  },
});


export default function Home() {
  return (
    <div {...stylex.props(styles.page)}>
      <h1 >
      Wisdom Weaver Coaching
      </h1>
    </div>

  )
}
