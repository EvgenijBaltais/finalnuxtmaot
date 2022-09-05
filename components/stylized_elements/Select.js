
import styles from "../../styles/stylized_elements/Select.module.css"

export default function Select (props) {


    return (

        <div className={styles["s-select-w"]}>
            <div className={styles["s-select"]}>
                <a className={styles["s-select-title"]}>По цене</a>
                <div className={styles["s-select-item"]}></div>
                <div className={styles["s-select-item"]}></div>
                <div className={styles["s-select-item"]}></div>
            </div>
        </div>
    )
}