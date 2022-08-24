import { useState } from 'react'
import Link from 'next/link'


export default function Search_hotel_ways ({setTextData}) {

const [active_block, setActive_block] = useState(1)

function clickHandler(event) {
    event.preventDefault()
    setTextData(event.target.innerText)
}

    return (
        <div className="search-results-w">
            <div className = "search-results__hotels">
                <div className="search-results__header">
                    Направления
                </div>
                <div className="search-results__body">
                    <div className="search-results__item">
                        <Link href = "">
                            <a className="search-results__link" onClick = {clickHandler}>
                                Подмосковье
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className = "search-results__ways">
                <div className="search-results__header">
                    Отели
                </div>
                <div className="search-results__body">
                    <div className="search-results__item">
                        <Link href = "">
                            <a className="search-results__link" onClick = {clickHandler}>
                                Солнечный
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}