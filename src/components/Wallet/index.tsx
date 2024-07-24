"use client";

import useStore from "@/stores/useStore";
import styles from "./index.module.scss";
import Image from "components/Image";
import {  TonConnectButton, TonConnectUIProvider, useTonAddress, useTonWallet } from "@tonconnect/ui-react";
const Wallet = () => {

  const wallet = useTonWallet();
  const userFriendlyAddress = useTonAddress();


  const { setShowPage,showPage } = useStore();
  return (

    <div className={styles.Wallet}>
      <div className={styles.item}>
        <div className={styles.connect}>
          <TonConnectButton /> 
        </div>
        <div className={styles.show}>
          <Image src={showPage["Page2"]?"image/icon79.png":"image/icon15.png"} />
        {/* <div className={styles.text}>{showPage["Page2"]?"EQC...0e":"Connect wallet"}</div> */}
        {!wallet ? 
      <div className={styles.text}>{showPage["Page2"]?"EQC...0e":"Connect wallet"}</div>
        : userFriendlyAddress}
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
