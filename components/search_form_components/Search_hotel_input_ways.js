import Link from 'next/link'

export default function Search_hotel_ways (props) {

const searchByClick = (event) => {

    event.preventDefault()

    props.visibleSearch()

    let obj = {
        name: event.target.innerText,
        hotel: event.target.getAttribute('data-info') == 'hotel',
        region: event.target.getAttribute('data-info') == 'region'
    }

    props.changeSearchResult(obj)
}

    return (
        <div className="search-results-w">

            {props.regions.length ?
                <div className = "search-results__hotels">
                    <div className="search-results__header">
                        Направления
                    </div>
                    <div className="search-results__body">
                        {props.regions.map((item, index) => {
                            return (
                                <div className="search-results__item" key = {index}>
                                    <Link href = "">
                                        <a className="search-results__link" onClick = {searchByClick} data-info = "region">
                                            {item.name}
                                        </a>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div> : ''
            }
            {props.hotels.length ?
            <div className = "search-results__ways">
                <div className="search-results__header">
                    Отели
                </div>
                <div className="search-results__body">
                    {props.hotels.map((item, index) => {
                        return (
                            <div className="search-results__item" key = {index}>
                                <Link href = "">
                                    <a className="search-results__link" onClick = {searchByClick} data-info = "hotel">
                                        {item.name}
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div> : ''
            }
        </div>
    )
}