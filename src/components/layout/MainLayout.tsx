import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <>
            <Header />
            <main className='flex-1'>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
