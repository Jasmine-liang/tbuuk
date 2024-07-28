"use client";

import React, { useEffect, useState } from 'react';
import { initUtils } from '@telegram-apps/sdk-react';
import Image from "components/Image";
import styles from "./index.module.scss";
import WebApp from '@twa-dev/sdk';


interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}


const ShareLinkButton: React.FC = () => {

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
  const handleShareToChat = () => {

    const message = `
    Hi friend, get your 5 scratch cards🎉💅
    
    Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
    
${inviteLink}}
  `.trim()


    // //这个函数执行完之后就会 close mini app, 没有回传什么东西
    //   // utils.openTelegramLink("https://t.me/share/url?url=https://t.me/tbook_incentive_bot?start=50636747698965&text={helloworld}")

    if (typeof window !== "undefined") {
      WebApp.openTelegramLink(`https://t.me/share/url?url=${message}`)

    }


  }



  return (
    <>

      <button className={styles.button} onClick={handleShareToChat}>
        <Image
          src={"image/icon98.png"}
          className={styles.btn}
        />
      </button>
    </>

  );
};

export default ShareLinkButton;
