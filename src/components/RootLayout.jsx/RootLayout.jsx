import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer'
import Navber from '../Navber'


const RootLayout = () => {
    return (
        <div className='flex flex-col h-fit bg-gray-100'>
            <header className='sticky !z-[100] top-0 h-fit'>
                <Navber></Navber>
            </header>
            <section>
                <Outlet></Outlet>
            </section>
            <section className='sticky top-0 h-fit'>

                <Footer></Footer>
            </section>
        </div>
    )
}

export default RootLayout