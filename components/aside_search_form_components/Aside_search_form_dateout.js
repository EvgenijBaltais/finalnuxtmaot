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

export default function Aside_search_form_dateout() {

    // Дата выезда
    const [visibleDateOut, setVisibleDateOut] = useState(0)
    const [visibleDateOutValue, setVisibleDateOutValue] = useState('Выезд')


    // Клик по ссылке вне

    const wrapperRef = useRef(null)
    useOutsideAlerter(wrapperRef, setVisibleDateOut)

    // Клик по ссылке вне, конец

    return (
        <div className = "aside-direction-form-block aside-direction-form-out" ref={wrapperRef}>
            <input type="text"
                    name="choose-out"
                    className = {visibleDateOut ? "aside-form-way-input aside-direction-form-in-active" : "aside-form-way-input"}
                    placeholder = {visibleDateOutValue}
                    onClick = { () => setVisibleDateOut({ data: 1}) }
                    readOnly = "readonly"
            />
        </div>
    )
}