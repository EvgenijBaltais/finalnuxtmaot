import { useState, useRef, useEffect } from 'react'


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

export default function Search_form_datein() {

    // Дата заезда
    const [visibleDateIn, setVisibleDateIn] = useState(0)
    const [visibleDateInValue, setVisibleDateInValue] = useState('Заезд')


    // Клик по ссылке вне

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, setVisibleDateIn)

    // Клик по ссылке вне, конец


    return (
        <div className = "direction-form-block direction-form-in" ref={wrapperRef}>
            {visibleDateIn ? <div className = "direction-form-in-active">{visibleDateInValue}</div> : ''}
            <input type="text"
                name="choose-in"
                className = "form-way-input"
                placeholder = {visibleDateInValue}
                onClick = { () => setVisibleDateIn({ data: 1}) }
                readOnly = "readonly"
            />
        </div>
    )
}