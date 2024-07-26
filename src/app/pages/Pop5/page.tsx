"use client";
import Popup from "components/Popup";
import styles from "./index.module.scss";
import Image from "components/Image";
import Cell from "components/Cell";
import { useEffect, useState } from "react";
const Pop1 = () => {
  const swiperList = [1, 2, 3];
  const [current, setCurrent] = useState(0);
  const list = [
    {
      icon: "image/icon64.png",
      name: "EQC_yT3...K1L0e",
      val: "1020",
    },
    {
      icon: "image/icon65.png",
      name: "EQC_yT3...K1L0e",
      val: "800",
    },
    {
      icon: "image/icon66.png",
      name: "EQC_yT3...K1L0e",
      val: "234",
    },
    {
      icon: "image/icon67.png",
      name: "EQC_yT3...K1L0e",
      val: "89",
    },
    {
      icon: "image/icon68.png",
      name: "EQC_yT3...K1L0e",
      val: "100",
    },
    {
      icon: "image/icon94.png",
      name: "EQC_yT3...K1L0e",
      val: "100",
      active: true,
    },
    {
      icon: "image/icon68.png",
      name: "EQC_yT3...K1L0e",
      val: "100",
    },
    {
      icon: "image/icon68.png",
      name: "EQC_yT3...K1L0e",
      val: "100",
    },
    {
      icon: "image/icon68.png",
      name: "EQC_yT3...K1L0e",
      val: "100",
    },
    {
      icon: "image/icon68.png",
      name: "EQC_yT3...K1L0e",
      val: "100",
    },
    {
      icon: "image/icon68.png",
      name: "EQC_yT3...K1L0e",
      val: "100",
    },
    {
      icon: "image/icon69.png",
      name: "EQC_yT3...K1L0e",
      val: "100",
    },
  ];
  return (
    <Popup pageName="Pop5" closeClass={``}>
      <div className={styles.content}>
        {/* <div className={styles.title}>Rabbit score</div>
        <div className={styles.subtitle}>leaderboard</div> */}
        {/* <Image className={styles.title} src={"image/icon42.png"} /> */}
        <div className={styles.userS}>
          <div className={styles.item}>
            <Image className={styles.icon} src={"image/icon43.png"} />
            <div className={styles.text}>000</div>
            <div className={styles.text2}>EQC...0e</div>
          </div>
          <div className={styles.item}>
            <Image className={styles.icon} src={"image/icon62.png"} />
            <div className={styles.text}>000</div>
            <div className={styles.text2}>EQC...0e</div>
          </div>
          <div className={styles.item}>
            <Image className={styles.icon} src={"image/icon63.png"} />
            <div className={styles.text}>000</div>
            <div className={styles.text2}>EQC...0e</div>
          </div>
        </div>
        <div className={styles.time}>July 09 2024</div>
        <div className={styles.list}>
          {list.map((item, index) => (
            <div
              key={index}
              className={styles.item + " " + (item.active && styles.active)}
            >
              <div className={styles.index}>{index + 4}</div>
              <div className={styles.center}>
                <Image className={styles.icon} src={item.icon} />

                <div className={styles.name}>
                  {item.name}
                  {item.active && <div>{index + 4}th</div>}
                </div>
              </div>
              <div className={styles.text2}>{item.val}</div>
            </div>
          ))}
          <div className={styles.mask}></div>
        </div>
      </div>
    </Popup>
  );
};
export default Pop1;
