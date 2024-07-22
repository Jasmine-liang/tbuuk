'use client'
import CopyLinkButton from '@/component/CopyLinkButton'
import  ShareToChatButton  from '../component/ShareButton'
import SendToChatButton from '@/component/SendToChat'
import ExternalShareButton from '@/component/ExternalShare'
import { TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "@/hooks/useTonConnect";


function App() {
  const { connected } = useTonConnect();

  return (
    <>
      <ShareToChatButton />
      <p>----------------</p>
      <CopyLinkButton />
      <p>----------------</p>
      <SendToChatButton />
      <p>----------------</p>
      <ExternalShareButton />
      <p>----------------</p>
        <TonConnectButton />
        <div>
        <TonConnectButton />
      </div>
    </>
  )
}

export default App
