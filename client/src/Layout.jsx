import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"

const Layout = () => {
  return (
    <div className="px-[7vw] w-screen min-h-screen">
        <NavBar/>
       
        <Outlet/>
    </div>
  )
}

export default Layout