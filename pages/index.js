import MainForm from "../components/MainForm"
import HotOffers from "../components/HotOffers"
import PopularSections from "../components/PopularSections"
import SpecialOffers from "../components/SpecialOffers"
import SubscribeSection from "../components/SubscribeSection"
import AboutSection from "../components/AboutSection"
import OurSection from "../components/OurSection"

const Index = ({popularHotels, popularWays}) => {

    return (
        <>
            <h1 className = "main-h1">Путешествуйте по всей России!</h1>

            <MainForm />
            <HotOffers />
            <PopularSections popularHotels = {popularHotels} popularWays = {popularWays} />
            <SpecialOffers items = "popularWays" />
            <SubscribeSection />
            <AboutSection />
            <OurSection />
        </>
    )
}

export async function getStaticProps(context) {

	const response = await fetch('https://jsonplaceholder.typicode.com/users')
	const popularHotels = await response.json()
    const popularWays = popularHotels
  
    return {
        props: {
            popularHotels,
            popularWays
        },
    }
}

export default Index