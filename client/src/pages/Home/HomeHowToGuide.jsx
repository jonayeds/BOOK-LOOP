import { ScrollTrigger } from "gsap/ScrollTrigger"
import image1 from "../../assets/How_to_images/Shop giveaway.gif"
import {gsap}from "gsap"
import { useGSAP } from "@gsap/react"
import svg1 from "../../assets/How_to_images/svg/Vector 1.svg"
gsap.registerPlugin(ScrollTrigger)
const HomeHowToGuide = () => {
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from(".line",{
      drawSVG:0,
      duration:1
    })
  })
  return (
    <div className="">
      <h2 className="uppercase md:text-[2.5vw] text-[7vw] font-heading text-center mb-[7vh] ">How it works</h2>
      <div className="flex items-center justify-center gap-[3vw] ">
        <img src={image1} className="w-[50vw] md:w-[25vw] rounded-xl" alt="" />
        <h3 className="md:text-[2vw] text-lg"> List Your Books</h3>
      </div>
      {/* Svg path */}
      <div className="flex justify-center">
        <img src={svg1} className=" md:w-[20vw] w-[50vw]" alt="" />
      </div>
    </div>
  )
}

export default HomeHowToGuide