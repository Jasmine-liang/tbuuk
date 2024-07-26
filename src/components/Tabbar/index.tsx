import styles from "./index.module.scss"
import Image from "components/Image"
const Tabbar = () => {


    return <>
    <div className={styles.place}>

    </div>
        <div className={styles.tabbar}>
            <Image className={styles.item} src="image/icon129.png"/>
            <Image className={styles.item} src="image/icon130.png"/>
            <Image className={styles.item} src="image/icon131.png"/>
            <Image className={styles.item} src="image/icon132.png"/>
        </div>
    </>
}

export default Tabbar