import './globals.css'
import type { Metadata } from 'next'
import Head from 'next/head';

import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { type ReactNode } from 'react'
import { cookieToInitialState } from 'wagmi'

import { getConfig } from '../wagmi'
import { Providers } from './providers'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Wagmi',
  description: 'Generated by create-wagmi',
}

export default function RootLayout(props: { children: ReactNode }) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get('cookie'),
  )
  return (
    <html lang="en">
       <Head>
        <Script async
    defer src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" > </Script>
      </Head>
      <body className={inter.className}>
        <Providers initialState={initialState}>{props.children}</Providers>
      </body>
    </html>
  )
}
