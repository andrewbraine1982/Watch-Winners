import './globals.css'
import AgeGate from "../components/AgeGate";
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Watch Winners | Luxury Watch Competitions',
  description: 'Enter luxury watch prize draws and win your dream Rolex.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<body>
  <AgeGate />
  {children}
</body>
    </html>
  )
}
