"use client";

import React, { ReactNode, useEffect, useState } from "react";
import WebApp from "@twa-dev/sdk";
import styles from "./index.module.scss";
import Image from "components/Image";

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
}
const CopyLinkButton: React.FC = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize the SDK
      const init = async () => {
        try {
          if (WebApp.initDataUnsafe.user) {
            console.log("AAa");
            setUser(WebApp.initDataUnsafe.user);
            console.log("user", user?.id);
          }
        } catch (error) {
          console.error("Failed to initialize the Telegram SDK", error);
        }
      };
      init();
    }
  }, []);

  const handleCopyLink = () => {
    const link = `https://t.me/tbook_incentive_bot?start=50636747698965`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      console.log("asdsa", user?.id);
      navigator.clipboard
        .writeText(link)
        .then(() => {
          console.log("Link copied to clipboard!");
          if (typeof window !== "undefined") {
            WebApp.showAlert(`Copied!`);
            // Initialize the SDK
            const init = async () => {
              try {
                if (WebApp.initDataUnsafe.user) {
                  console.log("AAa");
                  setUser(WebApp.initDataUnsafe.user);
                  console.log("user", user?.id);
                }
              } catch (error) {
                console.error("Failed to initialize the Telegram SDK", error);
              }
            };
            init();
          }
        })
        .catch((err) => {
          console.error("Failed to copy link: ", err);
        });
    }
  };

  return (
    <>
      <button className={styles.IconBox} onClick={handleCopyLink}>
        <Image className={styles.icon} src={"image/icon27.png"} />
      </button>
      <span className={styles.text}>Copy Link</span>
    </>
  );
};

export default CopyLinkButton;
