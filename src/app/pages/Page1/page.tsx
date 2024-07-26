"use client";

import styles from "./index.module.scss";
import GamePageLayout from "components/GamePageLayout";
import Image from "components/Image";
import Game from "./components/Game";
import Wallet from "components/Wallet";
const Page = () => {
  return (
    <GamePageLayout className={styles.page}>
      <div className={styles.content}>
        <Image className={styles.title} src={"image/icon82.png"} />
        <Game />
        <div className={styles.wallet}>
          <Wallet />
        </div>
      </div>
    </GamePageLayout>
  );
};
export default Page;
