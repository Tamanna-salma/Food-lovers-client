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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children:[
        {
            index: true,
            element:<Home></Home>
        },
        
       {
        path:"/addReview",
        element:<AddReview></AddReview>
       },
       {
        path:"/myreview",
        element:<MyReviews></MyReviews>
       },
       {
        path:"/allreviews",
        element:<AllReviews></AllReviews>
       },
        {
          path:"/fooddetails/:id",
          loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`),
          element:<FoodDetails></FoodDetails>
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
  }
]);
export default router