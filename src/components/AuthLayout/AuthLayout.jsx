import React from 'react'
import Navber from '../Navber'
import { Outlet } from 'react-router'
import Footer from '../Footer'

export const AuthLayout = () => {
  return (
    <div>
        <header className='sticky z-100 top-0 h-fit'>
            <Navber></Navber>
        </header>
        <main className='min-h-fit'>
            <Outlet></Outlet>
        </main>
        <section className='sticky top-0 h-fit'>
          <Footer></Footer>
        </section>
    </div>
  )
}
