import MainNav from '../MainNav'
import Footer from '../Footer'

import { useRouter } from 'next/router'

export default function MainLayout({ children }) {

const router = useRouter()

let decorate = ''
router.route == '/hotels' ? decorate = ' hotels-page' : ''
router.route == '/hotelbooking' ? decorate = ' hotels-booking' : ''
{/*
// Для страницы с картой, на потом
${router.route == '/hotels' ? ' search-page' : ''}
*/}

  return (
    <div className={`wrapper${ decorate}`}>
        <MainNav />
          <main className={`main${router.route == '/hotels' ? ' search-page-main' : ''}`}>{children}</main>
        <Footer />
    </div>
  )
}