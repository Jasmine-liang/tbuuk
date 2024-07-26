"use client";
import Popup2 from "components/Popup2";
import styles from "./index.module.scss";
import Image from "components/Image";
import ListItem from "components/ListItem";
import Cell from "components/Cell";
import Swiper from "swiper";
import useStore from "@/stores/useStore";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
const Pop1 = () => {
  const { balance, setBalance, setShowPage } = useStore();
  const swiperList = [1, 2, 3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    var mySwiper = new Swiper(`.${styles.swiper}`, {
      // loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
      on: {
        slideChange: function (swiper) {
          setCurrent(swiper.activeIndex as number);
        },
      },
    });
  }, []);
  return (
    <>
      <Popup2 pageName="Pop4" closeClass={``}>
        <div className={styles.iconBox}></div>
        <div className={styles.content}>
          <Image className={styles.title} src={"image/icon34.png"} />
          <div className={styles.scrollView}>
            <div className={styles.cards}>
              <div
                onClick={() => {
                  setShowPage("Swap", true);
                }}
              >
                <Image src="image/icon103.png" />
              </div>
              <div
                onClick={() => {
                  setShowPage("Swap", true);
                }}
              >
                <Image src="image/icon104.png" />
              </div>
            </div>
            <Cell title="Partners">
              <div className={styles.grid}>
                <div className={styles.item}>
                  <Image src="image/icon108.png" />
                </div>
                <div className={styles.item}>
                  <Image src="image/icon110.png" />
                </div>
                <div className={styles.item}>
                  <Image src="image/icon111.png" />
                </div>
                <div className={styles.item}>
                  <Image src="image/icon112.png" />
                </div>
                <div className={styles.item}>
                  <Image src="image/icon113.png" />
                </div>
                <div className={styles.item}>
                  <Image src="image/icon114.png" />
                </div>
                <div className={styles.item}>
                  <Image src="image/icon115.png" />
                </div>
                <div className={styles.item}>
                  <Image src="image/icon117.png" />
                </div>
                <div className={styles.item}>
                  <Image src="image/icon118.png" />
                </div>
                <div className={styles.item}>
                  <Image src="image/icon119.png" />
                </div>
              </div>
            </Cell>
            <Cell title="campaign">
              <div className={styles.swiper + " swiper"}>
                <div className="swiper-wrapper">
                  {swiperList.map((item, index) => (
                    <div key={index} className={styles.item + " swiper-slide"}>
                      <Image src="image/icon106.png" />
                    </div>
                  ))}
                </div>
                <div className={styles.dot}>
                  {swiperList.map((item, index) => (
                    <div
                      key={index}
                      className={`${styles.dotItem} ${current === index ? styles.active : ""}`}
                    ></div>
                  ))}
                </div>
              </div>
            </Cell>
            <Cell title="Activity Rules  &  Reward Rules">
              <div className={styles.rules}>
                <p>
                  <span>xxxxxxxxx.</span>
                </p>
                <p>
                  <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</span>
                </p>
                <p>
                  <span>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.</span>
                </p>
                <p>
                  <span>xxxxxxxxx.</span>
                </p>
                <p>
                  <span>xxxxxxxxxxxxxxxxxxxxxx.</span>
                </p>
              </div>
            </Cell>
          </div>
        </div>
      </Popup2>
    </>
  );
};
export default Pop1;
