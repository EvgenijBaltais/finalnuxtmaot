import styles from '../styles/MainNav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../assets/images/logo-maot.svg'

const MainNav = () => {

    return (
        <header className = {styles["header"]}>
            <div className={styles["main-logo"]}>
                <Link href = "/">
                    <a>
                        <Image src={Logo} alt="Компания Магазин отдыха"/>
                    </a>
                </Link>
            </div>
            <nav className = {styles["main-nav"]}>
                <ul className = {styles["nav-list"]}>
                    <li className = {styles["nav-item"]}>
                        <Link href="/routes">
                            <a className = {styles["nav-link"]}>Лучшие направления</a>
                        </Link>
                    </li>
                    <li className = {styles["nav-item"]}>
                        <Link href="/articles">
                            <a className = {styles["nav-link"]}>Статьи</a>
                        </Link>
                    </li>
                    <li className = {styles["nav-item"]}>
                        <Link href="/payment">
                            <a className = {styles["nav-link"]}>Способы оплаты</a>
                        </Link>
                    </li>
                    <li className = {styles["nav-item"]}>
                        <Link href="/contact">
                            <a className = {styles["nav-link"]}>Контакты</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles["phones"]}>
                <div className = {styles["top-phone-w"]}>
                    <a href="tel:+74956486711" className = {`${styles["top-phone"]} ${styles["top-chast"]}`}>+7 495 648 67 11</a>
                    <p className = {styles["top-phone-info"]}>Для частных лиц</p>
                </div>
                <div className = {styles["top-phone-w"]}>
                    <a href="tel:+74956624928" className = {`${styles["top-phone"]} ${styles["top-corp"]}`}>+7 495 662 49 28</a>
                    <p className = {styles["top-phone-info"]}>Корпоративный отдел</p>
                </div>
            </div>
        </header>
    )
}

export default MainNav