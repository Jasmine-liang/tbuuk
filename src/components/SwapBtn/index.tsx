import styles from "./index.module.scss"
const Btn = ({text,...arg}:any) =>{


    return <>
        <div {...arg} className={styles.btn}>
            {text}
        </div>
    
    </>
}

export default Btn