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

    const [searchValue, setSearchValue] = useState('')
    const [visibleSearch, setVisibleSearch] = useState(0)

    const [ toDos, setToDos ] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const setValue = event => {
        setSearchValue(event.target.value)
        setVisibleSearch(1)
        event.target.value == '' ? setVisibleSearch(0) : setVisibleSearch(1)
    }

    const setTextData = text => {
        setSearchValue(text)
        setVisibleSearch(0)
    }

    let visible = ''

/*
    useEffect(() => {


        function showSearch () {
            visible = visibleSearch
            visibleSearch == 0 ? setVisibleSearch(1) : ''
            /*
                if (isLoading) {
                    return <p>Loading....</p>
                }
                if (!toDos) {
                    return <p>No List to show</p>
                }
            */
    

/*
        setIsLoading(true)
        fetch(`http://hotelsystem.local/api/search-object?str=моск`)
            .then(response => response.json())
            .then(data => {
                setToDos(data)
                setIsLoading(false)
                console.log(data)
            })

        }

    }, [])*/

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
                defaultValue={searchValue}
                onChange={console.log(1)}
                key={searchValue}
                onClick={() => setVisibleSearch({data: 1})}
            />
            { visibleSearch ? <Search_hotel_input_ways setTextData = {setTextData} /> : '' }
        </div>
    )
}