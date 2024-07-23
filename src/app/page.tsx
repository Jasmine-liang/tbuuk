'use client'
import CopyLinkButton from '@/component/CopyLinkButton'
import  ShareToChatButton  from '../component/ShareButton'
import SendToChatButton from '@/component/SendToChat'
import ExternalShareButton from '@/component/ExternalShare'
import { THEME, TonConnectButton, useTonWallet } from "@tonconnect/ui-react";
import { useTonConnect } from "@/hooks/useTonConnect";
import { TonConnectUIProvider } from "@tonconnect/ui-react";


function App() {
  const { connected } = useTonConnect();
  const wallet = useTonWallet();
  
  return (
    <TonConnectUIProvider>
    <div>
      {!wallet ? (
        <TonConnectButton />
      ) : (
        <>
          <TonConnectButton />
          <ShareToChatButton />
          <p>----------------</p>
          <CopyLinkButton />
          <p>----------------</p>
          <SendToChatButton />
          <p>----------------</p>
          <ExternalShareButton />
          <p>----------------</p>
        </>
      )}
    </div>
  </TonConnectUIProvider>
  )
}

export default App
