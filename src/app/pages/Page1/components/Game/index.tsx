"use client";
import Image from "@/components/Image";
import styles from "./index.module.scss";
import ggl from "@/assets/js/ggl";
import { useEffect } from "react";
const Game = () => {
  useEffect(() => {
    ggl();
  }, []);

  const list = [
    {
      id: 1,
      name: "WISE SBT",
      icon: "image/icon7.png",
    },
    {
      id: 2,
      name: "$ NOT Token",
      icon: "image/icon8.png",
    },
    {
      id: 3,
      name: "TPoint",
      icon: "image/icon9.png",
    },
    {
      id: 4,
      name: "??",
      icon: "image/icon10.png",
    },
  ];

  return (
    <div className={styles.Game}>
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
          <Image
            className={styles.prize}
            src={"image/prize.png"}
          />
          <canvas
            id="ggl"
            className={styles.ggl}
            style={{ width: "100%", height: "100%" }}
          ></canvas>
        </div>
        <div className={styles.times}>
          <div className={styles.label}>remaining times:</div>
          <div className={styles.value}>8</div>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default Game;
