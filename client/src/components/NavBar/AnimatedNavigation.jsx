/* eslint-disable react/prop-types */
import {gsap} from "gsap"

const AnimatedNavigation = ({name, placeholderName, navLinkName}) => {
    const handleNavAnimation = ()=>{
        const tl = gsap.timeline()

        tl.to(`.${navLinkName}`,{
            display:"flex",
            justifySelf:"start",
            width:62,
            duration:1,
        })
    }
    const navBarOutAnimation = ()=>{
        const tl = gsap.timeline()
        tl.to(`.${placeholderName}`, {
            width:62,
            duration:1
        })
        .to(`.${navLinkName}`, {
            display:"hidden",
            width:0,
            duration:0.2
        })
        .to(`.${placeholderName}`, {
            width:0,
            duration:0.2,
        })
        
    }
  return (
    <div className="relative " onMouseLeave={navBarOutAnimation} onMouseOver={handleNavAnimation}>
                            <p>{name}</p>
                            <div className={`w-0  h-[25px] absolute pointer-events-none  bg-white mt-2 z-10 ${placeholderName}`}></div>
                            <div className={`w-0 absolute z-0  hidden overflow-hidden mt-2 pointer-events-none ${navLinkName}`}>
                            <svg  height={"25"} className="" width={"62"}>
                            <path d="M 0 0 C 20 20, 40 20, 62 0"  stroke="black" style={{strokeWidth:"2px"}}  fill="transparent"/>
                            </svg>
                            </div>
                        </div>
  )
}

export default AnimatedNavigation