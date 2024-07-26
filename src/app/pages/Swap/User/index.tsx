import styles from "./index.module.scss"
import Image from "components/Image"
const User = () =>{


    return <>
        <div className={styles.user}>
            <div className={styles.userIcon}>
                <Image src="image/icon134.png"/>
            </div>
            <div className={styles.right}>
                <div className={styles.val}><span>2800</span> points</div>
                <div className={styles.lab}>USDT / Rabbit Points</div>
            </div>
        </div>
    </>
}

export default User