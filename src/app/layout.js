
import './global.css'

export const metadata = {
  title: "Wisdom Weaver Coaching",
  description: "Intuitive Life Coaching",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
