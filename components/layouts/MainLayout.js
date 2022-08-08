import MainNav from '../MainNav'
import Footer from '../Footer'

export default function MainLayout({ children }) {
  return (
    <div className="wrapper">
        <MainNav />
          <main>{children}</main>
        <Footer />
    </div>
  )
}