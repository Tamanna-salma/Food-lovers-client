import React from 'react'
import Navber from '../Navber'
import { Outlet } from 'react-router'
import Footer from '../Footer'

export const AuthLayout = () => {
  return (
    <div>
        <header>
            <Navber></Navber>
        </header>
        <main className=''>
            <Outlet></Outlet>
        </main>
        <section>
          <Footer></Footer>
        </section>
    </div>
  )
}
