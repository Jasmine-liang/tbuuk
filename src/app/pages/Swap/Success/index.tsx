import Image from "@/components/Image"
import SwapBtn from "@/components/SwapBtn"
import styles from "./index.module.scss"
import User from "../User"
const Success = () => {


    return <>
        <div className={styles.Success}>
            <Image className={styles.icon} src="image/icon136.png" />
            <div className={styles.title}>
                Swap in progress
            </div>
            <div className={styles.text}>
                Your transaction has been sent to the
                network and will be processed
                in a few seconds
            </div>
            <div className={styles.userBox}>
                <User />
            </div>
            <div className={styles.btnBox}>
                <SwapBtn text="done" />
            </div>
        </div>
    </>
}

export default Success