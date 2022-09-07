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
    const [nights, setNights] = useState(0)
    const router = useRouter()
    const { query } = useRouter()


    const [sliderMin, setSliderMin] = useState(0)
    const [sliderMax, setSliderMax] = useState(0)

    useEffect(() => {

            if (!router.isReady) return

            setLoading(true)

            let [dayIn, monthIn, yearIn] = query.datein.split('.')
            let [dayOut, monthOut, yearOut] = query.dateout.split('.')
            let dateIn = yearIn + '-' + monthIn + '-' + dayIn
            let dateOut = yearOut + '-' + monthOut + '-' + dayOut
            let link = ''

            // Определить сколько всего ночей было выбрано
            setNights(calculateNights(dateIn, dateOut))

            query.region_id ? link = 'https://maot-api.bokn.ru/api/regions/search?'
                        : link = 'https://maot-api.bokn.ru/api/hotels/search?'

            query.region_id ? link += '&id=' + query.region_id
                        : link += '&id=' + query.hotel_id

            link += '&start_date=' + dateIn
            link += '&end_date=' + dateOut
            link += '&adults=' + query.adults
            

            if (query.children_ages) {
                for (let i = 0; i < query.children_ages.length; i++) {
                    link += '&children_ages=' + query.children_ages[i]
                }
            }

            console.log(link)

           fetch(link)
                    .then((res) => res.json())
                    .then((res) => {
                        setLoadedItems(res.data)
                
                // определить минимум и максимум цен
                let min = 0
                let max = 0
                let nights = calculateNights(dateIn, dateOut)

                for (let i = 0; i < res.data.length; i++) {
                    if (max < Math.round(parseInt(res.data[i].daily_price))) max = Math.round(parseInt(res.data[i].daily_price))
                }
                for (let i = 0; i < res.data.length; i++) {
                    if (max > Math.round(parseInt(res.data[i].daily_price))) min = Math.round(parseInt(res.data[i].daily_price))
                }

                min *= nights
                max *= nights

                setSliderMin(min)
                setSliderMax(max)
                setLoading(false)
          })

    }, [router.isReady])


    // Функция для определения количества ночей для дат в формате гг-мм.дд

    function calculateNights (datein, dateout) {
        let begin_date = new Date(datein)
        let end_date = new Date(dateout)
        return (end_date - begin_date) / (1000 * 60 * 60 * 24)
    }


    // Слайдер


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
                                setNights = {setNights}
                                setLoadedItems = {setLoadedItems}
                                setLoading = {setLoading}
                                setSliderMin = {setSliderMin}
                                setSliderMax = {setSliderMax}
                                popularHotels = {props.popularHotels.data}
                                popularWays = {props.popularWays.data}
                            />
                        </div>

                        <div className = "aside-slider">
                            <div className="slider-values">
                                <div className="aside-slider-val aside-slider-left">
                                    {sliderMin != 0 ?
                                        <input type="text" defaultValue = {'от ' + sliderMin + ' ₽'} onChange = {value => setSliderMin(value)} className="aside-slider-input aside-slider-from" />
                                    : ''}
                                    </div>
                                <div className="aside-slider-val aside-slider-right">
                                    {sliderMax != 0 ?
                                        <input type="text" defaultValue = {'до ' + sliderMax + ' ₽'} onChange = {value => setSliderMax(value)} className="aside-slider-input aside-slider-to" />
                                    : ''}
                                </div>
                            </div>
                            {sliderMax != 0 ?
                                <Slider
                                step = {100}
                                    range
                                    defaultValue={[sliderMin, sliderMax]}
                                    min={0}
                                    max={(sliderMax + 10000)}
                                    onChange={value => renewValues(value)}
                                /> : ''
                            }
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

                    {
                        loadedItems.length ? (loadedItems.map((item, index) => {
                            return (
                                <Search_hotel_item key = {index} item = {item} nights = {nights} />
                            )
                        })) : ''
                    }

                    {!isLoading && !loadedItems.length ? 'Результатов нет' : ''}

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