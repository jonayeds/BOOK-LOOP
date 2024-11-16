import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger,useGSAP)

const Layout = () => {
  
  return (
    <div className=" bg-white   primary-font overflow-y-scroll  min-h-screen" >
        <div className="">
        <NavBar/>
        </div>

        <Outlet/>
    </div>
  )
}

export default Layout