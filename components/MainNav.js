import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import Image from 'next/image'
import Logo from '/public/images/logo-maot.svg'
import styles from '../styles/MainNav.module.css'

const MainNav = () => {

    const router = useRouter()

    const [visibleMenu, setVisibleMenu] = useState(0)

    const navLinks = [
        { title: 'Лучшие направления', path: '/routes' },
        //{ title: 'Статьи', path: '/articles' },
        { title: 'Способы оплаты', path: '/payment' },
        { title: 'Контакты', path: '/contact' },
        { title: 'Избранное', path: '/hotels' }
    ]
    
    const rootEl = useRef(null)

    function WindowOutClick() {
        useEffect(() => {

          const onClick = e => rootEl.current.contains(e.target) || setVisibleMenu(false)
          document.addEventListener('click', onClick)
          document.body.classList.toggle('bg-fixed', visibleMenu);
          return () => document.removeEventListener('click', onClick)
        }, [visibleMenu])
    }
 
    WindowOutClick()


    useEffect(() => {
        const handleRouteChange = (url) => {
          setVisibleMenu(0)
        }
    
        router.events.on('routeChangeStart', handleRouteChange)
    
        return () => {
          router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
        <header className = {`${styles["header"]} header`} >
        
            <div className =  {visibleMenu ? "hh-bg hhbg-fix" : "hh-bg "}></div>

            <div className={styles["main-logo"]}>
                <Link href = "/" activeClassName="active">
                    <a>
                        <Image className={styles["main-logo-img"]} src={Logo} alt="Компания Магазин отдыха"/>
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
                <div className = {`${styles["top-phone-w"]} ${styles["top-phone-corp"]}`}>
                    <a href="tel:+74956624928" className = {`${styles["top-phone"]} ${styles["top-corp"]}`}>+7 495 662 49 28</a>
                    <p className = {styles["top-phone-info"]}>Корпоративный отдел</p>
                </div>

                <div className = {visibleMenu ? "mob-menu mob-menu-active" : " mob-menu"} ref={rootEl}>
                    <div className= "mob-burger" onClick = {() => setVisibleMenu(visibleMenu => !visibleMenu)}>
                        <span></span>
                        <span></span>
                        МЕНЮ
                    </div>

                    {visibleMenu ? 
                    <div className = "mob-bg">
                    
                        <div className = {styles["top-phone-mob"]}>
                            <a href="tel:+74956486711" className = {`${styles["top-phone"]} ${styles["top-chast"]}`}>+7 495 648 67 11</a>
                            <p className = {styles["top-phone-info"]}>Для частных лиц</p>
                        </div>

                        <nav className = "main-nav-mob" >
                            <ul className = {styles["nav-list-mob"]}>
                                {navLinks.map((item, index) => {
                                    return (
                                        <li className = {styles["nav-item"]} key = {index}>
                                            <Link href = {`${item.path}`}>
                                                <a
                                                    className = {`${styles["nav-link"]} ${styles[router.pathname == `${item.path}` ? "active" : ""]}`}>{item.title}</a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>

                        <div className = {styles["mob-decor-line"]}></div>

                        <div className = {styles["mob-social"]}>
                            <b>Соц. сети</b>
                            <div className={styles["mob-s-w"]}>
                                <a className = {styles["mob-social-tg-rus"]}>Лучшие отели России</a>
                                <a className = {styles["mob-social-tg-pdmsk"]}>Лучшие отели Подмосковья</a>
                                <a className = {styles["mob-social-vk"]}>Все о качественном и доступном отдыхе в&nbsp;Подмосковье</a>
                            </div>
                        </div>
                    </div>: ''
                }
                </div>
            </div>

        </header>
    )
}

export default MainNav