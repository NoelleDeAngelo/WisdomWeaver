import * as stylex from '@stylexjs/stylex';
import EmailTemplate from "../../components/EmailTemplate.jsx"

const styles = stylex.create({
  page: {
    background: '#28595A',
    color: '#f37353',
  },
});


export default function Blog() {
  return (
    <div {...stylex.props(styles.page)}>
      {/* <h1 >Blog/Articles</h1> */}
      <EmailTemplate name='Noelle Deangelo' email= 'em@em' message= 'this is the message that was sent'/>
    </div>
  )
}