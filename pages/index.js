import MainForm from "../components/MainForm"
import HotOffers from "../components/HotOffers"
import PopularSections from "../components/PopularSections"
import SpecialOffers from "../components/SpecialOffers"
import SubscribeSection from "../components/SubscribeSection"
import AboutSection from "../components/AboutSection"
import OurSection from "../components/OurSection"

const Index = () => {

    return (
        <>
            <h1 className = "main-h1">Путешествуйте по всей России!</h1>

            <MainForm />
            <HotOffers />
            <PopularSections />
            <SpecialOffers />
            <SubscribeSection />
            <AboutSection />
            <OurSection />
        </>
    )
}

export default Index