import styles from '../../styles/search_results/Search_switches.module.css'

export default function Search_switches (props) {

    return (
        <div className = {styles["search-switches"]}>
            <div className = {`${styles["search-switch"]}`}>
                <span className = {styles["search-switch-text"]}>В виде списка</span>
            </div>
            <div className = {`${styles["search-switch"]}`}>
                <span className = {`${styles["search-switch-plus"]}`}>+</span>
                <span className = {styles["search-switch-text"]}>Список + Карта</span>
            </div>
            <div className = {`${styles["search-switch"]}`}>
                <span className = {styles["search-switch-text"]}>Отели на карте</span>
            </div>
        </div>
    )
}