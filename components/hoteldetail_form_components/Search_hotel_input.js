export default function Search_hotel_input ({name}) {

    return (
        <div className = "hoteldetail-direction-form-block hoteldetail-direction-form-way">
            <input type="text"
                    name="hoteldetail-choose-way"
                    className = "hoteldetail-form-way-input"
                    placeholder="Выберите направление"
                    defaultValue={name}
                    readOnly = "readOnly"
                />
        </div>
    )
}