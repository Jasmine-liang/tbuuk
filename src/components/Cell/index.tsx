import styles from "./index.module.scss"
const Cell = ({title,right,children}:any) => {


    return <>
        <div className={styles.Cell}>
            <div className={styles.title}>{title} <span>{right}</span></div>
            {children}
        </div>
    </>
}

export default Cell