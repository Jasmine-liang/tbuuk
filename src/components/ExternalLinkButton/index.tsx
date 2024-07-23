import React, { ReactNode, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import styles from "./index.module.scss";
import Image from "components/Image";


const ExternalLinkButton: React.FC = () => {

    const isWebShareSupported = () => {
          return navigator.share !== undefined;}


  const handleCopyLink = async() => {
  
    if (typeof window !== "undefined") {
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
