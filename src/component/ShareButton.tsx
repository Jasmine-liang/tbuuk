import React from 'react';
import { initUtils } from '@telegram-apps/sdk-react';
const ShareToChatButton: React.FC = () => {
    const utils = initUtils();

    
    const handleShareToChat = () => {
        utils.openTelegramLink("https://t.me/share/url?url={https://t.me/tbook_incentive_bot?start=50636747698965}&text={helloworld}")
    }

    const handleShareLink = () => {
      utils.shareURL("https://t.me/share/url?url={https://t.me/tbook_incentive_bot?start=50636747698965}&text={helloworld}")

    }


  return (
    <>
    <button onClick={handleShareToChat}>
      Share to Chat
    </button>
    <button onClick={handleShareLink }>share link</button>
    </>
  );
};

export default ShareToChatButton;
