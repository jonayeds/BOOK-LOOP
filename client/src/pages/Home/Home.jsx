import { gsap } from "gsap"
import { useGSAP  } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(useGSAP, ScrollTrigger)
const Home = () => {
  useGSAP( ()=>{
    gsap.from(".heading1",{
      left:0,
      opacity:0,
      display:"hidden",
      duration:1,
      ease:"power2.out"
    })
    gsap.from(".heading2",{
      right:0,
      display:"hidden",
      opacity:0,
      duration:1,
      ease:"power2.out"
    })
    const scrollTl = gsap.timeline({
      scrollTrigger:{
        trigger:".container",
        start:"top top",
        end:"bottom bottom",
        scrub:1,
        markers:false
      }
    })
    scrollTl.to(".heading1",{
      left:"20vw"
    },"scroll")
    .to(".heading2", {
      right:"20vw"
    }, "scroll")
})
  return (
    <div className="container pt-[15vh] mx-auto     h-[200vh] max-w-[93vw] " >
          <div className="flex justify-start ">
          <h1 className="md:text-[7vw] relative left-[5vw]   text-[10vw] uppercase font-semibold heading1 opacity-100">Pass along</h1>
          </div>
          <div className="flex justify-end ">
             
          <h1 className="heading2 opacity-100 relative right-[5vw]  md:text-[7vw] text-[10vw] uppercase font-semibold">Your favorite </h1>
          </div>
          <div className="flex justify-start">
          <h1 className="md:text-[7vw] text-[10vw] left-[5vw]  relative   uppercase heading1 font-semibold">reads</h1>
          </div>
    </div>
  )
}

export default Home