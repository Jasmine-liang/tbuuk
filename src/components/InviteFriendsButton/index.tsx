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
  const [inviteLink, setInviteLink] = useState<string | null>(null);


  useEffect(() => {
    if (typeof window !== "undefined") {
    if (WebApp.initDataUnsafe.user) {
      setUser(WebApp.initDataUnsafe.user);
      console.log("userid",WebApp.initDataUnsafe.user.id )
      setInviteLink(`https://t.me/wytestsbot?start=${user?.id}`)
    }
  }
  }, [user]);

  const handleShareToChat = async() => {
  
    if (typeof window !== "undefined") {
    
          
           const message = `
            Hi friend, get your 5 scratch cards🎉💅
            
            Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
            
    ${inviteLink}}
          `.trim()
      
    
            const inviteMessage = "https://t.me/JazzyDali_bot/testwallet?start=50636747698965"
            WebApp.switchInlineQuery(message, ['users', 'groups', 'channels']);
        
        
     

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
