import { useContext } from "react";
import { AuthContext } from "../../AuthContexts/AuthProvider";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { FaChartPie, FaHeart, FaList, FaUser, FaUsers } from "react-icons/fa6";
import { FaHome, FaPlusCircle } from "react-icons/fa";
import ThemeToggle from "../ThemeToggle";


const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut().then(() => navigate("/"));
  };

 const menuItems = [
  { name: "Overview", path: "/dashboard", icon: <FaChartPie /> },
  { name: "My Profile", path: "/dashboard/my-profile", icon: <FaUser /> },
  { name: "Add Review", path: "/dashboard/add-review", icon: <FaPlusCircle /> },
  { name: "My Reviews", path: "/dashboard/my-reviews", icon: <FaList /> },
  { name: "My Favourites", path: "/dashboard/my-favourites", icon: <FaHeart /> }, 
  { name: "Followers", path: "/dashboard/my-followers", icon: <FaUsers /> }, 
];

  return (
    <div className="flex flex-col min-h-screen bg-base-100 dark:bg-slate-950 text-base-content">
      {/* Top Navbar */}
      <div className="navbar bg-base-200 dark:bg-slate-900 border-b dark:border-slate-800 px-4 md:px-8 sticky top-0 z-50">
        <div className="flex-1">
          <Link to="/" className="text-xl font-bold text-purple-600">FoodReview</Link>
        </div>
        <div className="flex-none gap-4">
          <ThemeToggle />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full border-2 border-purple-500">
                <img src={user?.photoURL} alt="profile" />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-800 rounded-box w-52 border dark:border-slate-700">
              <li><Link to="/dashboard/profile">Profile</Link></li>
              <li><Link to="/dashboard">Dashboard Home</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-base-200 dark:bg-slate-900 hidden md:flex flex-col border-r dark:border-slate-800">
          <ul className="menu p-4 gap-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive ? "bg-purple-600 text-white" : "hover:bg-purple-100 dark:hover:bg-slate-800"}`}>
                  {item.icon} {item.name}
                </NavLink>
              </li>
            ))}
            <div className="divider opacity-50"></div>
            <li><Link to="/" className="flex items-center gap-3"><FaHome /> Back to Home</Link></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Dashboard;