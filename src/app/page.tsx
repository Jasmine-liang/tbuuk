'use client'
import CopyLinkButton from '@/component/CopyLinkButton'
import  ShareToChatButton  from '../component/ShareButton'
import SendToChatButton from '@/component/SendToChat'
import ExternalShareButton from '@/component/ExternalShare'


function App() {

  return (
    <>
      <ShareToChatButton />
      <p>----------------</p>
      <CopyLinkButton />
      <p>----------------</p>
      <SendToChatButton />
      <p>----------------</p>
      <ExternalShareButton />
    </>
  )
}

export default App
