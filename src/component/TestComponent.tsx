import React from 'react';
import { initUtils  } from '@telegram-apps/sdk-react';
import WebApp from '@twa-dev/sdk';


// Use resultButton in your component logic


const ShareToChatButton: React.FC = () => {
    const utils = initUtils();

    
    const handleShareToChat = () => {

      const message = `
      https://t.me/tbook_incentive_bot?start=50636747698965
      
      @tbook_incentive_bot
      Hi friend, get your 5 scratch cards🎉
      
      💅Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
      https://t.me/tbook_incentive_bot?start=50636747698965
            `.trim()


      // //这个函数执行完之后就会 close mini app, 没有回传什么东西
      //   // utils.openTelegramLink("https://t.me/share/url?url=https://t.me/tbook_incentive_bot?start=50636747698965&text={helloworld}")

    //   const shareText = `
    //   Hi friend, get your 5 scratch cards🎉💅

    //   Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints

    //   https://t.me/tbook_incentive_bot?start=50636747698965
    // `;

    if (typeof window !== "undefined") {
      WebApp.openLink(`tg://msg?text=${encodeURIComponent(message)}`);

    }


      }



  return (
    <>
    <button onClick={handleShareToChat}>
      Invite friends
    </button>
    </>
  );
};

export default ShareToChatButton;
