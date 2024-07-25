"use client";
import styles from "./index.module.scss";
import DATA from "@/configs/data";
import PRIZE from "@/configs/prize";
import Image from "@/components/Image";
import useStore from "@/stores/useStore";
import { gglFn } from "@/assets/js/ggl";
import { useApi } from "@/hooks/useApi";
import { useEffect, useState } from "react";

const Game = () => {
  const { user, userBalance } = useStore();
  const { luckDraw } = useApi();
  const [result, setResult] = useState(DATA.page1);
  const [resultState, setResultState] = useState(0);

  const startGame = async () => {
    if (userBalance.balance <= 0) return alert("Invite to get more cards!");
    if (resultState) return;
    setResultState(1);
    try {
      const res = await luckDraw({
        userid: String(user.id),
        profile_photo: "",
        playmode: "1",
      });

      if (res) {
        console.log(res.prize, PRIZE[res.prize as keyof typeof PRIZE]);
        setResult(res);
      }
    } catch (error) {
      alert("Invite to get more cards!");
    }
  };

  useEffect(() => {
    gglFn();
  }, []);

  const list = [
    {
      id: 1,
      name: "TokenA",
      icon: "image/icon7.png",
    },
    {
      id: 2,
      name: "TokenB",
      icon: "image/icon8.png",
    },
    {
      id: 3,
      name: "TokenC",
      icon: "image/icon9.png",
    },
    {
      id: 4,
      name: "Points",
      icon: "image/icon10.png",
    },
  ];

  return (
    <div className={styles.Game}>
      <Image className={styles.load} src={"image/icon7.png"} />
      <Image className={styles.load} src={"image/icon8.png"} />
      <Image className={styles.load} src={"image/icon9.png"} />
      <Image className={styles.load} src={"image/icon10.png"} />
      <div className={styles.top}>
        {list.map((item) => (
          <div key={item.id} className={styles.item}>
            <Image className={styles.icon} src={item.icon} />
            <div className={styles.name}>{item.name}</div>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.title}>scratch off tickets</div>
        <div id="container" className={styles.canvas}>
          <canvas
            id="ggl"
            className={styles.ggl}
            style={{ width: "100%", height: "100%" }}
          ></canvas>
          {result.prize ? (
            <Image
              className={styles.prize}
              src={
                PRIZE[result.prize as keyof typeof PRIZE] || "/image/icon7.png"
              }
            />
          ) : (
            <div className={styles.logo} onTouchStart={startGame}></div>
          )}
        </div>
        <div className={styles.times}>
          <div className={styles.label}>remaining times:</div>
          <div className={styles.value}>8</div>
        </div>
        <div className={styles.starBox}>
          <Image className={styles.star} src={"image/icon14.png"} />
          <Image className={styles.star} src={"image/icon14.png"} />
          <Image className={styles.star} src={"image/icon14.png"} />
        </div>
      </div>
    </div>
  );
};

export default Game;
