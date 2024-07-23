"use client";

import Popup from "components/Popup";
import styles from "./index.module.scss";
import Image from "components/Image";
import ListItem from "components/ListItem";
import Cell from "components/Cell";
const Pop1 = () => {
  return (
    <>
      <Popup pageName="Pop3" closeClass={``}>
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
              src={"image/icon33.png"}
            />
          </div>
          <div className={styles.title}>earn</div>
          <div className={styles.scrollView}>
            {/* <Cell title="Daily boosters"> */}
            <div className={styles.list}>
              <ListItem
                name="Invite 10 Frens"
                label="up to 100K"
                showIcon
                icon={"image/icon72.png"}
              />
              <ListItem
                name="Invite bonus"
                label="up to 100K"
                showIcon
                icon={"image/icon73.png"}
              >
                <span className={styles.listBlue}>for fren</span>
              </ListItem>
            </div>
            {/* </Cell> */}
            <Cell title="Explore">
              <div className={styles.list}>
                <ListItem
                  showIcon
                  name="Join Channel"
                  label="+ 3,000"
                  icon={"image/icon74.png"}
                />
                <ListItem
                  showIcon
                  name="Follow us on X"
                  label="up to 100K"
                  icon={"image/icon75.png"}
                />
                <ListItem
                  showIcon
                  name="Join Telegram channel"
                  label="+ 3,000"
                  icon={"image/icon76.png"}
                />
              </div>
            </Cell>
          </div>
        </div>
      </Popup>
    </>
  );
};
export default Pop1;
