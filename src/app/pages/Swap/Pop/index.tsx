import Popup2 from "@/components/Popup2"
import styles from "./index.module.scss"
import User from "../User"
import Image from "components/Image"
const Pop = () => {


    return <>
        <Popup2>
            <div className={styles.pop}>
                <div className={styles.title}>
                    You get
                </div>
                <div className={styles.userBox}>
                    <User />
                </div>
                <div className={styles.bottom}>
                    <Image className={styles.btn} src="image/icon133.png" alt="button"/>
                    <Image className={styles.btn} src="image/icon135.png" alt="button"/>
                </div>
            </div>
        </Popup2>
    </>
}


export default Pop