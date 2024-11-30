
import HomeSubHeading from "./HomeSubHeading"
import HomeImagination from "./HomeImagination"
import HomeHowToGuide from "./HomeHowToGuide"
import HomeHeroSection from "./HomeHeroSection"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollTrigger)
const Home = () => {
  useGSAP(()=>{
    const bgChangeTimeLine = gsap.timeline({
      scrollTrigger:{
        trigger:".homeContainer",
        start:"40% 20%",
        end:"bottom bottom",
        markers:false,
        scrub:1,
      }
    })
    bgChangeTimeLine
    .fromTo(".homeContainer",{
      backgroundColor:"#F1F2ED"
    },{
      backgroundColor:"#d9e6ee"
    })
  })
  return (
    <div className="" >
      <div className="font-heading text-dark homeContainer" >
        <HomeHeroSection />
        <HomeSubHeading />
        <HomeImagination />
      </div>
      <div className="    px-[3.5vw] min-h-screen bg-[#d9e6ee]">
        <HomeHowToGuide />
      </div>
    </div>
  )
}

export default Home