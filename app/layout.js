import { Inter } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The PairUp',
  description: 'College students facing challenges in building meaningful connections or seeking companionship now have the opportunity to leverage ThePairUp, a platform that offers anonymity while fostering friendships and relationships. Explore a world of possibilities while maintaining your privacy.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
