
import HomeSubHeading from "./HomeSubHeading"
import HomeImagination from "./HomeImagination"
import HomeHowToGuide from "./HomeHowToGuide"


const Home = () => {

  return (
    <div className="bg-[#F1F2ED]   " >
      <div className="  mx-auto  font-heading text-dark max-w-[93vw] " >
        <HomeSubHeading />
        <HomeImagination />
        <HomeHowToGuide />
      </div>
    </div>
  )
}

export default Home