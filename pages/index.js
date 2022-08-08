import MainForm from "../components/MainForm"
import HotOffers from "../components/HotOffers"
import PopularSections from "../components/PopularSections"

const Index = () => {

    return (
        <>
            <h1 className = "main-h1">Путешествуйте по всей России!</h1>

            <MainForm />
            <HotOffers />
            <PopularSections />
        </>
    )
}

export default Index