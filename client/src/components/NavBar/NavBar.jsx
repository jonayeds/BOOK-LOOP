import AnimatedNavigation from "./AnimatedNavigation"
import {gsap} from "gsap"
import logo from "../../assets/logo_images/logoTranparantColor.png"
import MobileNavBar from "./MobileNavBar"
const NavBar = () => {
    const handleNavigationHover = (e)=>{
        gsap.to(".navigation", {
            width:e.target.offsetWidth,
            left:e.target.offsetLeft,
            duration:0.6,
            ease:"power2.out"

        })
    }    
    const handleMouseOut = ()=>{
        gsap.to(".navigation",{
            width:0,
            duration:0.6,
            ease:"power2.inOut"
        }
    )
}

  return (
    <nav className=" fixed w-[calc(100vw-7vw)]s  w-full px-[3vw]   top-0   " >
        <div className="flex s px-[2vw]     rounded-3xl bg-white   items-center    justify-between md:py-4 py-2  ">
           
            <div>
                <img src={logo} className="md:w-[13vw] w-[35vw] text-black" alt="" />
            </div>
            <div>
                <ul className="relative hidden   lg:flex gap-[2vw]   bg-white" onMouseLeave={handleMouseOut} >
                    <div className="w-0 h-full bg-[#F1F2ED]  z-0 absolute top-0 rounded-xl navigation"></div>
                    <li onMouseOver={handleNavigationHover} className="relatives">
                      <AnimatedNavigation  name={"Home"}  navLinkName={"home"} placeholderName={"homePlaceholder"} pageTo={"/"}/>  
                    </li>
                    <li onMouseOver={handleNavigationHover} className="relatives">
                      <AnimatedNavigation name={"Discover"}  navLinkName={"discover"} placeholderName={"discoverPlaceholder"} pageTo={"/discover"}/>  
                    </li>
                    <li onMouseOver={handleNavigationHover} className="relatives">
                        <AnimatedNavigation name={"Contact"} navLinkName={"contact"} placeholderName={"contactPlaceholder"} pageTo={"/contact"}  />
                    </li>
                </ul>
            </div>
            <div className="lg:hidden flex">
                <MobileNavBar/>
            </div>
            <div className="hidden md:flex">
                <button className="bg-black md:px-6 px-4 text-center py-2 text-white rounded-full" >Get Started</button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar