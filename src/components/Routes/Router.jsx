import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout.jsx/RootLayout";
import AllProducts from "../AllProduct/AllProducts";
import Home from "../Home/Home";
import Register from "../Register";
// import MyBids from "../MyBids";
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
            path:'register',
            element:<Register></Register>
        },
        
        // {
        //   path:'mybids',
        //   element:<MyBids></MyBids>
        // },
    ]
  },
]);
export default router