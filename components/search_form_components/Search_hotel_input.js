import { useState, useEffect, useRef} from 'react'
import Search_hotel_input_ways from './Search_hotel_input_ways'


function useOutsideAlerter(ref, func) {
    useEffect(() => {

        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                func(0)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])
}

export default function Search_hotel_input () {

    const setValue = event => {
        setSearchValue(event.target.value)
        setVisibleSearch(1)
        event.target.value == '' ? setVisibleSearch(0) : setVisibleSearch(1)
    }

    const setTextData = text => {
        setSearchValue(text)
        setVisibleSearch(0)
    }


    const [searchData, setSearchData] = useState([])

    const [regions, setRegions] = useState([{name: 'Подмосковье'}, {name: 'Сочи'}, {name: 'Крым'}, {name: 'Абхазия'}, {name: 'Анапа'}, {name: 'Армения'}, {name: 'Беларусь'}, {name: 'Геленджик'}, {name: 'Грузия'}, {name: 'Кавказские Минеральные Воды'}, {name: 'Калининградская область'}, {name: 'Карелия'}, {name: 'Кисловодск'}, {name: 'Красная Поляна'}, {name: 'Краснодарский край'}, {name: 'Ставропольский край'}, {name: 'Туапсе'}])

    const [hotels, setHotels] = useState([{name: 'Bridge Resort (Сочи)'}, {name: 'COUNTRY RESORT'}, {name: 'Mriya resort'}, {name: 'Radisson Blu Paradise'}, {name: 'Respect Hall'}, {name: 'Ribera Resort & SPA'}, {name: 'Yalta-Intourist'}, {name: 'Ай-Даниль'}, {name: 'АкваЛоо'}, {name: 'Аквамарин(Севастополь)'}, {name: 'Актер'}, {name: 'Артурс СПА Отель'}, {name: 'Атлас Парк-Отель'}, {name: 'Беларусь'}, {name: 'Бор'}, {name: 'Валуево'}, {name: 'ВКС-Кантри'}, {name: 'Горный воздух'}, {name: 'Гранд отель Поляна'}, {name: 'Дельфин (Адлеркурорт)'}])

    const [visibleSearch, setVisibleSearch] = useState(0)
    const [err, setErr] = useState('')

    function changeVisibleSearch () {
        setVisibleSearch(visibleSearch => !visibleSearch)
    }

    const searchHotels = async (value) => {

        if (value.length < 3) {
        
            setRegions([])
            setHotels([])
            return false
        }

        setVisibleSearch(1)

        const result = 
{"region":[{"id":"965825039","name":"Московская область","type":"region"},{"id":"965829913","name":"Московский","type":"region"},{"id":"965830072","name":"Новомосковск","type":"region"},{"id":"965859564","name":"Новая Москва","type":"region"}],"hotel":[{"id":"moskva_9","name":" Москва","type":"hotel"},{"id":"kholidei_inn_moskva_vinogradovo","name":" Отель Holiday Inn Москва Виноградово","type":"hotel"},{"id":"iguana_on_moskovsky","name":" Игуана на Московском","type":"hotel"},{"id":"interkontinental_moskva","name":" Отель Интерконтиненталь Москва","type":"hotel"},{"id":"lullaby_hotels_moskovskij_vokzal_hotel","name":" Отель LULLABY HOTELS Московский вокзал","type":"hotel"},{"id":"korston_hotel_moscow","name":" Отель Корстон, Москва","type":"hotel"},{"id":"hotel_moskovskaya_3","name":" Московская","type":"hotel"},{"id":"hotel_retro_moscow","name":" Ретро Москва на Покровке","type":"hotel"},{"id":"moskovskaya_zastava_hotel","name":" Гостиница Московская Застава","type":"hotel"},{"id":"otel_kholidei_inn_moskva_sokolniki","name":" Отель Холидей Инн Москва Сокольники","type":"hotel"},{"id":"gostinitsa_podmoskove","name":" Гостиница «Подмосковье»","type":"hotel"},{"id":"_0x36592","name":" Мини Отель Новая Москва","type":"hotel"},{"id":"ibis_moskva_paveletskaia","name":" Отель Ибис Москва Павелецкая","type":"hotel"},{"id":"allegro_hotel_in_moskovsky_prospect","name":" Отель Аллегро на Московском проспекте","type":"hotel"},{"id":"hotel_baltschug_kempinski_moscow","name":" Отель Балчуг Кемпински Москва","type":"hotel"},{"id":"moskvich_hotel","name":" Гостиница Москвич","type":"hotel"},{"id":"gostinitsa_sheraton_palas_moskva","name":" Отель Шератон Палас Москва","type":"hotel"},{"id":"courtyard_by_marriott_moscow_city_center","name":" Отель Кортъярд Москва Сити Центр","type":"hotel"},{"id":"gostinitsa_khilton_leningradskaia","name":" Отель Hilton Москва Ленинградская","type":"hotel"},{"id":"miniotel_rinaldi_na_moskovskom_ii","name":" Отель «Rinaldi на Московском — II»","type":"hotel"},{"id":"novotel_moscow_city_hotel","name":" NOVOTEL Москва Сити","type":"hotel"},{"id":"moskva","name":" Отель Москва","type":"hotel"},{"id":"comfort_moscow","name":" Отель «Комфорт-Москва»","type":"hotel"},{"id":"111mosflat__moscow","name":" 111- Мосфлэт- Москва","type":"hotel"},{"id":"meblirovannye_komnaty_s_kaminom_ryadom_s_moskovskim_vokzalom","name":" Меблированные комнаты с камином рядом с Московским вокзалом","type":"hotel"},{"id":"timehome_na_moskvareke","name":" Хостел TimeHome на Москва-Реке","type":"hotel"},{"id":"laika_hostel","name":" Отель Laika на Московском","type":"hotel"},{"id":"moskovskie_gryozyi","name":" Отель Московские грёзы","type":"hotel"},{"id":"mercure_arbat_moscow","name":" Отель Mercure Арбат Москва","type":"hotel"},{"id":"ramada_moskva_domodedovo_hotel","name":" Рамада Москва Домодедово","type":"hotel"},{"id":"skroyal_hotel","name":" Отель SK Royal Москва","type":"hotel"},{"id":"buddotel_moskva","name":" БуддОтель Москва","type":"hotel"},{"id":"podmoskovie_resort","name":" Подмосковье УДП РФ","type":"hotel"},{"id":"hampton_by_hilton_moscow_strogino","name":" Отель Hampton By Hilton Москва Строгино","type":"hotel"},{"id":"moskovskouzbekskij_tsentr_hotel","name":" Отель МосУз (Московско-Узбекский гостинично-коммерческий центр)","type":"hotel"},{"id":"sheraton_moscow_sheremetyevo_airport_hotel","name":"  Отель Skypoint Luxe – Шератон Москва Шереметьево Аэропорт","type":"hotel"},{"id":"ooo_hartvel_hotel","name":" Отель Hartwell Москва","type":"hotel"},{"id":"kakadu_na_moskovskom_prospekte","name":" Опен-Апартментс на Московском проспекте 183-185","type":"hotel"},{"id":"moscow_marriott_hotel_novy_arbat","name":" Отель Москва Марриотт Новый Арбат (Звёзды Арбата)","type":"hotel"},{"id":"mercure_moscow_baumanskaya","name":" Отель Mercure Москва Бауманская","type":"hotel"},{"id":"hotel_retro_moskva_na_arbate","name":" Отель Ретро Москва на Арбате","type":"hotel"},{"id":"sanatoriy_victoriya","name":" Виктория (Московская обл.)","type":"hotel"},{"id":"otel_al_pash_novomoskovskaia","name":" Новомосковская","type":"hotel"},{"id":"ibis_moscow_centre_bakhrushina","name":" Гостиница Ибис Москва Центр Бахрушина","type":"hotel"},{"id":"adazhio_moskva_kievskaya_aparthotel","name":" Апарт-отель Адажио Москва Киевская","type":"hotel"},{"id":"lotte_otel_moskva","name":" Лотте Отель Москва","type":"hotel"},{"id":"hm_hostel_moscow","name":" Жилое помещение ЭйчЭм Москва","type":"hotel"},{"id":"retro_moskva_na_kurskoj_hotel","name":" Отель Ретро Москва на Курской","type":"hotel"},{"id":"art_moskva_hotel","name":" Отель Арт Москва","type":"hotel"},{"id":"mandarin_moscow_hotel","name":" Отель Мандарин Москва","type":"hotel"},{"id":"gostinitsa_natsional_moskva","name":" Гостиница Националь Москва","type":"hotel"},{"id":"kholidei_inn_sushchevskii","name":" Отель Holiday Inn Москва Сущевский","type":"hotel"},{"id":"kholidei_inn_moskva_lesnaia","name":" Отель Holiday Inn Москва Лесная","type":"hotel"},{"id":"astrus_hotel","name":" Аструс - Центральный Дом Туриста, Москва","type":"hotel"},{"id":"moscow_sochi","name":" Гостиничный комплекс Sochi Plaza (ex. гостиница «Москва»)","type":"hotel"},{"id":"otel_renaissance_moscow_monarch_centre","name":" Отель МонАрх Москва","type":"hotel"},{"id":"moskva_8","name":" Санаторий Москва","type":"hotel"},{"id":"podmoskove_2","name":" Подмосковье","type":"hotel"},{"id":"otel_vinterfell_moskvasiti","name":" Отель Винтерфелл Москва-Сити","type":"hotel"},{"id":"moskvakrym_2","name":" Москва-Крым","type":"hotel"},{"id":"metamoskva_hotel","name":" Отель Метамосква","type":"hotel"},{"id":"sunflower_avenue_hotel","name":" Отель Sunflower Авеню Москва","type":"hotel"},{"id":"start_moskovskaya_hotel","name":" Отель START Московская","type":"hotel"},{"id":"hostel_moskovskaya_","name":" Жилые помещения Московская","type":"hotel"},{"id":"moskva_kurgan","name":" Гостиница Москва","type":"hotel"},{"id":"berison_moskovskaya","name":" Гостиница Берисон Московская","type":"hotel"},{"id":"hotel_moskovskaya_4","name":" Азалия на Московской","type":"hotel"},{"id":"moskovskaya_gorka_hotel","name":" Отель Московская горка by USTA Hotels","type":"hotel"},{"id":"ibis_moscow_dynamo","name":" Отель Ibis Москва Динамо","type":"hotel"},{"id":"novotel_moskva_sheremetevo","name":" Отель Новотель Москва Аэропорт Шереметьево","type":"hotel"},{"id":"rinaldi_at_moscovsky_prospect_20","name":" Rinaldi на Московском - I","type":"hotel"},{"id":"rinaldi_at_moscovsky_prospect_18","name":" Меблированные комнаты Ринальди на Московском 18","type":"hotel"},{"id":"gostinitsa_kholidei_inn_moskovskie_vorota","name":" Гостиница Холидей Инн Московские ворота","type":"hotel"},{"id":"azimut_moscow_olympic_hotel","name":" AZIMUT Сити Отель Олимпик Москва","type":"hotel"},{"id":"ritz_carlton","name":" Отель Карлтон Москва (Ранее Ритц-Карлтон Москва)","type":"hotel"},{"id":"ararat_park_khaiatt","name":" Арарат Парк Хаятт Москва","type":"hotel"},{"id":"moskovsky_hotel","name":" Частный Пансионат Московский","type":"hotel"},{"id":"rinaldi_on_moskovsky_ii","name":" Ринальди на Московском II","type":"hotel"},{"id":"azimut_moscow_tulskaya_hotel","name":" AZIMUT Сити Отель Тульская Москва","type":"hotel"},{"id":"gostinitsa_moskomsporta","name":" Гостиница Москомспорта","type":"hotel"},{"id":"moscow_country_club_8","name":" Апарт-отель Москоу Кантри Клаб","type":"hotel"},{"id":"crowne_plaza_moscow_tretyakovskaya","name":" Crowne Plaza Москва Третьяковская","type":"hotel"},{"id":"kvart_otel_nadezhda_moskovskii_trakt_63","name":" Кварт отель Надежда Московский тракт 6/3","type":"hotel"},{"id":"podmoskovnyi_bulvar_12","name":" Подмосковный бульвар 12","type":"hotel"},{"id":"apartamenty_v_3kh_minutakh_ot_mmoskovskaia","name":" Апартаменты в 3х минутах от м.Московская","type":"hotel"},{"id":"uiutnaia_prostornaia_kvartira_na_moskovskom_shosse_95","name":" Уютная 3х комнатная квартира на Московском шоссе рядом с парком","type":"hotel"},{"id":"artiushkova_3_v_zhk_moskovskii","name":" Артюшкова 3 в ЖК \"Московский\"","type":"hotel"},{"id":"adagio_moscow_paveletskaya_4","name":" Апарт-Отель Адажио Москва Павелецкая","type":"hotel"},{"id":"apartment_on_moskovskaya_40","name":" Апартаменты Центр ул Московская 40","type":"hotel"},{"id":"megapolis_moskovskii_prospekt_112547","name":" Megapolis Московский проспект 112-547","type":"hotel"},{"id":"svetlaia_studiia_na_moskovskom_18","name":" Светлая СТУДИЯ на Московском 18","type":"hotel"},{"id":"moskovskaia_26a","name":" Московская 26А","type":"hotel"},{"id":"veliy_hotel_mohovaya","name":" МИРРОС Отель Москва Кремль ","type":"hotel"},{"id":"hotel_archi_na_tulskoy_moscow","name":" Archi Отель на Тульской Москва","type":"hotel"},{"id":"avita_iii","name":" Гостиница АКВАРЕЛЬ (восток Москвы)","type":"hotel"},{"id":"apartamenty_na_moskovskii_prospekt_114","name":" Московский проспект, 114","type":"hotel"},{"id":"otel_moskovskii","name":" Меблированные комнаты Московский","type":"hotel"},{"id":"home_hotel_on_moskovsky_182","name":" Home Hotel (Хоум Отель) на Московском 18/2","type":"hotel"},{"id":"hostelyi_rus_na_moskovskom","name":" Меблированные комнаты Рус на Московском","type":"hotel"},{"id":"chekhoff_hotel_moscow_curio_collection_by_hilton","name":" Чехофф Отель Москва Кьюрио Коллекшен Хилтон","type":"hotel"},{"id":"fortis_hotel_moscow_dubrovka","name":" Гостиница Фортис Москва Дубровка","type":"hotel"},{"id":"otel_moskovskii_24","name":" отель Московский 24","type":"hotel"},{"id":"studii_ulmoskovskaia22a","name":" Студии ул.Московская,22а","type":"hotel"},{"id":"taganka_hotel_moscow","name":" Отель «Таганка» Москва","type":"hotel"},{"id":"smart_hotel_neo_moskovskij_hotel","name":" Отель Smart Hotel NEO Московский","type":"hotel"},{"id":"hotel_teremok_moskovskij_rajon","name":" Отель Теремок Московский","type":"hotel"},{"id":"elegance_moskovsky","name":" Элеганс Московский","type":"hotel"},{"id":"moscow_marriott_imperial_plaza_hotel","name":" Отель Москва Марриотт Империал Плаза","type":"hotel"},{"id":"doubletree_by_hilton_moscow_arbat","name":" Отель DoubleTree by Hilton, Москва, Арбат","type":"hotel"},{"id":"otel_troika_moskva","name":" Отель Билибин Гарден Москва","type":"hotel"},{"id":"novotel_moscow_kievskaya","name":" Новотель Москва Киевская","type":"hotel"},{"id":"hotel_moskovskij_2","name":" Отель Московский","type":"hotel"},{"id":"azimut_hotel_smolenskaya_moscow","name":" AZIMUT Сити Отель Смоленская Москва","type":"hotel"},{"id":"holiday_inn_express_moscow_sheremetyevo_airport","name":" Гостиница Холидей Инн Экспресс Москва Аэропорт Шереметьево","type":"hotel"},{"id":"podmoskove_tsvdo","name":" Подмосковье (ЦВДО)","type":"hotel"},{"id":"ibis_moscow_oktyabrskoye_pole","name":" Гостиница Ибис Москва Октябрьское Поле","type":"hotel"},{"id":"podmoskovnye_vechera","name":" Подмосковные Вечера","type":"hotel"},{"id":"moskovskij_hotel","name":" Парк-отель Московский","type":"hotel"},{"id":"residences_moscow","name":" Отель Резиденции Москва - Сервисные апартаменты","type":"hotel"},{"id":"hotel_moskovsky","name":" Отель «Московский»","type":"hotel"},{"id":"moscotel","name":" Отель Москотель","type":"hotel"},{"id":"movenpick_moscow_taganskaya","name":" Отель Movenpiсk Москва Таганская","type":"hotel"},{"id":"rubin_na_moskovskom_prospekte_220","name":" Рубин на Московском проспекте, 220","type":"hotel"},{"id":"houm_24_moskva_na_ul_bratislavskoy_d_271","name":" Хоум 24 Москва на ул. Братиславской, д. 27/1","type":"hotel"},{"id":"houm_24_moskva_na_tyumenskom_proezde_d3_k1","name":" Хоум 24 Москва на Тюменском проезде, д.3, к.1","type":"hotel"},{"id":"houm_24_moskva_na_balakirevskom_pereulke_d_23","name":" Хоум 24 Москва на Балакиревском переулке, д. 23","type":"hotel"},{"id":"graf_orlov_na_moskovskoi","name":" Граф Орлов На Московской","type":"hotel"},{"id":"dabltri_bai_khilton_moskva_vnukovo_aeroport","name":" ДаблТри бай Хилтон Москва - Внуково Аэропорт","type":"hotel"},{"id":"moskou_kantri_klab_5","name":" Москоу Кантри Клаб","type":"hotel"},{"id":"gostinitsa_moskva_3","name":" гостиница Москва","type":"hotel"},{"id":"sheraton_moscow_sheremetyevo","name":" Шератон Москва Шереметьево","type":"hotel"},{"id":"open_apartments_on_moskovsky_205","name":" Опен-Апартментс на Московском проспекте 205","type":"hotel"},{"id":"home_hotel_home_hotel_on_moskovsky_8","name":" Home Hotel (Хоум Отель) на Московском 8","type":"hotel"},{"id":"home_hotel_on_moskovsky_186","name":" Home Hotel (Хоум Отель) на Московском 18/6","type":"hotel"},{"id":"riversajd_moskovskij_vokzal","name":" РиверСайд Московский Вокзал","type":"hotel"},{"id":"berison_na_moskovskoj_66a","name":" Отель Берисон на Московской 66а","type":"hotel"},{"id":"sunflower_river_hotel_moscow","name":" AZIMUT Отель Дербеневская Москва","type":"hotel"}]}
                

        for (let key in result) {
            if (result.hasOwnProperty(key)) {
                if (key == 'region') {
                    setRegions(result[key].slice(0, 20))
                }
                if (key == 'hotel') {
                    setHotels(result[key].slice(0, 20))
                }
            }
        }

        try {

            //const response = await fetch(`https://zarya-tour.ru/api/search-object?str=${value}`)
           // const result = await response.json()

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            //setSearchData(result)

        } catch (err) {
            setErr(err.message);
        } finally {
            //setIsLoading(false);
        }
    }

    // Клик по ссылке вне

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, setVisibleSearch)

    // Клик по ссылке вне, конец

    return (

        <div className = "direction-form-block direction-form-way" ref={wrapperRef}>
        <input type="text"
                name="choose-way"
                className = "form-way-input"
                placeholder="Выберите направление"
                onClick={() => setVisibleSearch(1)}
                onChange={event => searchHotels(event.target.value)}
            />
            { visibleSearch ? <Search_hotel_input_ways hotels = {hotels} regions = {regions} visibleSearch = {changeVisibleSearch} /> : '' }
        </div>
    )
}