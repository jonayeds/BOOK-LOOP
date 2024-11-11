import {gsap} from "gsap"


const NavBar = () => {
    const handleNavAnimation = ()=>{
        gsap.to(".navLink",{
            display:"flex",
            width:62,
            duration:1,

        })
    }
    const navBarOutAnimation = ()=>{
        gsap.to(".navLink", {
            width:0,
            duration:1,
        })
    }

  return (
    <nav className="relative w-screen -mx-[7vw] " >
        <div className="flex w-full items-center px-[7vw] fixed justify-between py-4  ">
            <div>
                <h1 className="text-5xl">Logo</h1>
            </div>
            <div>
                <ul className="flex gap-[2vw] font-semibold text-gray-700">
                    <li>
                        <div className="relative " onMouseOver={handleNavAnimation}>
                            <p>Discover</p>
                            <div className="w-0 absolute navLink hidden overflow-hidden mt-2">
                            <svg  height={"25"} className="" width={"62"}>
                            <path d="M 0 0 C 20 20, 40 20, 62 0"  stroke="black" style={{strokeWidth:"2px"}}  fill="transparent"/>
                            </svg>
                            </div>
                        </div>
                    </li>
                    <li>Contacts</li>
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