import { ScrollTrigger } from "gsap/ScrollTrigger"
import image1 from "../../assets/How_to_images/Shop giveaway.gif"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import image2 from "../../assets/How_to_images/Discover_Books.gif"
import image3 from "../../assets/How_to_images/exchange.gif"
gsap.registerPlugin(ScrollTrigger)
const HomeHowToGuide = () => {
  
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".howToContainer",
        start: "top 80%",
        end: "bottom 80%",
        scrub:1,
        markers:true
      }
    })

    tl
    .from(".listing",{
      scale:0,
      duration:1
    })
    .from(".path", {
      duration:1,
      strokeDashoffset:480
    })
    // .from(".discover",{
    //   scale:0,
    //   duration:1
    // })
    .from(".path2",{
      duration:1,
      strokeDashoffset:480
    })
  })
  return (
    <div className="mb-[20vh] howToContainer bg-gray-300">
      <h2 className="uppercase md:text-[2.5vw] text-[7vw] font-heading text-center mb-[7vh] ">How it works</h2>
      {/* Listing */}
      <div className="flex items-center justify-center gap-[3vw] ">
        <img src={image1} className="listing w-[50vw] md:w-[25vw] rounded-xl z-10" alt="" />
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
      {/* discover */}
      <div className="flex items-center justify-center gap-[3vw]">
        <h3 className="md:text-[2vw] text-lg">Discover </h3>
        <img src={image2} alt="" className=" w-[50vw] md:w-[25vw] rounded-xl z-10" />
      </div>
      {/* svg path 2 */}
      <div className="flex justify-center ">
        <svg width="230" height="341" viewBox="0 0 230 341" className="md:w-[25vw] w-[50vw] z-0  svgLine -my-10 lg:-my-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  className="path2" style={{
            strokeDasharray:`${480}`
          }} d="M213.868 1C216.868 51 243.368 135.5 189.368 162.5C150.011 182.179 67.9149 150.493 41.3685 189.5C16.8685 225.5 40.3683 287 7.3685 331"  stroke="white" strokeWidth="6" />
        </svg>
      </div>
      {/* Meet and exchange */}
      <div className="flex items-center justify-center gap-[3vw]">
        <img src={image3} alt="" className=" w-[50vw] md:w-[25vw] rounded-xl z-10" />
        <h3 className="md:text-[2vw] text-lg">Meet & exchange</h3>
      </div>
    </div>
  )
}

export default HomeHowToGuide