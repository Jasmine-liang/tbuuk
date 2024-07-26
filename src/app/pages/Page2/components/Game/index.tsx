"use client";
import { useApi } from "@/hooks/useApi";
import { useState, useEffect, useRef } from "react";
import DATA from "@/configs/data";
import Image from "@/components/Image";
import useStore from "@/stores/useStore";
import styles from "./index.module.scss";

const Game = () => {
  const { luckDraw } = useApi();
  const { userId, cardCount, setCardCount } = useStore();
  const [isGame, setIsGame] = useState(0);
  const [indexGame, setIndexGame] = useState(0);
  const [remainingTimes, setRemainingTimes] = useState(10);
  const intervalRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  console.log(cardCount);

  const startGame = (result: any) => {
    let maxIdx = DATA.page2.list.length;
    let n = 3 * maxIdx + Number(result.number); // 旋转的总次数
    let idx = indexGame;
    clearInterval(intervalRef.current);
    if (typeof window !== "undefined") {
      intervalRef.current = window.setInterval(() => {
        if (n === 0) {
          clearInterval(intervalRef.current);
          endGame(result);
          return;
        }
        setIndexGame(idx);
        idx = (idx + 1) % maxIdx;
        n--;
      }, 200);
    }
  };

  const endGame = (result: any) => {
    setIsGame(0);
    setIndexGame(0);
    alert(result.prize);
  };

  const handleClick = async () => {
    if (isGame) return;
    setCardCount(cardCount - 1);
    setIsGame(1);
    const result = await luckDraw({
      userid: String(userId),
      profile_photo: "",
      playmode: "2",
    });
    if (!result) alert(result.error);
    startGame(result);
  };

  return (
    <div className={styles.Game}>
      <div className={styles.content}>
        <div className={styles.frame}>
          <Image src="image/icon90.png" />
          <Image src="image/icon91.png" />
        </div>
        <div className={styles.title}>Wheel of Fortune</div>
        <div className={styles.grid}>
          {DATA.page2.list.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.item} ${indexGame === index ? styles.active : ""}`}
              style={{ gridArea: `i${index + 1}` }}
            >
              <Image className={styles.smallIcon} src={item.icon} />
              <div className={styles.text}>{item.name}</div>
            </div>
          ))}
          <div
            className={`${styles.item} ${styles.center}`}
            style={{ gridArea: "btn" }}
            onClick={handleClick}
          >
            <Image src="image/icon89.png" />
          </div>
          {!cardCount && !isGame && (
            <div className="ban">
              <div>Invite to get more cards!</div>
            </div>
          )}
        </div>
        <div className={styles.times}>
          <div className={styles.label}>remaining times:</div>
          <div className={styles.value}>{remainingTimes}</div>
          <Image className={styles.add} src="image/icon162.png" />
        </div>
      </div>
    </div>
  );
};

export default Game;
