"use client";

import Popup from "components/Popup";
import styles from "./index.module.scss";
import Image from "components/Image";
import ListItem from "components/ListItem";
import Cell from "components/Cell";
import WebApp from '@twa-dev/sdk';
import { initUtils  } from '@telegram-apps/sdk-react';
import CopyLinkButton from "@/components/CopyLinkButton";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import ShareToChatButton from "@/components/InviteFriendsButton";
import InviteFriendsButton from "@/components/InviteFriendsButton";

const Pop1 = () => {


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
          <div className={styles.title} >invite friends</div>
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
              {/* <div className={styles.IconBox}>
                <Image
                  className={styles.icon}
                  src={"image/icon26.png"}
                />
              </div>
              <div className={styles.text}>Share to chat</div> */}
              <ShareToChatButton />
            </div>
            <div className={styles.item}>
            <CopyLinkButton />
            </div>

            <div className={styles.item}>
            <ExternalLinkButton />
            </div>
          </div>
          <InviteFriendsButton />
        
        </div>
      </Popup>
    </>
  );
};
export default Pop1;
