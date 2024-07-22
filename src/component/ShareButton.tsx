import React from 'react';
import { initUtils } from '@telegram-apps/sdk-react';


const ShareToChatButton: React.FC = () => {
    const utils = initUtils();

    
    const handleShareToChat = () => {
      //这个函数执行完之后就会 close mini app, 没有回传什么东西
        utils.openTelegramLink("https://t.me/share/url?url={https://t.me/tbook_incentive_bot?start=50636747698965}&text={helloworld}")
    }



  return (
    <>
    <button onClick={handleShareToChat}>
      Share to Chat
    </button>
    </>
  );
};

export default ShareToChatButton;
