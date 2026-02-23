import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import userimg from "../assets/user.png";
import foodlogo from "../assets/img.png";
import { AuthContext } from "../AuthContexts/AuthProvider";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("You have logged out successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  
  const navLinkStyles = ({ isActive }) =>
    isActive
      ? "text-purple-600 border-b-2 border-purple-600 text-lg font-semibold px-2 transition-all"
      : "text-gray-600 dark:text-gray-300 text-lg font-semibold hover:text-purple-600 dark:hover:text-purple-400 px-2 transition-all";

  const links = (
    <>
      <li><NavLink to="/" className={navLinkStyles}>Home</NavLink></li>
      <li><NavLink to="/allreviews" className={navLinkStyles}>All Reviews</NavLink></li>
      <li><NavLink to="/recipes" className={navLinkStyles}>Recipes</NavLink></li>
      <li><NavLink to="/about" className={navLinkStyles}>About</NavLink></li>
      <li><NavLink to="/contact" className={navLinkStyles}>Contact Us</NavLink></li>
      <li><NavLink to="/blog" className={navLinkStyles}>Blog</NavLink></li>
 
      {user && (
        <>
          <li><NavLink to="/dashboard/my-followers" className={navLinkStyles}>Followers</NavLink></li>
          <li><NavLink to="/dashboard" className={navLinkStyles}>Dashboard</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-200 dark:bg-slate-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        
        {/* Navbar Start: Mobile Menu & Logo */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2 text-gray-800 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 rounded-box mt-3 w-52 p-2 shadow-2xl z-50 text-base-content">
              {links}
            </ul>
          </div>

          <Link to="/" className="flex items-center">
            <img
              className="w-12 md:w-16 lg:w-20 object-contain dark:brightness-110"
              src={foodlogo}
              alt="logo"
            />
          </Link>
        </div>

        {/* Navbar Center: Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {links}
          </ul>
        </div>

        {/* Navbar End: Theme & Profile */}
        <div className="navbar-end gap-3 md:gap-5">
          <ThemeToggle />

          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 border-purple-500 hover:border-purple-600 transition-all"
              >
                <div className="w-10 rounded-full">
                  <img 
                    referrerPolicy="no-referrer" 
                    src={user?.photoURL ? user?.photoURL : userimg} 
                    alt="user profile" 
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow-2xl menu menu-sm dropdown-content bg-base-100 dark:bg-slate-800 rounded-xl w-52 z-50 border border-gray-200 dark:border-gray-700 text-base-content"
              >
                <li className="px-4 py-3 font-bold text-purple-700 dark:text-purple-400 border-b border-gray-100 dark:border-gray-700 mb-1">
                  {user?.displayName || "User"}
                </li>
               
                <li><NavLink to="/dashboard">Dashboard Home</NavLink></li>
                <li><NavLink to="/dashboard/add-review">Add Review</NavLink></li>
                <li><NavLink to="/dashboard/my-reviews">My Reviews</NavLink></li>
                <li><NavLink to="/dashboard/my-favourites">My Favourites</NavLink></li>
                <li><NavLink to="/dashboard/my-profile">My Profile</NavLink></li>
                <li><NavLink to="/dashboard/my-followers">Followers</NavLink></li>
                
                <li className="mt-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                  <button
                    onClick={handleLogout}
                    className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/auth/login"
                className="btn btn-sm md:btn-md bg-green-800 hover:bg-green-700 text-white border-none px-4 md:px-6 shadow-md"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-sm md:btn-md bg-transparent border-2 border-green-800 text-green-800 dark:text-green-400 dark:border-green-400 hover:bg-green-800 hover:text-white px-4 md:px-6 hidden sm:flex transition-all"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;