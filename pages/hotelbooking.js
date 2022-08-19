import React from "react"

import Hotel_preview from "../components/hotel_booking/Hotel_preview"
import Hotel_success from "../components/hotel_booking/Hotel_success"

class Hotelbooking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            progress_step: 0
        }
    }

    componentDidMount(){
        document.querySelector('.wrapper').classList.add('hotel-bron-page')
    }

    componentWillUnmount() {
        document.querySelector('.wrapper').classList.remove('hotel-bron-page')
    }

    render() {

        return (
            <>
                <h1 className = "secondary-h1">Бронирование</h1>
                {this.state.progress_step == 0 ? <Hotel_preview /> : <Hotel_success />}
            </>
        )
    }
}

export default Hotelbooking