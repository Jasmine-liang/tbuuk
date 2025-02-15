'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type ReactNode, useMemo, useState } from 'react'
import { type State, WagmiProvider } from 'wagmi'
import { SDKProvider } from '@telegram-apps/sdk-react';
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";


import { getConfig } from '@/wagmi'

export function Providers(props: {
  children: ReactNode
  initialState?: State
}) {
  const [config] = useState(() => getConfig())
  const [queryClient] = useState(() => new QueryClient())

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

  
  

  return (
    <TonConnectUIProvider manifestUrl={manifestUrl} 
    walletsListConfiguration={{
      includeWallets: [
        {
          appName: "tonwallet",
          name: "TON Wallet",
          imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
          aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
          universalLink: "https://wallet.ton.org/ton-connect",
          jsBridgeKey: "tonwallet",
          bridgeUrl: "https://bridge.tonapi.io/bridge",
          platforms: ["chrome", "android"]
        },
        {
          appName: "nicegramWallet",
          name: "Nicegram Wallet",
          imageUrl: "https://static.nicegram.app/icon.png",
          aboutUrl: "https://nicegram.app",
          universalLink: "https://nicegram.app/tc",
          deepLink: "nicegram-tc://",
          jsBridgeKey: "nicegramWallet",
          bridgeUrl: "https://bridge.tonapi.io/bridge",
          platforms: ["ios", "android"]
        },
        {
          appName: "binanceTonWeb3Wallet",
          name: "Binance Web3 Wallet",
          imageUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMEIwRTExIi8+CjxwYXRoIGQ9Ik01IDE1TDcuMjU4MDYgMTIuNzQxOUw5LjUxNjEzIDE1TDcuMjU4MDYgMTcuMjU4MUw1IDE1WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNOC44NzA5NyAxMS4xMjlMMTUgNUwyMS4xMjkgMTEuMTI5TDE4Ljg3MSAxMy4zODcxTDE1IDkuNTE2MTNMMTEuMTI5IDEzLjM4NzFMOC44NzA5NyAxMS4xMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMi43NDE5IDE1TDE1IDEyLjc0MTlMMTcuMjU4MSAxNUwxNSAxNy4yNTgxTDEyLjc0MTkgMTVaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMS4xMjkgMTYuNjEyOUw4Ljg3MDk3IDE4Ljg3MUwxNSAyNUwyMS4xMjkgMTguODcxTDE4Ljg3MSAxNi42MTI5TDE1IDIwLjQ4MzlMMTEuMTI5IDE2LjYxMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0yMC40ODM5IDE1TDIyLjc0MTkgMTIuNzQxOUwyNSAxNUwyMi43NDE5IDE3LjI1ODFMMjAuNDgzOSAxNVoiIGZpbGw9IiNGMEI5MEIiLz4KPC9zdmc+Cg==",
          aboutUrl: "https://www.binance.com/en/web3wallet",
          deepLink: "bnc://app.binance.com/cedefi/ton-connect",
          bridgeUrl: "https://bridge.tonapi.io/bridge",
          platforms: ["chrome", "safari", "ios", "android"],
          universalLink: "https://app.binance.com/cedefi/ton-connect"
        },
        {
          appName: "okxTonWallet2",
          name: "New OKX Wallet",
          imageUrl: "https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",
          aboutUrl: "https://www.okx.com/web3",
          universalLink: "https://www.okx.com/ul/uYJPB0",
          bridgeUrl: "https://www.okx.com/tonbridge/discover/rpc/bridge",
          jsBridgeKey: "okxTonWallet",
          platforms: ["chrome", "safari", "firefox", "ios", "android"]
        },
        {
          appName: "okxTonWalletTr2",
          name: "New OKX TR Wallet",
          imageUrl: "https://static.okx.com/cdn/assets/imgs/247/587A8296F0BB640F.png",
          aboutUrl: "https://tr.okx.com/web3",
          universalLink: "https://tr.okx.com/ul/uYJPB0?entityId=5",
          jsBridgeKey: "okxTonWallet",
          bridgeUrl: "https://www.okx.com/tonbridge/discover/rpc/bridge",
          platforms: [
            "chrome",
            "safari",
            "firefox",
            "ios",
            "android"
          ]
        }
      ]
    }}
  >
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
