'use client'
import CopyLinkButton from '@/component/CopyLinkButton'
import  ShareToChatButton  from '../component/ShareButton'
import SendToChatButton from '@/component/SendToChat'
import ExternalShareButton from '@/component/ExternalShare'
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "@/hooks/useTonConnect";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://markokhman.github.io/first_contract_front_end/tonconnect-manifest.json";

function App() {
  const { connected } = useTonConnect();

  return (
    <>
      <TonConnectUIProvider manifestUrl={manifestUrl}>

      <ShareToChatButton />
      <p>----------------</p>
      <CopyLinkButton />
      <p>----------------</p>
      <SendToChatButton />
      <p>----------------</p>
      <ExternalShareButton />
      <p>----------------</p>
        <div>
        <TonConnectButton />
      </div>
      <div>is connected: {connected}</div>  
      </TonConnectUIProvider>

    </>
  )
}

export default App
