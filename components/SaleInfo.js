import { useState }  from 'react'

const SaleInfo = () => {
    const [ Active ] = useState(0)

    if (Active == 1) {
        return <p></p>
    }

    return (
        <div className = "cashback-info">

            <p>С 25 августа по 10 сентября 2022 года получайте&nbsp;    
                <a className ="cashback-link cashback-link-desktop">
                кешбэк 20% при оплате путешествия картой «Мир».</a>
            </p>

            <div className ="cashback-block-mobile">
                <a className ="cashback-link cashback-link-mobile">кешбэк 20% при оплате</a>
                <a className ="cashback-link cashback-link-mobile">путешествия картой «Мир».</a>
            </div>

            <p>Отправиться в путешествие можно на 3 и более ночи с&nbsp;1&nbsp;октября по 25&nbsp;декабря включительно.</p>

        </div>
    )
}

export default SaleInfo