"use client";
import Popup from "components/Popup";
import styles from "./index.module.scss";
import Image from "components/Image";
import ListItem from "components/ListItem";
import Cell from "components/Cell";
import Swiper from "swiper";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.css";
const Pop1 = () => {
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
  const swiperList = [1, 2, 3];
  const [current, setCurrent] = useState(0);
  return (
    <>
      <Popup pageName="Pop4" closeClass={``}>
        <div className={styles.content}>
          <div className={styles.iconBox}>
            <Image
              className={styles.icon}
              src={"image/icon33.png"}
            />
          </div>
          {/* <div className={styles.title}>
                    earn
                </div> */}
          <Image
            className={styles.title}
            src={"image/icon34.png"}
          />
          <div className={styles.scrollView}>
            <div className={styles.cards}>
              <div className={styles.item}>
                <Image
                  className={styles.icon}
                  src={"image/icon36.png"}
                />
                <div className={styles.itemContent}>
                  <div className={styles.itemTitle}>lucky</div>
                  <div className={styles.itemText}>ticket</div>
                </div>
              </div>
              <div className={styles.item}>
                <Image
                  className={styles.icon}
                  src={"image/icon38.png"}
                />
                <div className={styles.itemContent}>
                  <div className={styles.itemTitle}>lucky</div>
                  <div className={styles.itemText}>ticket</div>
                </div>
              </div>
            </div>
            <Cell title="Partners">
              <div className={styles.grid}>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
                <div className={styles.item}></div>
              </div>
            </Cell>
            <Cell
              title="campaign"
              right={`${current + 1} / ${swiperList.length}`}
            >
              <div className={styles.swiper + " swiper"}>
                <div className="swiper-wrapper">
                  {swiperList.map((item, index) => (
                    <div key={index} className={styles.item + " swiper-slide"}>
                      Slide 1
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
      </Popup>
    </>
  );
};
export default Pop1;
