
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
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <meta name ='viewport' contents='width=device-width, inital-scale=1.0'/>
      </head>
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
