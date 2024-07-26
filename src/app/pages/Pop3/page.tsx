"use client";

import Popup2 from "components/Popup2";
import styles from "./index.module.scss";
import Image from "components/Image";
import ListItem from "components/ListItem";
import Cell from "components/Cell";
const Pop1 = () => {
  return (
    <>
      <Popup2 pageName="Pop3" closeClass={``}>
        <div className={styles.content}>
          {/* <div className={styles.starBox}>
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
          </div> */}
          {/* <div className={styles.iconBox}>
            <Image
              className={styles.icon}
              src={"image/icon33.png"}
            />
          </div> */}
          <Image className={styles.title} src="image/icon100.png"/>
          {/* <div className={styles.title}>earn</div> */}
          <div className={styles.scrollView}>
            {/* <Cell title="Daily boosters"> */}
            <div className={styles.list}>
              <ListItem
                name="Invite 10 Frens"
                label="up to 100K"
                showIcon
                icon={"image/icon157.png"}
              />
              <ListItem
                name="Invite bonus"
                label="up to 100K"
                showIcon
                icon={"image/icon158.png"}
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
                  icon={"image/icon159.png"}
                />
                <ListItem
                  showIcon
                  name="Follow us on X"
                  label="up to 100K"
                  icon={"image/icon160.png"}
                />
                <ListItem
                  showIcon
                  name="Join Telegram channel"
                  label="+ 3,000"
                  icon={"image/icon161.png"}
                />
              </div>
            </Cell>
          </div>
        </div>
      </Popup2>
    </>
  );
};
export default Pop1;
