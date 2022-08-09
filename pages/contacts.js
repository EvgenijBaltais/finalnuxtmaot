import MapCarousel from '../components/MapCarousel'
import VacancyBanner from '../components/VacancyBanner'
import ContactsForms from '../components/ContactsForms'

const Contacts = () => {

    return (
        <>
            <h1 className = "secondary-h1">Contacts</h1>

            <MapCarousel />
            <VacancyBanner />
            <ContactsForms />
        </>
    )
}

export default Contacts