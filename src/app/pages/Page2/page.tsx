"use client";

import styles from "./index.module.scss";
import GamePageLayout from "components/GamePageLayout";
import Image from "components/Image";
import Game from "./components/Game";
import Wallet from "components/Wallet";
import Popup from "@/components/Popup";
const Page = () => {
  return (
    <Popup pageName="Page2">
      <GamePageLayout className={styles.page}>
        <div className={styles.content}>
          <Image
            className={styles.title}
            src={"image/icon54.png"}
          />
          <Game />
          <div className={styles.wallet}>
            <Wallet />
          </div>
        </div>
      </GamePageLayout>
    </Popup>
  );
};
export default Page;
