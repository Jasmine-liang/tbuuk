import React, { ReactNode, useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';
import styles from "./index.module.scss";
import Image from "components/Image";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}


const InviteFriendsButton: React.FC = () => {

  const [user, setUser] = useState<TelegramUser | null>(null);


  useEffect(() => {
    const initData = WebApp.initData;
    if (typeof window !== "undefined") {
    if (initData) {
      try {
        const initDataObj = JSON.parse(initData);
        if (initDataObj.user) {
          setUser(initDataObj.user);
          console.log("user",initDataObj.user.id )
          alert(initDataObj.user.id)
        }
      } catch (error) {
        console.error('Error parsing WebApp.initData:', error);
      }
    }
  }
  }, []);

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
  </button>
  <span className={styles.text}>Send to chat</span>
  </>
  );
};

export default InviteFriendsButton;
