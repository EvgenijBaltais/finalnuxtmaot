import React from "react"
import MainForm from "../components/MainForm"
import HotOffers from "../components/HotOffers"
import PopularSections from "../components/PopularSections"
import SpecialOffers from "../components/SpecialOffers"
import SubscribeSection from "../components/SubscribeSection"
import AboutSection from "../components/AboutSection"
import Reviews from "../components/Reviews"

class Index extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        document.querySelector('.wrapper').classList.add('main-page')
    }

    componentWillUnmount() {
        document.querySelector('.wrapper').classList.remove('main-page')
    }

    render() {

        return (
            <>
                <h1 className = "main-h1">Путешествуйте по всей России!</h1>

                <MainForm />
                <HotOffers />
                <PopularSections popularHotels = {this.props.popularHotels} popularWays = {this.props.popularWays} />
                <SpecialOffers items = "popularWays" />
                <SubscribeSection />
                <AboutSection />
                <Reviews />
            </>
        )
    }
}

export async function getStaticProps(context) {

    //http://hotelsystem.local/api/load?id=56

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