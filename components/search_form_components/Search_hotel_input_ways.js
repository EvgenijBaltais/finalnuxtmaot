export default function Search_hotel_ways (props) {

const searchByClick = (event) => {

    event.preventDefault()
    findParent (event.target, 'direction-form-way').querySelector('.form-way-input').value = event.target.innerText

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
                                    <a className="search-results__link" onClick = {searchByClick} data-info = "region" data-id = {item.id}>
                                        {item.name}
                                    </a>
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
                                <a className="search-results__link" onClick = {searchByClick} data-info = "hotel" data-id = {item.id}>
                                    {item.name}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div> : ''
            }
        </div>
    )
}