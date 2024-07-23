import React, { ReactNode, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import styles from "./index.module.scss";
import Image from "components/Image";


const InviteFriendsButton: React.FC = () => {



  const handleShareToChat = async() => {
  
    if (typeof window !== "undefined") {
    
        
    
           const message = `
            Hi friend, get your 5 scratch cards🎉💅
            
            Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
            
            https://t.me/tbook_incentive_bot?start=50636747698965
          `.trim()
    
    
            const inviteMessage = "https://t.me/JazzyDali_bot/testwallet?start=50636747698965"
            WebApp.switchInlineQuery(message, ['users', 'groups', 'channels']);
            WebApp.close();
        
        
     

        };
    
  };



  return (
    <>
  <button className={styles.IconBox} onClick={handleShareToChat}>
  <Image
      className={styles.icon}
      src={"image/icon26.png"}
    />
    <span className={styles.text}>Send to chat</span>
  </button>
  </>
  );
};

export default InviteFriendsButton;
