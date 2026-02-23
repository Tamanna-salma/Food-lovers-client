import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout.jsx/RootLayout";
import Home from "../Home/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import { AuthLayout } from "../AuthLayout/AuthLayout";
import AddReview from "../../pages/AddReview";
import MyReviews from "../../pages/MyReviews";
import FoodDetails from "../../pages/FoodDetails";
import AllReviews from "../../pages/AllReviews";
import Recipes from "../../pages/Recipes";
import Error from "../../pages/Error";
import MyFavourites from "../../pages/MyFavourites";
import PrivateRoute from "../../AuthContexts/PrivateRoute";
import MyProfile from "../../pages/MyProfile";
import MyFollowers from "../../pages/MyFollowers";
import About from "../../pages/About";
import ContactMe from "../../pages/ContactMe";
import Blog from "../../pages/Blog";
import DashboardHome from "../Dashboard/DashboardHome";
import Dashboard from "../Dashboard/Dashboard";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "allreviews", element: <AllReviews /> },
      { path: "recipes", element: <Recipes /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <ContactMe /> },
      {
        path: "fooddetails/:id",
        loader: ({ params }) => fetch(`https://food-lovers-server-blond.vercel.app/foods/${params.id}`),
        element: <FoodDetails />,
      },
    ],
  },

  //  (Role-Based & Private)
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
     <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true, 
        element:<DashboardHome></DashboardHome>
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "add-review",
        element: <AddReview />,
      },
      {
        path: "my-reviews",
        element: <MyReviews />,
      },
      {
        path: "my-favourites",
        element: <MyFavourites />,
      },
      {
        path: "my-followers",
        element: <MyFollowers />,
      },
    ],
  },


  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;