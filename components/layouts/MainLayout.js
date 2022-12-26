import MainNav from '../MainNav'
import Footer from '../Footer'

import { useEffect } from 'react'
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

// Запись utm меток и ref

useEffect(() => {

  if (!router.isReady) {
    return
  }

  let myReferer = 'https://maotonline.ru/'
  let routerPath = router.asPath || ''

  if (document.referrer) {
    myReferer = document.referrer
  }

  if (routerPath.indexOf('utm_') != -1) {

    for (let key in router.query) {
      myReferer += (key + '=' + router.query[key] + '&')
    }

    myReferer = myReferer.slice(0, -1)
    localStorage.setItem('referer', myReferer)
  }

}, [router]);


  return (
    <>
      <MainNav />
      <div className={`wrapper${ decorate}`}>
          <main className={`main${router.route == '/hotels' ? ' search-page-main' : ''}`}>{children}</main>
          <Footer />
      </div>
    </>
  )
}