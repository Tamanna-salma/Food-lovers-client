
import { use } from 'react';
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../AuthContexts/AuthContext';

const Navber = () => {
const {user}=use(AuthContext)
    const handlelogout = () => {
        console.log('logout');

    }
    const links = <>
        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'text-pink-600 border-b-2 border-blue-700 text-xl font-bold' : 'text-gray-950 text-xl font-bold hover:text-pink-700'}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/allproducts" className={({ isActive }) => isActive ? 'text-pink-600 border-b-2 border-blue-700 text-xl font-bold' : 'text-gray-950 text-xl font-bold hover:text-pink-700'}>Allproducts</NavLink>
        </li>
                {
                    user && <>
                    <li>
                    <NavLink to="/myproducts" className={({ isActive }) => isActive ? 'text-pink-600 border-b-2 border-blue-700 text-xl font-bold' : 'text-gray-950 text-xl font-bold hover:text-pink-700'}>My products</NavLink>
                </li>
                <li>
                    <NavLink to="/my bids" className={({ isActive }) => isActive ? 'text-pink-600 border-b-2 border-blue-700 text-xl font-bold' : 'text-gray-950 text-xl font-bold hover:text-pink-700'}>My Bids</NavLink>
                </li>   
                </>
                
                   }


    </>
    return (
        <div>
            <div className="navbar bg-base-200 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Smart<span className='text-pink-600'>Deals</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">


                   {
                    user?
                    <button onClick={handlelogout} className="btn bg-fuchsia-800 hover:bg-fuchsia-500 text-white"> SignOut</button> :

                    <Link to="/register" className='btn bg-fuchsia-800 hover:bg-fuchsia-500 text-white px-10'>Login</Link>
                    }


                    <Link to="/register" className='btn bg-fuchsia-800 hover:bg-fuchsia-500 text-white px-10'>Register</Link>



                </div>
            </div>
        </div>
    )
}

export default Navber