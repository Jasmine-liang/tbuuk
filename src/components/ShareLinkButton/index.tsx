import React from 'react';
import { initUtils  } from '@telegram-apps/sdk-react';
import Image from "components/Image";
import styles from "./index.module.scss";
import WebApp from '@twa-dev/sdk';




const ShareToChatButton: React.FC = () => {

    
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

      if (typeof window !== "undefined") {
        WebApp.openTelegramLink(`https://t.me/share/url?url=${message}`)
    
    }


      }



  return (
    <>

  <button onClick={handleShareToChat}>
  <Image
            src={"image/icon29.png"}
            className={styles.btn}
          />
  </button>
  </>
 
  );
};

export default ShareToChatButton;
