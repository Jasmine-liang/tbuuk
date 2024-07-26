"use client";

import Popup2 from "components/Popup2";
import styles from "./index.module.scss";
import Image from "components/Image";
import ListItem from "components/ListItem";
import Cell from "components/Cell";
import useStore from "@/stores/useStore";
const Pop6 = () => {
  const { setShowPage } = useStore();
  return (
    <Popup2 pageName="Pop6" closeClass={styles.close}>
      <Image className={styles.userIcon} src={"image/icon120.png"} />
      <Image className={styles.bg} src="image/icon163.png" />
      <div className={styles.content}>
        {/* <div className={styles.starBox}>
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
          <Image
            className={styles.star}
            src={"image/icon14.png"}
          />
          <Image
            className={styles.star}
            src={"image/icon14.png"}
          />
        </div> */}

        <div className={styles.more}>
          WISE Score
          <Image className={styles.moreIcon} src={"image/icon53.png"} />
        </div>
        <div className={styles.title}>EQC_yT3...K1L0e</div>
        <div className={styles.links}>
          <Image className={styles.itemIcon} src={"image/icon48.png"} />
          <Image className={styles.itemIcon} src={"image/icon49.png"} />
          <Image className={styles.itemIcon} src={"image/icon50.png"} />
          <Image className={styles.itemIcon} src={"image/icon51.png"} />
        </div>
        <div className={styles.bottom}>
          <div className={styles.card}>
            <div className={styles.item}>
              <div className={styles.left}>
                <div className={styles.r1}></div>
                <div className={styles.text1}>TPoints</div>
              </div>
              <div className={styles.text2}>6,800</div>
            </div>
            <div className={styles.item}>
              <div className={styles.left}>
                <div className={styles.r1}></div>
                <div className={styles.text1}>1 scratch cards</div>
              </div>
              <div className={styles.r2}></div>
            </div>
          </div>
          <Image
            onClick={() => {
              setShowPage("pop6", false);
            }}
            src={"image/icon122.png"}
            className={styles.btn}
          />
        </div>
      </div>
    </Popup2>
  );
};
export default Pop6;
