import AnimatedNavigation from "./AnimatedNavigation"


const NavBar = () => {
    

  return (
    <nav className="relative w-screen -mx-[7vw] " >
        <div className="flex w-full items-center px-[7vw] fixed justify-between py-4  ">
            <div>
                <h1 className="text-5xl">Logo</h1>
            </div>
            <div>
                <ul className="flex gap-[2vw] font-semibold text-gray-700">
                    <li>
                      <AnimatedNavigation name={"Discover"} navLinkName={"discover"} placeholderName={"discoverPlaceholder"}/>  
                    </li>
                    <li>
                        <AnimatedNavigation name={"Contact"} navLinkName={"contact"} placeholderName={"contactPlaceholder"}  />
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