import styles from "../styles/HotOffers.module.css"
import HotOfferItem from "./HotOfferItem"

const HotOffers = () => {

    const hotOffers = [
        {id: 'les_art_resort_',
            name: 'LES Art Resort',
            adress: 'М. О., вблизи поселка Дорохово',
            price: '3400',
            image: 'https://maot-api.bokn.ru/frontend/web/images/hotel_images/2395/photo-1.jpg',
            star_rating: 4
        },
        {id: 'moskou_kantri_klab_5',
            name: 'Москоу Кантри Клаб',
            adress: 'г. Дедовск, ул. Международная',
            price: '9000',
            image: 'https://cdn.worldota.net/t/x500/content/ee/df/eedfc78c18a9df9f02f70d33a2ab05a51e90a22e.jpeg',
            star_rating: 5
        },
        {id: 'parkhotel_vozdvizhenskoe',
            name: 'Парк Отель Воздвиженское',
            adress: 'Дом отдыха Авангард, 1',
            price: '5600',
            image: 'https://cdn.worldota.net/t/x500/extranet/6b/f7/6bf7cac01c60d0c44ab3a476246cb0f911a6ebf8.jpeg',
            star_rating: 4
        },
        {id: 'areal_congress_hotel',
            name: 'Конгресс-отель «Ареал»',
            adress: 'Сиреневая ул., 21, Шевёлкино',
            price: '4700',
            image: 'https://cdn.worldota.net/t/x500/content/ce/70/ce7041e68b04cf1e8b1351518f4432a991164cbd.jpeg',
            star_rating: 5
        },
        {id: 'iakhonty_noginsk_2',
            name: 'Яхонты Ногинск',
            adress: 'Ногинский район, Жилино',
            price: '4390',
            image: 'https://cdn.worldota.net/t/x500/content/82/c2/82c217b063b9272f0152b8e5e74da967fa1f0108.jpeg',
            star_rating: 5
        },
        {id: 'spa_hotel_svezhij_veter_',
            name: 'Отель Свежий Ветер',
            adress: 'Деревня Курово вл. 74',
            price: '8800',
            image: 'https://maot-api.bokn.ru/frontend/web/images/hotel_images/2471/hotel_5489_9027_03_k.jpg',
            star_rating: 4
        },
        {id: 'klyazma_hotel_',
            name: 'Отель Клязьма',
            adress: 'Судогодское шоссе, д. 15',
            price: '5990',
            image: 'https://cdn.worldota.net/t/x500/extranet/f0/3c/f03c28dd42ec709b1ee74ce2b8bd603e670b9829.jpeg',
            star_rating: 3
        },
        {id: 'tulip_inn_sofrino_park_hotel',
            name: 'Отель Тюлип Инн Софрино Парк',
            adress: 'Территория Парк-отеля Софрино, Софрино',
            price: '3500',
            image: 'https://cdn.worldota.net/t/x500/extranet/82/7c/827c8fdf3157d65cc76d4388f02bd2e5300e92ad.jpeg',
            star_rating: 5
        },
    ]

    return (
        <section className = {styles["hot-deals"]}>
            <h2 className = "section-title icon-item icon-item-flame">Горящие предложения</h2>
            <div className = {styles["hot-deals-section"]}>

                {hotOffers.map((item, index) => <HotOfferItem item = {item} key = {index} />)}

            </div>
        </section>
    )
}

export default HotOffers