import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout.jsx/RootLayout";
import Home from "../Home/Home";
import  Login  from "../../pages/Login";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            index: true,
            element:<Home></Home>,
            
        },
        
       {
        path:"/addReview",
        element:<PrivateRoute>
          <AddReview></AddReview>
        </PrivateRoute>
       },
       {
        path:"/my-followers",
        element:<MyFollowers></MyFollowers>

       },
       {
        path:"about",
        element:<About></About>
       },
       {
        path: "/myFavourites",
        element: <PrivateRoute>
          <MyFavourites></MyFavourites>
        </PrivateRoute>
       },
       {
        path:"/myreview",
        element:<PrivateRoute>
          <MyReviews></MyReviews>
        </PrivateRoute>
       },
       {
        path:"/myprofile",
        element:<PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
       },
       {
        path:"/allreviews",
        element:<AllReviews></AllReviews>
       },
       
        {
          path:"/fooddetails/:id",
          loader:({params})=>fetch(`https://food-lovers-server-blond.vercel.app/foods/${params.id}`),
          element:<FoodDetails></FoodDetails>
        },
        {
          path:"/recipes",
          element:<Recipes></Recipes>
        }
    ]
  },
  {
    path:"/auth",
    element:<AuthLayout></AuthLayout>,
    children:[
      {
            path:'/auth/register',
            element:<Register></Register>
        },
        {
          path:"/auth/login",
          element:<Login></Login>

        }, 
    ]
  
  },
  {
          path:"/*",
          element:<Error></Error>
        }
]);
export default router