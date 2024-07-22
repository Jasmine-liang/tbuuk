'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useMemo, useState } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import { SDKProvider } from '@telegram-apps/sdk-react';
import { TonConnectUIProvider } from "@tonconnect/ui-react";


import { getConfig } from '@/wagmi'

export function Providers(props: {
  children: ReactNode
  initialState?: State
}) {
  const [config] = useState(() => getConfig())
  const [queryClient] = useState(() => new QueryClient())
  // const manifestUrl = useMemo(() => {
  //   return new URL('tonconnect-manifest.json', window.location.href).toString();
  // }, []);
// this manifest is used temporarily for development purposes
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';
  
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>

    <WagmiProvider config={config} initialState={props.initialState}>
      <QueryClientProvider client={queryClient}>
      <SDKProvider acceptCustomStyles debug>
        {props.children}
        </SDKProvider>
      </QueryClientProvider>
    </WagmiProvider>
    </TonConnectUIProvider>

  )
}
