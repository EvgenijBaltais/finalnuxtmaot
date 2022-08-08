import '../styles/global.css'
import MainLayout from '../components/layouts/MainLayout'

export default function MyApp({Component, pageProps}) {

    return  <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
}