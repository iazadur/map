import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/lib/Providers'
import Meta from '@/components/meta/Meta'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en">
        <head>
          <Meta />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  )
}
