import React from "react"
import Head from 'next/head'
import Script from 'next/script'

import MapCarousel from '../components/MapCarousel'
import VacancyBanner from '../components/VacancyBanner'
import ContactForms from '../components/ContactForms'

class Contacts extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        document.querySelector('.wrapper').classList.add('contact-page')
    }

    componentWillUnmount() {
        document.querySelector('.wrapper').classList.remove('contact-page')
    }

    render() {

        return (
            <>
                <h1 className = "secondary-h1">Контакты</h1>

                <MapCarousel />
                <VacancyBanner />
                <ContactForms />
            </>
        )
    }
}

export default Contacts