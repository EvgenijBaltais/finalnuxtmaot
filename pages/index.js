import React from "react"
import Head from 'next/head'
import MainForm from "../components/MainForm"
import SaleInfo from "../components/SaleInfo"
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
                <Head>
                    <title>Отдых по России и Подмосковью</title>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                </Head>
                <h1 className = "main-h1">Путешествуйте по&nbsp;всей&nbsp;России!</h1>
                <SaleInfo />
                
                <MainForm popularHotels = {this.props.popularHotels.data} popularWays = {this.props.popularWays.data} />
                <PopularSections popularHotels = {this.props.popularHotels} popularWays = {this.props.popularWays} />
                <SpecialOffers />
                <SubscribeSection />
                <AboutSection />
                {/*<Reviews reviews = {this.props.reviews} />*/}
                <Reviews />
            </>
        )
    }
}

export async function getStaticProps(context) {
    
    // Популярные отели

	const getHotels = await fetch('https://maot-api.bokn.ru/api/hotels/top')
	const popularHotels = await getHotels.json()

    // Популярные направления

	const getWays = await fetch('https://maot-api.bokn.ru/api/regions/top')
	const popularWays = await getWays.json()
  
    // Отзывы

	//const getReviews = await fetch('https://maot-api.bokn.ru/api/load?id=6713')
	//let reviews = await getReviews.json()
    //    reviews = reviews.data.reviews

    return {
        props: {
            popularHotels,
            popularWays,
            //reviews
        },
    }
}

export default Index