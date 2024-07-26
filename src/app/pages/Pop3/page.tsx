"use client";

import styles from "./index.module.scss";
import Cell from "components/Cell";
import Image from "components/Image";
import Popup2 from "components/Popup2";
import ListItem from "components/ListItem";
import useStore from "@/stores/useStore";
import { useState } from "react";
const Pop1 = () => {
  const { balance, setBalance, setShowPage } = useStore();
  const [shareX, setShareX] = useState(0);
  const [shareTg, setShareTg] = useState(0);
  const [shareJoin, setShareJoin] = useState(0);

  const handleAddBalance = (value: number) => {
    setBalance(balance + value);
  };
  return (
    <>
      <Popup2 pageName="Pop3" closeClass={``}>
        <div className={styles.content}>
          <Image className={styles.title} src="image/icon100.png" />
          {/* <div className={styles.title}>earn</div> */}
          <div className={styles.scrollView}>
            {/* <Cell title="Daily boosters"> */}
            <div className={styles.list}>
              <div
                className={styles.cardBox}
                onClick={() => {
                  setShowPage("Pop1", true);
                }}
              >
                <ListItem
                  name="Invite 10 Frens"
                  label="up to 100K"
                  showIcon
                  icon={"image/icon157.png"}
                />
                <div className={shareJoin ? "ban" : ""}></div>
              </div>
              <div
                className={styles.cardBox}
                onClick={() => {
                  setShowPage("Pop1", true);
                }}
              >
                <ListItem
                  name="Invite bonus"
                  label="up to 100K"
                  showIcon
                  icon={"image/icon158.png"}
                >
                  <span className={styles.listBlue}>for fren</span>
                </ListItem>
                <div className={shareJoin ? "ban" : ""}></div>
              </div>
            </div>
            {/* </Cell> */}
            <Cell title="Explore">
              <div className={styles.list}>
                <div
                  className={styles.cardBox}
                  onClick={() => {
                    setShareJoin(1);
                    handleAddBalance(3000);
                  }}
                >
                  <ListItem
                    showIcon
                    name="Join Channel"
                    label="+ 3,000"
                    icon={"image/icon159.png"}
                  />
                  <div className={shareJoin ? "ban" : ""}></div>
                </div>
                <div
                  className={styles.cardBox}
                  onClick={() => {
                    setShareX(1);
                    handleAddBalance(100000);
                  }}
                >
                  <ListItem
                    showIcon
                    name="Follow us on X"
                    label="up to 100K"
                    icon={"image/icon160.png"}
                  />
                  <div className={shareX ? "ban" : ""}></div>
                </div>
                <div
                  className={styles.cardBox}
                  onClick={() => {
                    setShareTg(1);
                    handleAddBalance(3000);
                  }}
                >
                  <ListItem
                    showIcon
                    name="Join Telegram channel"
                    label="+ 3,000"
                    icon={"image/icon161.png"}
                  />
                  <div className={shareTg ? "ban" : ""}></div>
                </div>
              </div>
            </Cell>
          </div>
        </div>
      </Popup2>
    </>
  );
};
export default Pop1;
