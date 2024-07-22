import './globals.css'
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { type ReactNode } from 'react'
import { cookieToInitialState } from 'wagmi'

import { getConfig } from '../wagmi'
import { Providers } from './providers'
import WebApp from '@twa-dev/sdk'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Wagmi',
  description: 'Generated by create-wagmi',
}
if (typeof window !== "undefined") {

WebApp.ready();
}



export default function RootLayout(props: { children: ReactNode }) {
  const initialState = cookieToInitialState(
    getConfig(),
    headers().get('cookie'),
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers initialState={initialState}>{props.children}</Providers>
      </body>
    </html>
  )
}
