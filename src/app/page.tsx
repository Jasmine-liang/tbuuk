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
  

  if (!wallet) {
    return (
          // <>
          //   <p>
          //     To display the data related to the TON Connect, it is required to connect your wallet
          //   </p>
          //   <TonConnectButton />
          // </>
      
           <TonConnectButton />
  )
   
    
  }
  return (
    <>

      {/* <ShareToChatButton />
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
      {
        {connected} &&  <div>is connected:</div>  
      } */}

  {/* <TonConnectUIProvider>
      {!wallet ? (
        <TonConnectButton />
      ) : ( */}
        <>

          <ShareToChatButton />
          <p>----------------</p>
          <CopyLinkButton />
          <p>----------------</p>
          <SendToChatButton />
          <p>----------------</p>
          <ExternalShareButton />
          <p>----------------</p>
          
      
        </>
    {/* //   )}
    // </TonConnectUIProvider> */}
    </>
  )
}

export default App
