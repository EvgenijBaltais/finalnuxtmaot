import MapCarousel from '../components/MapCarousel'
import VacancyBanner from '../components/VacancyBanner'
import ContactForms from '../components/ContactForms'

const Contacts = () => {

    return (
        <>
            <h1 className = "secondary-h1">Контакты</h1>

            <MapCarousel />
            <VacancyBanner />
            <ContactForms />
        </>
    )
}

export default Contacts