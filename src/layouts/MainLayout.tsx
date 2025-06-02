import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const MainLayout = () => {  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa] dark:bg-[#1a202c]">
      <Header />
      <main className="flex-grow pt-20 xs:pt-22 sm:pt-24 pb-8 xs:pb-10 sm:pb-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout