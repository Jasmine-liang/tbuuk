"use client";
import { useState, useEffect, useRef } from "react";
import Image from "@/components/Image";
import styles from "./index.module.scss";
import useStore from "@/stores/useStore";
import { useApi } from "@/hooks/useApi";

const Game = () => {
  let resultState = 0;
  const { user, userBalance } = useStore();
  const { luckDraw } = useApi();
  const [result, setResult] = useState({ prize: "" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [remainingTimes, setRemainingTimes] = useState(10);
  const intervalRef = useRef<number | undefined>(undefined);

  const prizes = [
    { id: 1, name: "xxxx", icon: "image/icon56.png" },
    { id: 2, name: "xxxx", icon: "image/icon56.png" },
    { id: 3, name: "xxxx", icon: "image/icon56.png" },
    { id: 4, name: "xxxx", icon: "image/icon56.png" },
    { id: 5, name: "xxxx", icon: "image/icon56.png" },
    { id: 6, name: "xxxx", icon: "image/icon56.png" },
    { id: 7, name: "xxxx", icon: "image/icon56.png" },
    { id: 8, name: "xxxx", icon: "image/icon56.png" },
  ];

  const getLuckDraw = async () => {
    try {
      const res = await luckDraw({
        userid: String(user.id),
        profile_photo: "",
        playmode: "2",
      });

      if (res) {
        resultState = 1;
        setResult(res);
      }
    } catch (error) {
      resultState = 1;
      // alert("Invite to get more cards!");
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const startGame = () => {
    if (userBalance.balance <= 0) return alert("Invite to get more cards!");
    if (remainingTimes <= 0) return;
    getLuckDraw();

    let maxIdx = prizes.length;
    let n = 3 * maxIdx; // 旋转的总次数
    let idx = (Math.random() * maxIdx) | 0;

    clearInterval(intervalRef.current);
    if (typeof window !== "undefined") {
      intervalRef.current = window.setInterval(() => {
        if (n <= 0 && resultState) {
          console.log(n);
          clearInterval(intervalRef.current);
          gameOver();
          return;
        }
        setActiveIndex(idx);
        idx = (idx + 1) % maxIdx;
        n--;
      }, 200);
    }
  };

  const gameOver = () => {
    // alert(result.prize);
    // alert("Game Over! You won: " + prizes[activeIndex].name);
  };

  return (
    <div className={styles.Game}>
      <div className={styles.content}>
        <div className={styles.title}>Wheel of Fortune</div>
        <div className={styles.grid}>
          {prizes.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.item} ${activeIndex === index ? styles.active : ""}`}
              style={{ gridArea: `i${index + 1}` }}
            >
              <Image className={styles.smallIcon} src={item.icon} />
              <div className={styles.text}>{item.name}</div>
            </div>
          ))}
          <div
            className={`${styles.item} ${styles.center}`}
            style={{ gridArea: "btn" }}
            onClick={startGame}
          >
            <div className={styles.text}>GO</div>
          </div>
        </div>
        <div className={styles.times}>
          <div className={styles.label}>remaining times:</div>
          <div className={styles.value}>{remainingTimes}</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
