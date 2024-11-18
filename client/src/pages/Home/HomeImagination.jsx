import image1 from "../../assets/featured_images/Imagination1.gif"
import image2 from "../../assets/featured_images/Imagination2.gif"
import image3 from "../../assets/featured_images/Imagination3.gif"

const HomeImagination = () => {
  return (
    <div className="mt-[20vh]">
      <h1></h1>
      <div className="flex items-center justify-around md:flex-row flex-col  ">
        <img src={image1} className="w-[75vw] md:w-[25vw]" alt="" />
        <img src={image2} alt="" className="w-[75vw] md:w-[25vw]" />
        <img src={image3} alt="" className="w-[75vw] md:w-[25vw]" />
      </div>
    </div>
  )
}

export default HomeImagination