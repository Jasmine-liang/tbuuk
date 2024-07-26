"use client";
import { useApi } from "@/hooks/useApi";
import { useState, useEffect, useRef } from "react";
import DATA from "@/configs/data";
import Image from "@/components/Image";
import useStore from "@/stores/useStore";
import styles from "./index.module.scss";

const Game = () => {
  const maxIdx = DATA.page2.list.length;
  const { luckDraw } = useApi();
  const {
    userId,
    cardCount,
    setCardCount,
    cardFree,
    resetCountdown,
    startCountdown,
  } = useStore();
  const [isGame, setIsGame] = useState(0);
  const [timeGame, setTimeGame] = useState(100);
  const [indexGame, setIndexGame] = useState(0);
  const [countGame, setCountGame] = useState(0);
  const [indexResult, setIndexResult] = useState(-1);
  const [textResult, setTextResult] = useState("");
  const formattedTime = useStore((state) => state.formattedTime);

  useEffect(() => {
    if (isGame && timeGame) {
      setTimeout(() => {
        if (timeGame != 200 && countGame > 2 * maxIdx) {
          setTimeGame(200);
        }

        if (countGame > 3 * maxIdx && indexGame === indexResult) {
          endGame();
        } else {
          setCountGame(countGame + 1);
          setIndexGame((indexGame + 1) % maxIdx);
        }
      }, timeGame);
    }
  }, [isGame, indexGame, timeGame, indexResult, countGame]);

  const endGame = () => {
    setIsGame(0);
    setCountGame(0);
    setTimeGame(100);
    setIndexResult(-1);
    setIndexResult(-1);
    alert(textResult);
  };

  const handleClick = async () => {
    if (isGame) return;
    setIsGame(1);
    setCardCount(cardCount - 1);
    const result = await luckDraw({
      userid: String(userId),
      profile_photo: "",
      playmode: "2",
    });
    if (!result) alert(result.error);
    setIndexResult(Number(result.number));
    setTextResult(result.prize);
  };

  const addFreeCard = async () => {
    console.log(cardFree);
    if (5 - cardFree > 0) {
      resetCountdown();
      startCountdown();
    }
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
          <div className={styles.value}>{formattedTime()}</div>
          <Image
            onClick={addFreeCard}
            className={styles.add}
            src="image/icon162.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Game;
