import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../Navber'
import Footer from '../Footer'

const RootLayout = () => {
    return (
        <div className='flex flex-col h-fit bg-gray-100'>
            <header className='sticky top-0 h-fit'>
                <Navber></Navber>
            </header>
            <section>
                <Outlet></Outlet>
            </section>
            <section >

                <Footer></Footer>
            </section>
        </div>
    )
}

export default RootLayout