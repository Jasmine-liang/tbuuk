"use client";

import useStore from "@/stores/useStore";
import Image from "../Image";
import styles from "./index.module.scss";
const Trophy = () => {
  const { setShowPage } = useStore();
  return (
    <div
      className={styles.Trophy}
      onClick={() => {
        setShowPage("Pop5", true);
      }}
    >
      <Image className={styles.btn} src={"image/icon81.png"} />
    </div>
  );
};
export default Trophy;
