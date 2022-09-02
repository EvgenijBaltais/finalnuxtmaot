import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head'


import Search_switches from "../components/search_results/Search_switches"

import styles from "../styles/search_results/Search_results.module.css"


const loadScript = (src, onLoad) => {
    const script = document.createElement("script");
  
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    script.onload = onLoad;
  };
  
  const init = () => {
    const myMap = new window.ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 7
    });
  };

export default function Hotels (props) {

    const [loadedItems, setLoadedItems] = useState([])
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()
    const { query } = useRouter()


        React.useEffect(() => {
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU", () => {
            window.ymaps.ready(init);
          });
        }, []);

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


    return (
        <>

        <Head>
            <title>Результаты поиска</title>
        </Head>


            <div className={`${styles["search-content"]}`}>

            
                <div className = {`${styles["results-block"]}`}>


                </div>


                <div className = {`${styles["map-block"]}`}>

                    <div className = {`${styles["show-filters"]}`}>
                        <span className = {styles["search-switch-text"]}>Показать все фильтры</span>
                    </div>

                    <Search_switches />

                    <div className="map" id = "map"></div>
                </div>
            </div>
        </>
    )
}