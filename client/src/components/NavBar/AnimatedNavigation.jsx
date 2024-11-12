/* eslint-disable react/prop-types */
import {gsap} from "gsap"
import { useState } from "react"

const AnimatedNavigation = ({name, placeholderName, navLinkName}) => {
    const [XOffset, setXOffset] = useState(62)
    const handleNavAnimation = (e)=>{
        const tl = gsap.timeline()
        setXOffset(e.target.offsetWidth)
        tl.to(`.${navLinkName}`,{
            display:"flex",
            justifySelf:"start",
            width:e.target.offsetWidth,
            duration:1,
        })
    }
    const navBarOutAnimation = (e)=>{
        const tl = gsap.timeline()
        tl.to(`.${placeholderName}`, {
            width:e.target.offsetWidth,
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
                            <div className={`w-0  h-[25px]  absolute pointer-events-none  bg-white mt-2 z-10 ${placeholderName}`}></div>
                            <div className={`w-0 absolute z-0  hidden overflow-hidden mt-2 pointer-events-none ${navLinkName}`}>
                            <svg  height={XOffset/3} className="w-full " >
                            <path d={`M 0 0 C ${XOffset/3} ${(XOffset/3)>25 ? 25 : (XOffset/3)}, ${(XOffset/3)*2} ${(XOffset/3)>25 ? 25 : (XOffset/3)}, ${XOffset} 0`}  stroke="black" style={{strokeWidth:"2px"}}  fill="transparent"/>
                            </svg>
                            </div>
                        </div>
  )
}

export default AnimatedNavigation