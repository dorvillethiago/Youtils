import '@/src/styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header'
import styles from "./layout.module.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Youtils',
  description: 'Youtube open-source utility tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={styles} className={styles.container}>
          <Header/>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
