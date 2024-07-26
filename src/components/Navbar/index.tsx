import Image from "../Image";
import styles from "./index.module.scss";
import useStore from "@/stores/useStore";
const Navbar = ({ title }: any) => {
  const { setShowPage } = useStore();
  return (
    <div className={styles.navBar}>
      <div
        onClick={() => {
          setShowPage("Swap", false);
        }}
      >
        <Image src="image/icon123.png" />
      </div>
      {title}
    </div>
  );
};

export default Navbar;
