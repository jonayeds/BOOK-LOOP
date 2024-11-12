/* eslint-disable react/prop-types */
import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

const AnimatedNavigation = ({ name, placeholderName, navLinkName, pageTo }) => {
    const [XOffset, setXOffset] = useState(0)
    const location  = useLocation()
    const ref = useRef(null)
    const handleNavAnimation = (elem) => {
        const tl = gsap.timeline()
        setXOffset(elem.width)
        tl.to(`.${navLinkName}`, {
            display: "flex",
            justifySelf: "start",
            width: elem.width,
            duration: 1,
        })
    }
    useEffect(()=>{
        if((location.pathname === pageTo) && ref.current !== null ){
             handleNavAnimation(ref.current.getBoundingClientRect())
        }else if( (location.pathname !== pageTo) && ref.current !== null ){
            navBarOutAnimation(ref.current.getBoundingClientRect())
        }
    },[ref, location.pathname, pageTo])
    const navBarOutAnimation = (elem) => {
        const tl = gsap.timeline()
        tl.to(`.${placeholderName}`, {
            width: elem.width,
            duration: 1
        })
            .to(`.${navLinkName}`, {
                display: "hidden",
                width: 0,
                duration: 0.2
            })
            .to(`.${placeholderName}`, {
                width: 0,
                duration: 0.2,
            })

    }
    return (
        <NavLink to={pageTo} className={` `} ref={ref}   >
            {/* {({isActive})=>isActive? handleNavAnimation: ""} */}
            <p className="text-white px-4 py-2 text-opacity-80 z-10 tracking-widest mix-blend-difference  ">{name}</p>
            <div className={`w-0  h-[25px]  absolute pointer-events-none  bg-white mt-2 z-10 ${placeholderName}`}></div>
            <div className={`w-0 absolute z-0  hidden overflow-hidden mt-2 pointer-events-none ${navLinkName}`}>
                <svg height={XOffset / 3} className="w-full " >
                    <path d={`M 0 0 C ${XOffset / 3} ${(XOffset / 3) > 25 ? 25 : (XOffset / 3)}, ${(XOffset / 3) * 2} ${(XOffset / 3) > 25 ? 25 : (XOffset / 3)}, ${XOffset} 0`} stroke="black" style={{ strokeWidth: "2px" }} fill="transparent" />
                </svg>
            </div>
        </NavLink>
    )
}

export default AnimatedNavigation