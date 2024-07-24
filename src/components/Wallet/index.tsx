"use client";

import styles from "./index.module.scss";
import Image from "components/Image";
import Blockies from "react-blockies";
import useStore from "@/stores/useStore";
import useRemScale from "@/hooks/useRemScale";
import { formatAddress } from "@/utils/index"
import { TonConnectButton, TonConnectUIProvider, useTonAddress, useTonWallet } from "@tonconnect/ui-react";
const Wallet = () => {

  const scale = useRemScale();
  const wallet = useTonWallet();
  const userFriendlyAddress = useTonAddress();
  const { setShowPage, showPage } = useStore();


  return (

    <div className={styles.Wallet}>
      <div className={styles.item}>
        <div className={styles.connect}>
          <TonConnectButton />
        </div>
        <div className={styles.show}>
          {wallet ? <div className={styles.blockies}>
            <Blockies
            seed={String(userFriendlyAddress).toLowerCase()}
            size={32}
            scale={scale}
          />
          </div> : <Image src={"image/icon15.png"} />}
          <div className={styles.text}>{wallet ? formatAddress(userFriendlyAddress) : "Connect wallet"}</div>
        </div>
      </div>
      <div
        className={styles.item}
        onClick={() => {
          setShowPage("Pop1", true);
        }}
      >
        <Image src={"image/icon16.png"} />
        <div className={styles.text}>Frens</div>
      </div>
      <div
        className={styles.item}
        onClick={() => {
          setShowPage("Pop3", true);
        }}
      >
        <Image src={"image/icon17.png"} />
        <div className={styles.text}>Earn</div>
      </div>
      <div
        className={styles.item}
        onClick={() => {
          setShowPage("Pop2", true);
        }}
      >
        <Image src={"image/icon18.png"} />
        <div className={styles.text}>Boosts</div>
      </div>
      <div
        className={styles.item}
        onClick={() => {
          setShowPage("Page2", true);
        }}
      >
        <Image src={"image/icon19.png"} />
        <div className={styles.text}>Roll</div>
      </div>
    </div>

  );
};

export default Wallet;
