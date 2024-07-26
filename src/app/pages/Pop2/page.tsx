"use client";
import styles from "./index.module.scss";
import Cell from "components/Cell";
import Image from "components/Image";
import Popup2 from "components/Popup2";
import ListItem from "components/ListItem";
import useStore from "@/stores/useStore";
import { useState } from "react";

const Pop1 = () => {
  const formattedTime = useStore((state) => state.formattedTime);
  const { cardFree, cardCount, setCardCount, balance, setBalance } = useStore();

  const handleAddCard = () => {
    setBalance(balance - 150);
    setCardCount(cardCount + 1);
  };

  return (
    <Popup2 pageName="Pop2" closeClass={``}>
      <div className={styles.content}>
        <Image className={styles.title} src="image/icon99.png" />
        <Cell title="Daily boosters">
          <div className={styles.list}>
            <div className={styles.cardBox}>
              <ListItem
                name="Daily Free Scratch Cards"
                label={cardFree + " / " + 5 + " available"}
                icon={"image/icon154.png"}
              />
              <div className={cardFree >= 5 ? "ban" : ""}></div>
            </div>
            <ListItem
              name="Timing Bonus"
              label="Next free card"
              icon={"image/icon155.png"}
            >
              <span className={styles.listRed}>{formattedTime()}</span>
            </ListItem>
          </div>
        </Cell>
        <Cell title="Boosters">
          <div className={styles.list}>
            <div className={styles.cardBox} onClick={handleAddCard}>
              <ListItem
                iconStart
                name="Buy Scratch Cards"
                label="150 Rabbit Points / Card"
                icon={"image/icon156.png"}
              />
              <div className={balance < 150 ? "ban" : ""}></div>
            </div>
          </div>
        </Cell>
      </div>
    </Popup2>
  );
};
export default Pop1;
