import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout.jsx/RootLayout";
import Home from "../Home/Home";
import  Login  from "../../pages/Login";
import Register from "../../pages/Register";
import { AuthLayout } from "../AuthLayout/AuthLayout";
import AddReview from "../../pages/AddReview";
import MyReviews from "../../pages/MyReviews";

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