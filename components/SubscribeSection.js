import MediaQuery from 'react-responsive'
import styles from "../styles/SubscribeSection.module.css"

const SubscribeSection = () => {

    return (
        <section className = {styles["subscribe-section"]}>
            <div className = {styles["subscribe-form-w"]}>
                <h2 className = {styles["section-subtitle"]}>Подпишитесь на лучшие предложения</h2>
                <form action="" name = "subscribe-form">
                    <div className = {styles["subscribe-form"]}>
                        <div className={styles["subscribe-form-inside"]}>
                            <input type="text" name = "get-subscribe" id = "get-subscribe" className = {styles["get-subscribe"]} placeholder = "Укажите свой Email" />
                            <div className = {styles["get-suscribe-btn"]}>
                                <button className = {styles["get-suscribe__submit"]}>
                                    <MediaQuery maxWidth={480}>
                                        {(matches) =>
                                            matches
                                              ? <span className={styles["icon-subscribe-inside"]}></span>
                                              : <span>Подписаться</span>
                                          }
                                    </MediaQuery>
                                </button>
                                <div className = "anim-blick__submit-bg">
                                    <div className ="anim-blick__submit-obj"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "subscribe-agree">
                        <input type="checkbox" id="subscribe-checkbox-1" className = "substylized" defaultChecked /> <label htmlFor="subscribe-checkbox-1">
                        Хочу получать акции и спецпредложения для своих путешествий</label>
                    </div>
                </form>
            </div>
            <div className = {styles["subscribe-social"]}>
                <h2 className = {styles["section-subtitle"]}>Подпишитесь на наши соцсети</h2>
                <div className = {styles["subscribe-social-block"]}>
                    <a className = {styles["social-tg-rus"]}>Лучшие отели России</a>
                    <a className = {styles["social-tg-pdmsk"]}>Лучшие отели Подмосковья</a>
                    <a className = {styles["social-vk"]}>Все о качественном и доступном&nbsp;отдыхе&nbsp;в&nbsp;Подмосковье</a>
                </div>
            </div>
        </section>
    )
}

export default SubscribeSection