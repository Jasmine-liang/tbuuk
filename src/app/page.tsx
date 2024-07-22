'use client'
import CopyLinkButton from '@/component/CopyLinkButton'
import  ShareToChatButton  from '../component/ShareButton'
import SendToChatButton from '@/component/SendToChat'


function App() {


  return (
    <>
      <ShareToChatButton />
      <p>----------------</p>
      <CopyLinkButton />
      <p>----------------</p>
      <SendToChatButton />
    </>
  )
}

export default App
