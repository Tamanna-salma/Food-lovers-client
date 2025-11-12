import { use } from "react";
import { Link, NavLink } from "react-router";
import { toast } from "react-toastify";
import userimg from "../assets/user.png";
import foodlogo from "../assets/img.png";
import { AuthContext } from "../AuthContexts/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("You have logged out successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 border-b-2 border-purple-600 text-lg font-semibold"
              : "text-gray-600 text-lg font-semibold hover:text-purple-600"
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
              ? "text-purple-600 border-b-2 border-purple-600 text-lg font-semibold"
              : "text-gray-600 text-lg font-semibold hover:text-purple-600"
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
              ? "text-purple-600 border-b-2 border-purple-600 text-lg font-semibold"
              : "text-gray-600 text-lg font-semibold hover:text-purple-600"
          }
        >
      Recipes
        </NavLink>

      </li>

    </>

  )

  return (
    <div className="navbar bg-[#f6f6f6] shadow-sm px-2 lg:px-5">
      {/* Left: Logo */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-4"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box  mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link
          to="/"
          className="flex items-center gap-2 font-bold"
        >
          <img
            className="w-24 lg:w-32"
            src={foodlogo}
            alt=""
          />

        </Link>
      </div>


      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-4">{links}</ul>
      </div>


      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  src={user?.photoURL || userimg}
                  alt="User"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-base-200 cursor-pointer rounded-box w-32"
            >
              <li className="text-center font-semibold">{user?.displayName}</li>
              <div className="divider  my-1"></div>
              <div className="">
               {
                user && <>
                 <li>
                  <NavLink to="/addReview">Add Review</NavLink>
                </li>
                <li>
                  <NavLink to="/myreview">My Reviews</NavLink>
                </li>
                <li>
                  <NavLink to="/myFavourites">My Favourites</NavLink>
                </li>
                </>
               }
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 font-semibold hover:text-red-700"
                  >
                    Logout
                  </button>
                </li>
              </div>
            </ul>
          </div>
        ) : (
          <>
            <Link
              to="/auth/login"
              className="btn bg-green-800 hover:bg-green-600 text-white px-6"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="btn  bg-green-800 hover:bg-green-600 text-white px-6"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
