import { ScrollTrigger } from "gsap/ScrollTrigger"
import image1 from "../../assets/How_to_images/Shop giveaway.gif"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)
const HomeHowToGuide = () => {
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".svgLine",
        start: "top 80%",
        end: "bottom 60%",
        scrub:1,
        markers: false
      }
    })
    tl.from(".path", {
      // strokeDasharray: `50`,
      duration:1,
      // opacity:0,
      strokeDashoffset:480
    })
  })
  return (
    <div className="min-h-[200vh]">
      <h2 className="uppercase md:text-[2.5vw] text-[7vw] font-heading text-center mb-[7vh] ">How it works</h2>
      <div className="flex items-center justify-center gap-[3vw] ">
        <img src={image1} className="w-[50vw] md:w-[25vw] rounded-xl z-10" alt="" />
        <h3 className="md:text-[2vw] text-lg"> List Your Books</h3>
      </div>
      {/* Svg path */}
      <div className="flex justify-center ">
        <svg width="230" height="341" viewBox="0 0 230 341" className="md:w-[25vw] w-[50vw] z-0  svgLine -my-10 lg:-my-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  className="path" style={{
            strokeDasharray:`${480}`
          }} d="M16.5 1C13.5 51 -13 135.5 41 162.5C80.3573 182.179 162.454 150.493 189 189.5C213.5 225.5 190 287 223 331" stroke="white" strokeWidth="6" />
        </svg>
      </div>
    </div>
  )
}

export default HomeHowToGuide