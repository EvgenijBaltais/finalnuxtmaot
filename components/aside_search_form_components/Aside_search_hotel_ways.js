import Link from 'next/link'
export default function Aside_search_hotel_ways (props) {

const searchByClick = (event) => {

    event.preventDefault()
    findParent (event.target, 'aside-direction-form-way').querySelector('.aside-form-way-input').value = event.target.innerText

    props.visibleSearch()

    let obj = {
        name: event.target.innerText,
        hotel: event.target.getAttribute('data-info') == 'hotel' ? event.target.getAttribute('data-id') : '',
        region: event.target.getAttribute('data-info') == 'region' ? event.target.getAttribute('data-id') : '',
        hotel_name: event.target.getAttribute('data-info') == 'hotel' ? event.target.innerText : '',
        region_name: event.target.getAttribute('data-info') == 'region' ? event.target.innerText : ''
    }

    props.changeSearchResult(obj)
}

function findParent (el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}

    return (
        <div className="aside-search-results-w">

            {props.regions.length ?
                <div className = "aside-search-results__hotels">
                    <div className="aside-search-results__header">
                        Направления
                    </div>
                    <div className="aside-search-results__body">
                        {props.regions.map((item, index) => {
                            return (
                                <div className="aside-search-results__item" key = {index}>
                                    <Link href = "">
                                        <a className="aside-search-results__link" onClick = {searchByClick} data-info = "region" data-id = {item.id}>
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
            <div className = "aside-search-results__ways">
                <div className="aside-search-results__header">
                    Отели
                </div>
                <div className="aside-search-results__body">
                    {props.hotels.map((item, index) => {
                        return (
                            <div className="aside-search-results__item" key = {index}>
                                <Link href = "">
                                    <a className="aside-search-results__link" onClick = {searchByClick} data-info = "hotel" data-id = {item.id}>
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