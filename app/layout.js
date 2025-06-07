import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar';
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200','300','400', '500', '600', '700','800'],
  variable: '--font-poppins'
})
export const metadata = {
  title: "BitTree - Your favorite link sharing site",
  description: "We brought a revolution in link sharing",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
