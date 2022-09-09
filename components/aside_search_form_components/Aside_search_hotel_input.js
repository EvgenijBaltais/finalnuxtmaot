import { useState, useEffect, useRef} from 'react'
import Aside_search_hotel_ways from './Aside_search_hotel_ways'
import { useRouter } from 'next/router'

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

export default function Aside_search_hotel_input (props) {

    const [regions, setRegions] = useState(props.popularWays)
    const [hotels, setHotels] = useState(props.popularHotels)
    const [visibleSearch, setVisibleSearch] = useState(0)
    const router = useRouter()
    const { query } = useRouter()

    function changeVisibleSearch () {
        setVisibleSearch(visibleSearch => !visibleSearch)
    }

    const searchHotels = async (value) => {

        if (value.length < 3) {
            
            if (value.length == 0) {
                setRegions(props.popularWays)
                setHotels(props.popularHotels)
            }
            return false
        }

        setVisibleSearch(1)

        try {

            const response = await fetch(`https://maot-api.bokn.ru/api/search-object?str=${value}`)
            const result = await response.json()

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            for (let key in result.data) {
                if (result.data.hasOwnProperty(key)) {
                    if (key == 'region') {
                        setRegions(result.data[key].slice(0, 15))
                    }
                    if (key == 'hotel') {
                        setHotels(result.data[key].slice(0, 15))
                    }
                }
            }

        } catch (err) {
            console.log(err.message)
        } finally {
        }
    }

    // Клик по ссылке вне

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, setVisibleSearch)

    // Клик по ссылке вне, конец

    return (

        <div className = "aside-direction-form-block aside-direction-form-way" ref={wrapperRef}>
        <input type="text"
                name="aside-choose-way"
                className = "aside-form-way-input"
                placeholder="Выберите направление"
                defaultValue={query.region_name || query.hotel_name || ''}
                onClick={() => setVisibleSearch(1)}
                onChange={event => searchHotels(event.target.value)}
            />
            { visibleSearch ? 
            <Aside_search_hotel_ways 
                hotels = {props.popularHotels}
                regions = {props.popularWays}
                visibleSearch = {changeVisibleSearch}
                changeSearchResult = {props.changeSearchResult}
                searchResult = {props.searchResult}
            />
            : '' }
        </div>
    )
}