export default function Search_hotel_ways (props) {

const searchByClick = (event) => {

    event.preventDefault()
    findParent (event.target, 'hoteldetail-direction-form-way').querySelector('.hoteldetail-form-way-input').value = event.target.innerText

    props.visibleSearch()

    let obj = {
        hotel: event.target.getAttribute('data-info') == 'hotel' ? event.target.getAttribute('data-id') : '',
        hotel_name: event.target.getAttribute('data-info') == 'hotel' ? event.target.innerText : ''
    }

    props.changeSearchResult(obj)
}

function findParent (el, cls) {
	while ((el = el.parentElement) && !el.classList.contains(cls));
	return el;
}

    return (
        <div className="hoteldetail-search-results-w">
            {props.hotels.length ?
            <div className = "hoteldetail-search-results__ways">
                <div className="hoteldetail-search-results__body">
                    {props.hotels.map((item, index) => {
                        return (
                            <div className="hoteldetail-search-results__item" key = {index}>
                                <a className="hoteldetail-search-results__link" onClick = {searchByClick} data-info = "hotel" data-id = {item.id}>
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