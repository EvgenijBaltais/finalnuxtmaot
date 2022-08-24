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

export default function Search_form_dateout() {

    // Дата выезда
    const [visibleDateOut, setVisibleDateOut] = useState(0)
    const [visibleDateOutValue, setVisibleDateOutValue] = useState('Выезд')


    // Клик по ссылке вне

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, setVisibleDateOut)

    // Клик по ссылке вне, конец

    return (
        <div className = "direction-form-block direction-form-out" ref={wrapperRef}>
            {visibleDateOut ? <div className = "direction-form-out-active">{visibleDateOutValue}</div> : ''}
            <input type="text"
                    name="choose-out"
                    className = "form-way-input"
                    placeholder = {visibleDateOutValue}
                    onClick = { () => setVisibleDateOut({ data: 1}) }
                    readOnly = "readonly"
            />
        </div>
    )
}