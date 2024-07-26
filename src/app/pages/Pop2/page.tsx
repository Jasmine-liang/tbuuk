"use client";
import styles from "./index.module.scss";
import Cell from "components/Cell";
import Image from "components/Image";
import Popup2 from "components/Popup2";
import ListItem from "components/ListItem";
import useStore from "@/stores/useStore";

const Pop1 = () => {
  const {
    cardFree,
    addCardFree,
    cardCount,
    setCardCount,
    balance,
    setBalance,
  } = useStore();

  const handleAddCard = () => {
    console.log(balance);
    setBalance(balance - 150);
    setCardCount(cardCount + 1);
  };

  return (
    <Popup2 pageName="Pop2" closeClass={``}>
      <div className={styles.content}>
        <Image className={styles.title} src="image/icon99.png" />
        <Cell title="Daily boosters">
          <div className={styles.list}>
            <div className={styles.cardBox} onClick={addCardFree}>
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
              <span className={styles.listRed}>09:33</span>
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
