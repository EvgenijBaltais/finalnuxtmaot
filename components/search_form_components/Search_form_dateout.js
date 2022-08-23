import { useState } from 'react'

export default function Search_form_dateout() {

    // Дата выезда
    const [visibleDateOut, setVisibleDateOut] = useState(0)
    const [visibleDateOutValue, setVisibleDateOutValue] = useState('Выезд')

    return (
        <div className = "direction-form-block direction-form-out">
            {visibleDateOut ? <div className = "direction-form-out-active">{visibleDateOutValue}</div> : ''}
            <input type="text"
                    name="choose-out"
                    className = "form-way-input"
                    placeholder = {visibleDateOutValue}
                    onClick = { event => setVisibleDateOut(1) }
                    readOnly = "readonly"
            />
        </div>
    )
}