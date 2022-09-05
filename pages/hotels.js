/*const add = {
    "type": "FeatureCollection",
    "features": [
        {"type": "Feature", "id": 0, "geometry": {"type": "Point", "coordinates": [55.831903, 37.411961]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
        {"type": "Feature", "id": 1, "geometry": {"type": "Point", "coordinates": [55.763338, 37.565466]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
        {"type": "Feature", "id": 2, "geometry": {"type": "Point", "coordinates": [55.763338, 37.565466]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
        {"type": "Feature", "id": 3, "geometry": {"type": "Point", "coordinates": [55.744522, 37.616378]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
        {"type": "Feature", "id": 4, "geometry": {"type": "Point", "coordinates": [55.780898, 37.642889]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
        {"type": "Feature", "id": 5, "geometry": {"type": "Point", "coordinates": [55.793559, 37.435983]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},
        {"type": "Feature", "id": 6, "geometry": {"type": "Point", "coordinates": [55.800584, 37.675638]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}},        {"type": "Feature", "id": 49, "geometry": {"type": "Point", "coordinates": [55.858585, 37.48498]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", "hintContent": "<strong>Текст  <s>подсказки</s></strong>"}}
    ]
}*/

import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'

//import Search_switches from "../components/search_results/Search_switches"
import Search_hotel_item from "../components/search_results/Search_hotel_item"
//import Select from "../components/stylized_elements/Select"
import styles from "../styles/search_results/Search_results.module.css"

import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

/*

   // Для карты для добавления позже
const loadScript = (src, onLoad) => {
    const script = document.createElement("script")
  
    script.src = src
    script.async = true
    document.body.appendChild(script)
    script.onload = onLoad
  }
  
  const init = () => {
    const myMap = new window.ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    }),
    
    objectManager = new window.ymaps.ObjectManager({
        // Чтобы метки начали кластеризоваться, выставляем опцию.
        clusterize: true,
        // ObjectManager принимает те же опции, что и кластеризатор.
        gridSize: 32,
        clusterDisableClickZoom: true
    });


    objectManager.objects.options.set('preset', 'islands#greenDotIcon')
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons')
    myMap.geoObjects.add(objectManager)

    objectManager.add(add);

  }*/

export default function Hotels (props) {

    const [loadedItems, setLoadedItems] = useState([])
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    const { query } = useRouter()


        /*React.useEffect(() => {
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU", () => {
            window.ymaps.ready(init)
          })
        }, [])*/

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
  
           console.log(link )

           fetch(link)
                    .then((res) => res.json())
                    .then((data) => {console.log(data)
                        setLoadedItems(data)
                setLoading(false)
          })

          //https://maot-api.bokn.ru/api/hotels/search?start_date=2022-09-20&end_date=2022-09-25&adults=2&childs[0]=2&id=zolotoy_sazan_

          //https://maot-api.bokn.ru/api/regions/search?start_date=2022-09-20&end_date=2022-09-25&adults=2&childs[0]=2&id=965821422

    }, [router.isReady])


    // Слайдер

    const [sliderMin, setSliderMin] = useState(0)
    const [sliderMax, setSliderMax] = useState(8000)


    let from = ''
    let to = ''
    let min = 0, max = 20000

    const renewValues = value => {

        from.value = value[0]
        to.value = value[1]
    }

    useEffect(() => {

        from = document.querySelector('.aside-slider-from')
        to = document.querySelector('.aside-slider-to')
    },)

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


                            
                        </div>


                        <div className = "aside-slider">
                                <div className="slider-values">
                                    <div className="aside-slider-val aside-slider-left">
                                        <input type="text" defaultValue = {sliderMin} onChange = {value => setSliderMin(value)} className="aside-slider-input aside-slider-from" />
                                    </div>
                                    <div className="aside-slider-val aside-slider-right">
                                        <input type="text" defaultValue = {sliderMax} onChange = {value => setSliderMax(value)} className="aside-slider-input aside-slider-to" />
                                    </div>
                                </div>


                            <Slider
                                range
                                defaultValue={[sliderMin, sliderMax]}
                                min={sliderMin}
                                max={sliderMax}
                                onChange={value => renewValues(value)}
                            />


                        </div>


                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Тип питания</h3>
                            <a className={styles["aside-close"]}>Свернуть</a>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                        </div>
                        <div className = {styles["aside-block"]}>
                            <h3 className = "aside-block-title">Дополнительные условия</h3>
                            <a className={styles["aside-close"]}>Свернуть</a>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                            <div className = {styles["aside-checkbox"]}>
                                <input type="checkbox" id="checkbox-1" className = "stylized" /> <label htmlFor="checkbox-1">Завтрак и обед</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {styles["search-result-right"]}>

                <Search_hotel_item />
                </div>
            </section>






{/*   // Для карты для добавления позже
                <div className = {`${styles["map-block"]}`}>
                    <div className = {`${styles["show-filters"]}`}>
                        <span className = {styles["search-switch-text"]}>Показать все фильтры</span>
                    </div>
                    <Search_switches />
                    <div className="map" id = "map"></div>
</div>*/}
        </>
    )
}