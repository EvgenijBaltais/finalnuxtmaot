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

export default function Search_hotel_input (props) {

    const [hotels, setHotels] = useState(props.popularHotels)
    const [visibleSearch, setVisibleSearch] = useState(0)

    function changeVisibleSearch () {
        setVisibleSearch(visibleSearch => !visibleSearch)
    }

    const searchHotels = async (value) => {

        if (value.length < 3) {
            
            if (value.length == 0) {
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

    useEffect(() => {
        document.querySelector('.hoteldetail-form-way-input').value = props.name
    }, [])

    return (

        <div className = "hoteldetail-direction-form-block hoteldetail-direction-form-way" ref={wrapperRef}>
            <input type="text"
                    name="hoteldetail-choose-way"
                    className = "hoteldetail-form-way-input"
                    placeholder="Выберите направление"
                    onClick={() => setVisibleSearch(1)}
                    onChange={event => searchHotels(event.target.value)}
                />
                { visibleSearch ? 
                <Search_hotel_input_ways 
                    hotels = {hotels}
                    visibleSearch = {changeVisibleSearch}
                    changeSearchResult = {props.changeSearchResult}
                    searchResult = {props.searchResult}
                />
            : '' }
        </div>
    )
}