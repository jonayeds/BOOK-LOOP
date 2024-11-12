import AnimatedNavigation from "./AnimatedNavigation"
import {gsap} from "gsap"

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
    <nav className="relative w-screen -mx-[7vw] " >
        <div className="flex w-full items-center px-[7vw] fixed justify-between py-4  ">
            <div>
                <h1 className="text-5xl">Logo</h1>
            </div>
            <div>
                <ul className="relative  flex gap-[2vw]   bg-white" onMouseLeave={handleMouseOut} >
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
            <div>
                <button className="bg-black px-6 text-center py-2 text-white rounded-full" >Get Started</button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar