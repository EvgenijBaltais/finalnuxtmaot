import MainNav from '../MainNav'
import Footer from '../Footer'

import { useRouter } from 'next/router'

export default function MainLayout({ children }) {

const router = useRouter()

console.log(router)
  return (
    <div className={`wrapper${router.route == '/hotels' ? ' search-page' : ''}`}>
        <MainNav />
          <main>{children}</main>
        <Footer />
    </div>
  )
}