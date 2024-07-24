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


const ExternalLinkButton: React.FC = () => {

  const [user, setUser] = useState<TelegramUser | null>(null);


  useEffect(() => {
    if (typeof window !== "undefined") {
    if (WebApp.initDataUnsafe.user) {
      setUser(WebApp.initDataUnsafe.user);
      console.log("userid",WebApp.initDataUnsafe.user.id )
    }
  }
  }, [user]);

    const isWebShareSupported = () => {
          return navigator.share !== undefined;}


  const handleCopyLink = async() => {
  
    if (typeof window !== "undefined") {
      console.log("userid", user?.id)
        if (isWebShareSupported()) {
            try {
              await navigator.share({
                title: 'Check this out!',
                text: 'Here is something interesting I found.',
                url: 'https://example.com'
              });
              console.log('Content shared successfully!');
            } catch (error) {
              console.error('Error sharing content:', error);
            }
          } else {
            console.warn('Web Share API is not supported in this browser.');
          }
        };
    
  };



  return (
    <>
  <button className={styles.IconBox} onClick={handleCopyLink}>
  <Image
      className={styles.icon}
      src={"image/icon28.png"}
    />
  </button>
  <span className={styles.text}>More</span>

  </>
  );
};

export default ExternalLinkButton;
