import '@styles/globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import Header from '@components/Layout/Header'
import styles from '@styles/components/Layout/layout.module.scss'

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
        <div className={styles.container}>
          <Header/>
          <main>
            {children}
          </main>
        </div>
        <ToastContainer />
      </body>
    </html>
  )
}
