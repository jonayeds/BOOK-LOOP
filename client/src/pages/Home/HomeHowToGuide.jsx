import image1 from "../../assets/How_to_images/Shop giveaway.gif"
const HomeHowToGuide = () => {
  return (
    <div className="">
        <h2 className="uppercase md:text-[2.5vw] text-[7vw] font-heading text-center mb-[7vh] ">How it works</h2>
        <div className="flex items-center justify-center gap-[3vw] ">
        <img src={image1} className="w-[50vw] md:w-[25vw] rounded-xl" alt="" />
          <h3 className="md:text-[2vw] text-lg"> List Your Books</h3>
        </div>
    </div>
  )
}

export default HomeHowToGuide