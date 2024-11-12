import {createBrowserRouter} from "react-router-dom" 
import Layout from "../Layout"
import Home from "../pages/Home/Home"
import Discover from "../pages/discover/Discover"
import Contact from "../pages/contact/Contact"

export const router =  createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/discover",
                element:<Discover/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
        ]
    }
])