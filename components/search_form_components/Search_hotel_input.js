import { useState, useEffect, useRef} from 'react'

import Search_hotel_input_ways from './Search_hotel_input_ways'

export default function Search_hotel_input () {

    const [searchValue, setSearchValue] = useState('')
    const [visibleSearch, setVisibleSearch] = useState(0)

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

    const showSearch = event => {
        visible = visibleSearch
        visibleSearch == 0 ? setVisibleSearch(1) : ''
    }

    return (

        <div className = "direction-form-block direction-form-way">
        <input type="text"
                name="choose-way"
                className = "form-way-input"
                placeholder="Выберите направление"
                defaultValue={searchValue}
                onChange={showSearch}
                key={searchValue}
                onClick={() => setVisibleSearch(visibleSearch => !visibleSearch)}
            />
            { visibleSearch ? <Search_hotel_input_ways setTextData = {setTextData} /> : '' }
        </div>
    )
}