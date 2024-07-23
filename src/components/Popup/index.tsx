import Image from "../Image";
import styles from "./index.module.scss";
import useStore from "@/stores/useStore";
const Popup = ({
  pageName,
  closeClass,
  bgClass,
  children,
}: {
  pageName: string;
  closeClass?: string;
  bgClass?: string;
  children: any;
}) => {
  const { setShowPage } = useStore();
  return (
    <div className={styles.Popup}>
      <div className={styles.content}>
        <Image
          onClick={() => {
            setShowPage(pageName, false);
          }}
          src={"image/icon20.png"}
          className={styles.close + " " + closeClass}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
