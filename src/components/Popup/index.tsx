import Image from "../Image";
import styles from "./index.module.scss";
import useStore from "@/stores/useStore";
const Popup = ({
  pageName,
  closeClass,
  bgClass,
  children,
  type,
}: {
  pageName: string;
  closeClass?: string;
  bgClass?: string;
  children: any;
  type?: 1 | 2;
}) => {
  const { setShowPage } = useStore();
  return (
    <div className={`${styles.Popup} ${styles["type" + type]}`}>
      <div className={styles.content}>
        <Image
          onClick={() => {
            setShowPage(pageName, false);
          }}
          src={"image/icon92.png"}
          className={styles.close + " " + closeClass}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
