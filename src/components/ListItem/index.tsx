import Image from "../Image"
import styles from "./index.module.scss"
const ListItem = ({ children, showIcon = false, iconStart = false, name = "", label = "", icon = "" }: any) => {



    return <>
        <div className={styles.ListItem}>
            <Image className={styles.Icon} src={icon} />
            <div className={styles.content}>
                <div className={styles.name}>
                    {name}
                </div>
                <div className={styles.bottom}>
                    {
                        iconStart ? <div className={styles.bottomIcon}></div> : null
                    }
                    <div className={styles.label}>
                        {label}
                    </div>
                    {
                        showIcon ? <div className={styles.bottomIcon}></div> : null
                    }

                    {children}
                </div>
            </div>
        </div>
    </>
}

export default ListItem