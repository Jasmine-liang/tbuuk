import React, { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import styles from "./index.module.scss";

const CopyLinkButton: React.FC = () => {

  const handleCopyLink = () => {
    const link = `https://t.me/tbook_incentive_bot?start=50636747698965`;
    console.log("i'm here")
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      console.log("i'm innnn")

    navigator.clipboard.writeText(link).then(() => {
      console.log('Link copied to clipboard!');
      if (typeof window !== "undefined") {
      WebApp.showAlert(`Copied!`)
      }

    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  }
  };



  return (
    <button  className={styles.text} onClick={handleCopyLink}>
      Copy Link aaaaaa
    </button>
  );
};

export default CopyLinkButton;
