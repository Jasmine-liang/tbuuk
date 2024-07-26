"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import Image from "components/Image";
import Blockies from "react-blockies";
import useStore from "@/stores/useStore";
import useRemScale from "@/hooks/useRemScale";
import { formatAddress } from "@/utils/index";
import {
  useTonConnectModal,
  useTonAddress,
  useTonWallet,
} from "@tonconnect/ui-react";
const Wallet = () => {
  const scale = useRemScale();
  const wallet = useTonWallet();
  const userFriendlyAddress = useTonAddress();
  const { setShowPage, showPage } = useStore();
  const { state, open, close }: any = useTonConnectModal();

  return (
    <div className={styles.Wallet}>
      <div className={`${styles.item} ${styles.left}`} onClick={open}>
        {wallet ? (
          <div className={styles.blockies}>
            <Blockies
              seed={String(userFriendlyAddress).toLowerCase()}
              size={32}
              scale={scale}
            />
          </div>
        ) : (
          <Image src={"image/icon15.png"} />
        )}
        <div className={styles.text}>
          {wallet ? formatAddress(userFriendlyAddress) : "Connect"}
        </div>
      </div>
      <div className={styles.right}>
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
        {/* <Link href="/pages/Page2" className={styles.item}>
          <Image src={"image/icon19.png"} />
          <div className={styles.text}>Roll</div>
        </Link> */}
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
    </div>
  );
};

export default Wallet;
