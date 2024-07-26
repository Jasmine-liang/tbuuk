"use client";

import React, { ReactNode, useEffect } from 'react';
import WebApp from '@twa-dev/sdk';
import styles from "./index.module.scss";
import Image from "components/Image";


const CopyLinkButton: React.FC = () => {

  const handleCopyLink = () => {
    const link = `https://t.me/tbook_incentive_bot?start=50636747698965`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {

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
    <>
      <button className={styles.IconBox} onClick={handleCopyLink}>
        <Image
          className={styles.icon}
          src={"image/icon27.png"}
        />
      </button>
      <span className={styles.text}>Copy Link</span>
    </>
  );
};

export default CopyLinkButton;
