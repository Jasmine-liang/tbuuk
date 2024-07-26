import styles from "./index.module.scss";
import Image from "../Image";
import useStore from "@/stores/useStore";
const Popup2 = (data: any) => {
  const { setShowPage } = useStore();
  return (
    <>
      <div className={styles.layer}></div>
      <div className={styles.popup}>
        <div className={styles.layer1}>
          <Image
            onClick={() => {
              setShowPage(data.pageName, false);
            }}
            className={styles.closeBtn}
            src="image/icon137.png"
          />
        </div>
        <div className={styles.layer2}></div>
        <div className={styles.layer3}>{data.children}</div>
      </div>
    </>
  );
};

export default Popup2;
