import {gsap} from "gsap"


const NavBar = () => {
    const handleNavAnimation = ()=>{
        const tl = gsap.timeline()

        tl.to(".navLink",{
            display:"flex",
            justifySelf:"start",
            width:62,
            duration:1,
        })
    }
    const navBarOutAnimation = ()=>{
        const tl = gsap.timeline()
        tl.to(".placeHolder", {
            width:62,
            duration:1
        })
        .to(".navLink", {
            display:"hidden",
            width:0,
            duration:0.2
        })
        .to(".placeHolder", {
            width:0,
            duration:0.2,
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
                        <div className="relative " onMouseLeave={navBarOutAnimation} onMouseOver={handleNavAnimation}>
                            <p>Discover</p>
                            <div className="w-0 placeHolder h-[25px] absolute   bg-white mt-2 z-10"></div>
                            <div className="w-0 absolute z-0 navLink hidden overflow-hidden mt-2">
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