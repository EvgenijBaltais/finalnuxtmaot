import React from "react"
import Head from 'next/head'

import MapCarousel from '../components/MapCarousel'
import VacancyBanner from '../components/VacancyBanner'
import ContactForms from '../components/ContactForms'

class Contacts extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        document.querySelector('.wrapper').classList.add('contact-page')

        try {
            ym(91492860, 'hit', '/contact');
        } catch(e){}
    }

    componentWillUnmount() {
        document.querySelector('.wrapper').classList.remove('contact-page')
    }

    render() {

        return (
            <>
            <Head>
                <title>Контакты</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
                <h1 className = "secondary-h1">Контакты</h1>

                <MapCarousel />
                <VacancyBanner />
                <ContactForms />
            </>
        )
    }
}

export default Contacts