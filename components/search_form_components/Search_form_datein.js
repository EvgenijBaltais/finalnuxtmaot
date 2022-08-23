import { useState } from 'react'

export default function Search_form_datein() {

    // Дата заезда
    const [visibleDateIn, setVisibleDateIn] = useState(0)
    const [visibleDateInValue, setVisibleDateInValue] = useState('Заезд')

    return (
        <div className = "direction-form-block direction-form-in">
            {visibleDateIn ? <div className = "direction-form-in-active">{visibleDateInValue}</div> : ''}
            <input type="text"
                name="choose-in"
                className = "form-way-input"
                placeholder = {visibleDateInValue}
                onClick = { event => setVisibleDateIn(1) }
                readOnly = "readonly"
            />
        </div>
    )
}