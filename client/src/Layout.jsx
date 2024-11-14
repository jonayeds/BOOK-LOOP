import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"

const Layout = () => {
  return (
    <div className=" bg-white   primary-font  min-h-screen">
        <div className="">
        <NavBar/>
        </div>
       
        <Outlet/>
    </div>
  )
}

export default Layout