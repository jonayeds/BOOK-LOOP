import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import {gsap} from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger,useGSAP)

const Layout = () => {
  const handleNavScroll=()=>{
    console.log("j")  
    // gsap.to(".navBar",{
    //     marginTop:-100
    //   })
  }
  // useGSAP(()=>{
  //   const navScroll = gsap.timeline(
  //     {
  //       scrollTrigger:{
  //         trigger:".layout",    
  //         start:"top top",
  //         end:""
  //       }
  //     }
  //   )
  //   gsap.to("navBar",{
  //     marginTop:-100
  //   })
  // })
  return (
    <div className=" bg-white   primary-font overflow-y-scroll  min-h-screen" onScroll={handleNavScroll}>
        <div className="navBar">
        <NavBar/>
        </div>

        <Outlet/>
    </div>
  )
}

export default Layout