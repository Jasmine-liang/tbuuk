import Image from "../Image"
import styles from "./index.module.scss"
const Navbar = ({title}:any) => {


    return <>
        <div className={styles.navBar}>
            <Image src="image/icon123.png"/>
            {title}
        </div>
    </>
}

export default Navbar