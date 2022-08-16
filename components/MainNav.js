import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import Image from 'next/image'
import Logo from '/public/images/logo-maot.png'
import styles from '../styles/MainNav.module.css'

const MainNav = () => {

    const router = useRouter()

    const navLinks = [
        { title: 'Лучшие направления', path: '/routes' },
        { title: 'Статьи', path: '/articles' },
        { title: 'Способы оплаты', path: '/payment' },
        { title: 'Контакты', path: '/contact' }
    ]
    
    return (
        <header className = {styles["header"]}>
            <div className={styles["main-logo"]}>
                <Link href = "/" activeClassName="active">
                    <a>
                        <Image src={Logo} alt="Компания Магазин отдыха"/>
                    </a>
                </Link>
            </div>
            <nav className = {styles["main-nav"]}>
                <ul className = {styles["nav-list"]}>
                    {navLinks.map((item, index) => {
                        return (
                            <li className = {styles["nav-item"]} key = {index}>
                                <Link href = {`${item.path}`}>
                                    <a className = {`${styles["nav-link"]} ${styles[router.pathname == `${item.path}` ? "active" : ""]}`}>{item.title}</a>
                                </Link>
                            </li>
                        )
                    })}
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