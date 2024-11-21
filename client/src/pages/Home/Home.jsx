
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
        start:"center top",
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
    <div className="homeContainer" >
      <div className="    px-[3.5vw]  font-heading text-dark  " >
        <HomeHeroSection />
        <HomeSubHeading />
        <HomeImagination />
      </div>
      <div className=" min-h-screen">
        <HomeHowToGuide />
      </div>
    </div>
  )
}

export default Home