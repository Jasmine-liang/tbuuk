"use client";

import Popup from "components/Popup";
import styles from "./index.module.scss";
import Image from "components/Image";
import ListItem from "components/ListItem";
import Cell from "components/Cell";
const Pop1 = () => {
  return (
    <>
      <Popup pageName="Pop2" closeClass={``}>
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
              src={"image/icon32.png"}
            />
          </div>
          <div className={styles.title}>boost</div>
          <Cell title="Daily boosters">
            <div className={styles.list}>
              <ListItem
                name="Daily Free Scratch Cards"
                label="0 / 5 available"
                icon={"image/icon23.png"}
              />
              <ListItem
                name="Invite a Premium Fren"
                label="Next free card"
                icon={"image/icon77.png"}
              >
                <span className={styles.listRed}>09:33</span>
              </ListItem>
            </div>
          </Cell>
          <Cell title="Boosters">
            <div className={styles.list}>
              <ListItem
                iconStart
                name="Buy Scratch Cards"
                label="150 TPoints / Card"
                icon={"image/icon78.png"}
              />
            </div>
          </Cell>
        </div>
      </Popup>
    </>
  );
};
export default Pop1;
