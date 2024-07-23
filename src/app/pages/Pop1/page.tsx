"use client";

import Popup from "components/Popup";
import styles from "./index.module.scss";
import Image from "components/Image";
import ListItem from "components/ListItem";
import Cell from "components/Cell";
import WebApp from '@twa-dev/sdk';
import { initUtils  } from '@telegram-apps/sdk-react';

const Pop1 = () => {

  const utils = initUtils();

  const handleCopyLink = () => {
    const link = `https://t.me/tbook_incentive_bot?start=50636747698965`;
    navigator.clipboard.writeText(link).then(() => {
      console.log('Link copied to clipboard!');
      if (typeof window !== "undefined") {
      WebApp.showAlert(`Copied!`)
      }

    }).catch(err => {
      console.error('Failed to copy link: ', err);
    });
  }

  const handleInviteFriends = () => {
    const message = `
    https://t.me/tbook_incentive_bot?start=50636747698965
    
    @tbook_incentive_bot
    Hi friend, get your 5 scratch cards🎉
    
    💅Scratch to earn 🪙 Notcoin 💵20,000U 🏆TPoints
    https://t.me/tbook_incentive_bot?start=50636747698965
          `.trim()
    utils.openTelegramLink(`https://t.me/share/url?url=${message}`)

  }

  const isWebShareSupported = () => {
    console.log("share", navigator.share )
      return navigator.share !== undefined;
    };

  const handleExternalShare = async() => {
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

    }
  }

  return (
    <>
      <Popup pageName="Pop1" closeClass={``}>
        <div className={styles.content}>
          <div className={styles.starBox}>
            <Image
              className={styles.star}
              src={"image/icon14.png"}
            />
            <Image
              className={styles.star}
              src={"image/icon14.png"}
            />
            <Image
              className={styles.star}
              src={"image/icon14.png"}
            />
          </div>
          <div className={styles.iconBox}>
            <Image
              className={styles.icon}
              src={"image/icon22.png"}
            />
          </div>
          <button className={styles.title} onClick={handleInviteFriends}>invite friends</button>
          <div className={styles.list}>
            <ListItem
              name="Invite a Fren"
              showIcon
              label="Earn 500"
              icon={"image/icon70.png"}
            />
            <ListItem
              name="Invite a Premium Fren"
              showIcon
              label="Earn 500"
              icon={"image/icon71.png"}
            />
          </div>
          <Cell title="Friends Boosting">
            <div className={styles.tip}>
              Your supportive friends will show
              <br /> up here.
            </div>
          </Cell>
          <div className={styles.btns}>
            <div className={styles.item}>
              <div className={styles.IconBox}>
                <Image
                  className={styles.icon}
                  src={"image/icon26.png"}
                />
              </div>
              <div className={styles.text}>Share to chat</div>
            </div>
            <div className={styles.item}>
              <div className={styles.IconBox}>
                <Image
                  className={styles.icon}
                  src={"image/icon27.png"}
                />
              </div>
              <button className={styles.text} onClick={handleCopyLink}>Copy link</button>
            </div>
            <div className={styles.item}>
              <div className={styles.IconBox}>
                <Image
                  className={styles.icon}
                  src={"image/icon28.png"}
                />
              </div>
              <button className={styles.text} onClick={handleExternalShare}>More</button>
            </div>
          </div>
          <Image
            src={"image/icon29.png"}
            className={styles.btn}
          />
        </div>
      </Popup>
    </>
  );
};
export default Pop1;
