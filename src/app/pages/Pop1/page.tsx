"use client";

import Popup2 from "components/Popup2";
import styles from "./index.module.scss";
import Image from "components/Image";
import ListItem from "components/ListItem";
import Cell from "components/Cell";
import WebApp from "@twa-dev/sdk";
import { initUtils } from "@telegram-apps/sdk-react";
import CopyLinkButton from "@/components/CopyLinkButton";
import ExternalLinkButton from "@/components/ExternalLinkButton";
import InviteFriendsButton from "@/components/InviteFriendsButton";
import ShareLinkButton from "@/components/ShareLinkButton";

const Pop1 = () => {
  return (
    <>
      <Popup2 pageName="Pop1">
        <div className={styles.content}>
          <Image className={styles.title} src={"image/icon95.png"} />
          <div className={styles.list}>
            <div className={styles.cardBox} onClick={() => {}}>
              <ListItem
                name="Invite a Fren"
                showIcon
                label="Earn 500"
                icon={"image/icon152.png"}
              />
              <div className={false ? "ban" : ""}></div>
            </div>
            <div className={styles.cardBox} onClick={() => {}}>
              <ListItem
                name="Invite a Premium Fren"
                showIcon
                label="Earn 500"
                icon={"image/icon153.png"}
              />
              <div className={false ? "ban" : ""}></div>
            </div>
          </div>
          <Cell title="Friends Boosting">
            <div className={styles.tip}>
              Your supportive friends will show up here.
            </div>
          </Cell>
          <div className={styles.bottom}>
            <div className={styles.btns}>
              <div className={styles.item}>
                <InviteFriendsButton />
              </div>
              <div className={styles.item}>
                <CopyLinkButton />
              </div>

              <div className={styles.item}>
                <ExternalLinkButton />
              </div>
            </div>
            <div>
              <ShareLinkButton />
            </div>
          </div>
        </div>
      </Popup2>
    </>
  );
};
export default Pop1;
