import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import userimg from "../assets/user.png";
import foodlogo from "../assets/img.png";
import { AuthContext } from "../AuthContexts/AuthProvider";

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

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 border-b-2 border-purple-600 text-lg font-semibold px-2"
              : "text-gray-600 text-lg font-semibold hover:text-purple-600 px-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allreviews"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 border-b-2 border-purple-600 text-lg font-semibold px-2"
              : "text-gray-600 text-lg font-semibold hover:text-purple-600 px-2"
          }
        >
          All Reviews
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/recipes"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 border-b-2 border-purple-600 text-lg font-semibold px-2"
              : "text-gray-600 text-lg font-semibold hover:text-purple-600 px-2"
          }
        >
          Recipes
        </NavLink>
      </li>
      <li>
  <NavLink
    to="/my-followers"
    className={({ isActive }) =>
      isActive
        ? "text-purple-600 border-b-2 border-purple-600 text-lg font-semibold px-2"
        : "text-gray-600 text-lg font-semibold hover:text-purple-600 px-2"
    }
  >
    Followers
  </NavLink>
</li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 border-b-2 border-purple-600 text-lg font-semibold px-2"
              : "text-gray-600 text-lg font-semibold hover:text-purple-600 px-2"
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-gray-200 shadow-sm sticky top-0 z-50">
     
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        
     
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
            >
              {links}
            </ul>
          </div>

          <Link to="/" className="flex items-center">
            <img
              className="w-12 md:w-16 lg:w-20 object-contain mix-blend-darken"
              src={foodlogo}
              alt="logo"
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            {links}
          </ul>
        </div>

        <div className="navbar-end gap-2 md:gap-4">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-2 border-purple-500 hover:border-purple-600"
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
                className="mt-3 p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-xl w-48 z-50 border"
              >
                <li className="px-4 py-2 font-bold text-purple-700 border-b mb-1">
                  {user?.displayName || "User"}
                </li>
                <li><NavLink to="/addReview">Add Review</NavLink></li>
                <li><NavLink to="/myreview">My Reviews</NavLink></li>
                <li><NavLink to="/myFavourites">My Favourites</NavLink></li>
                <li><NavLink to="/myprofile">My Profile</NavLink></li>
                <li className="mt-2 pt-2 border-t">
                  <button
                    onClick={handleLogout}
                    className="bg-red-50 text-red-600 font-bold hover:bg-red-100"
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
                className="btn btn-sm md:btn-md bg-green-800 hover:bg-green-700 text-white border-none px-4 md:px-6"
              >
                Login
              </Link>
              <Link
                to="/auth/register"
                className="btn btn-sm md:btn-md bg-transparent border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white px-4 md:px-6 hidden sm:flex"
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