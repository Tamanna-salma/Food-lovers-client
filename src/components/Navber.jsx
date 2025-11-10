import userimg from '../assets/user.png'
import { use } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from '../AuthContexts/AuthProvider';


const Navber = () => {
  const { user, logOut } = use(AuthContext);
  console.log(user);
  const handleLogout = () => {
    console.log("logout");

    logOut()
      .then(() => {
        toast.success("your logged out sucessfully")

      }).catch((error) => {
        console.log(error);
      })

  }
  const links = <>

    <div className='flex flex-col md:flex-row items-center  gap-1 lg:gap-3'>
      <li>
        <NavLink to='/' className={({ isActive }) =>
          isActive ? 'text-purple-600 border-b-2  border-purple-600  text-xl font-bold' : 'text-gray-600 text-xl font-bold hover:text-purple-600'
        }
        >Home</NavLink>
      </li>
      <li>
        <NavLink to='/services' className={({ isActive }) =>
          isActive ? 'text-purple-600 border-b-2  border-purple-600  text-xl font-bold' : 'text-gray-600 text-xl font-bold hover:text-purple-600'
        }
        >Services</NavLink>
      </li>
      <li>
        <NavLink to='/myProfile' className={({ isActive }) =>
          isActive ? 'text-purple-600 border-b-2 border-purple-600  text-xl font-bold' : 'text-gray-600 text-xl font-bold hover:text-purple-600'
        }
        >My Profile</NavLink>
      </li>
    </div>

  </>

  return (
    <div className="navbar bg-base-100 shadow-sm px-1 lg:px-5">

      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

            {links}
          </ul>
        </div>
        <div className='flex gap-2  items-center'>
          <Link to='https://www.warmpawsllc.com/'>  <img className=' w-10 lg:w-16 hidden lg:flex rounded-full' src="" alt="" /></Link>
          <h2 className="text-sm lg:text-2xl font-bold hidden md:flex text-[#380794]">WarmPaws</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">

          {links}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div className='flex items-center gap-4'>
          <div className="relative group">
           {user && <img referrerPolicy="no-referrer" className='w-12 rounded-full cursor-pointer' src={user?.photoURL ? user?.photoURL : userimg} alt="" />}
            {user?.displayName && (
              <p className="absolute left-1/2 -translate-x-1/2 mt-1 text-sm bg-gray-300 text-gray-700 p-2 rounded-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.displayName}
              </p>
            )}
          </div>

          {user ?
            (<button onClick={handleLogout} className="btn bg-fuchsia-800 hover:bg-fuchsia-500 text-white"> Logout</button>
            ) : (
              <>
              <Link to="/auth/login" className='btn bg-fuchsia-800 hover:bg-fuchsia-500 text-white px-10'>login</Link>
        <Link to="/auth/register" className="btn bg-fuchsia-800 hover:bg-fuchsia-500 text-white"> Register</Link>
        </>
            )}

        </div>



      </div>
    </div>
  )
}

export default Navber
