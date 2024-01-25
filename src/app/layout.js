
import './global.css'
import Nav from '../components/Nav.js'
import Footer from '../components/Footer.js'

export const metadata = {
  title: "Wisdom Weaver Coaching",
  description: "Intuitive Life Coaching",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
