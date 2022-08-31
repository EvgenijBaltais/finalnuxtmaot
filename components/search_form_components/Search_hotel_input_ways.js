import { useState } from 'react'
import Link from 'next/link'

export default function Search_hotel_ways (props) {

const [active_block, setActive_block] = useState(1)

const searchByClick = (event) => {
    event.preventDefault()
    findParent (event.target, 'direction-form-way').querySelector('.form-way-input').value = event.target.innerText
    
    
    props.visibleSearch()
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
                                    <Link href = "">
                                        <a className="search-results__link" onClick = {searchByClick}>
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
                                    <a className="search-results__link" onClick = {searchByClick}>
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