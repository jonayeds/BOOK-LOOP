import { ScrollTrigger } from "gsap/ScrollTrigger"
import image1 from "../../assets/featured_images/Imagination1.gif"
import image2 from "../../assets/featured_images/Imagination2.gif"
import image3 from "../../assets/featured_images/Imagination3.gif"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(ScrollTrigger)
const HomeImagination = () => {
  useGSAP(() => {
    const imaginationTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".imaginationContainer",
        start:"top 65%",
        end:"bottom bottom",
        markers:false,
        scrub:1
      }
    })
    imaginationTimeLine.from(".imagination",{
      scale:0,
      y:100,
      stagger:0.5,
      duration:1,
      ease:"back.out(1.5)",
    })
  })
  return (
    <div className="mt-[20vh] imaginationContainer md:min-h-[40vh] min-h-[120vh]">
      <h1 className="md:text-[4vw] text-[7vw] font-headings  uppercase text-center mb-16">Unlock Worlds of Imagination</h1>
      <div className="flex pb-24 items-center  gap-y-4 justify-around md:flex-row flex-col  ">
        <div className="p-6 imagination bg-white rounded-3xl">
          <img src={image1} className="w-[75vw] md:w-[25vw]" alt="" />
        </div>
        <div className="p-6 bg-white imagination rounded-3xl">
          <img src={image2} className="w-[75vw] md:w-[25vw]" alt="" />
        </div>
        <div className="p-6 bg-white imagination rounded-3xl">
          <img src={image3} className="w-[75vw] md:w-[25vw]" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeImagination