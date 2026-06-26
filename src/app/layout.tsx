import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Watch Winners | Luxury Watch Competitions',
  description: 'Enter luxury watch prize draws and win your dream Rolex.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
