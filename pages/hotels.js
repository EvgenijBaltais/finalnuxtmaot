import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'
import AsideMainForm from "../components/AsideMainForm"

import Search_hotel_item from "../components/search_results/Search_hotel_item"
import styles from "../styles/search_results/Search_results.module.css"

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';


export default function Hotels (props) {

    const [loadedItems, setLoadedItems] = useState([])
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    const { query } = useRouter()

    console.log(router)


    useEffect(() => {

            if (!router.isReady) return

            setLoading(true)

            let [dayIn, monthIn, yearIn] = query.datein.split('.')
            let [dayOut, monthOut, yearOut] = query.dateout.split('.')
            let dateIn = yearIn + '-' + monthIn + '-' + dayIn
            let dateOut = yearOut + '-' + monthOut + '-' + dayOut
            let link = ''

            query.hotel ? link = 'https://maot-api.bokn.ru/api/hotels/search?'
                        : link = 'https://maot-api.bokn.ru/api/regions/search?'

            link += 'start_date=' + dateIn
            link += '&end_date=' + dateOut
            link += '&adults=' + query.adults
            link += '&id=' + query.hotel_id
            

            if (query.children_ages) {
                for (let i = 0; i < query.children_ages.length; i++) {
                    link += '&children_ages=' + query.children_ages[i]
                }
            }

            /* Костыль, потом удалить */

            link = 'https://maot-api.bokn.ru/api/regions/search?start_date=2022-09-20&end_date=2022-09-25&adults=2&childs[0]=2&id=965821422'

            /* Костыль, потом удалить. конец */
  
          /* console.log(link ) */

           fetch(link)
                    .then((res) => res.json())
                    .then((res) => {
                        setLoadedItems(res.data)
                setLoading(false)
          })

    }, [router.isReady])

    //console.log(loadedItems)


    // Слайдер

    const [sliderMin, setSliderMin] = useState(5000)
    const [sliderMax, setSliderMax] = useState(8000)


    let from = ''
    let to = ''

    const renewValues = value => {

        from.value = 'от ' + value[0] + ' ₽'
        to.value = 'до ' + value[1] + ' ₽'
    }

    useEffect(() => {

        from = document.querySelector('.aside-slider-from')
        to = document.querySelector('.aside-slider-to')
    })

    //console.log(query)

    return (
        <>
        <Head>
            <title>Результаты поиска</title>
        </Head>

        <section className = {styles["search-result-title"]}>
                Результаты поиска
            </section>

            <section className = {styles["search-result-w"]}>
                <div className = {styles["search-result-left"]}>
                    <div className = {styles["search-result-left-w"]}>
                        <div className = {`${styles["aside-block"]} ${styles["direction-aside-form"]}`}>
                            <h3 className = "aside-block-title">Направление</h3>
                            <AsideMainForm
                                popularHotels = {props.popularHotels.data}
                                popularWays = {props.popularWays.data}
                            />
                        </div>

                        <div className = "aside-slider">
                                <div className="slider-values">
                                    <div className="aside-slider-val aside-slider-left">
                                        <input type="text" defaultValue = {'от ' + sliderMin + ' ₽'} onChange = {value => setSliderMin(value)} className="aside-slider-input aside-slider-from" />
                                    </div>
                                    <div className="aside-slider-val aside-slider-right">
                                        <input type="text" defaultValue = {'до ' + sliderMax + ' ₽'} onChange = {value => setSliderMax(value)} className="aside-slider-input aside-slider-to" />
                                    </div>
                                </div>
                            <Slider
                                range
                                defaultValue={[sliderMin, sliderMax]}
                                min={0}
                                max={20000}
                                onChange={value => renewValues(value)}
                            />
                        </div>

                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Типы питания</h3>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-11" className = "stylized" /> <label htmlFor="checkbox-11">Завтрак</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-12" className = "stylized" /> <label htmlFor="checkbox-12">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-13" className = "stylized" /> <label htmlFor="checkbox-13">Полный пансион</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-14" className = "stylized" /> <label htmlFor="checkbox-14">Все включено</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-15" className = "stylized" /> <label htmlFor="checkbox-15">Частичный All inclusive</label>
                            </div>
                        </div>
                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Звездность</h3>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-21" className = "stylized" />
                                <label className = {styles["aside-stars-label"]} htmlFor="checkbox-21">
                                    <ul className = {styles["aside-stars-list"]}>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-grey"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-grey"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-grey"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-grey"]}`}></li>
                                    </ul>
                                </label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-22" className = "stylized" />
                                <label className = {styles["aside-stars-label"]} htmlFor="checkbox-22">
                                    <ul className = {styles["aside-stars-list"]}>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-grey"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-grey"]}`}></li>
                                    </ul>
                                </label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-23" className = "stylized" />
                                <label className = {styles["aside-stars-label"]} htmlFor="checkbox-23">
                                    <ul className = {styles["aside-stars-list"]}>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-grey"]}`}></li>
                                    </ul>
                                </label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-24" className = "stylized" />
                                <label className = {styles["aside-stars-label"]} htmlFor="checkbox-24">
                                    <ul className = {styles["aside-stars-list"]}>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                        <li className = {`${styles["aside-stars-item"]} ${styles["aside-stars-item-gold"]}`}></li>
                                    </ul>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {styles["search-result-right"]}>
                    
                    {isLoading ? 'Загрузка подходящих вариантов...' : ''}

                    {loadedItems.map((item, index) => {
                        return (
                            <Search_hotel_item key = {index} item = {item} />
                        )
                    })}

                </div>
            </section>
        </>
    )
}


export async function getStaticProps(context) {

    // Популярные отели

	const getHotels = await fetch('https://maot-api.bokn.ru/api/hotels/top')
	const popularHotels = await getHotels.json()

    // Популярные направления

	const getWays = await fetch('https://maot-api.bokn.ru/api/regions/top')
	const popularWays = await getWays.json()

    return {
        props: {
            popularHotels,
            popularWays
        },
    }
}