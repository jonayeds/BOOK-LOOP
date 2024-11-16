import { PiBookFill } from "react-icons/pi"
import { RiShining2Fill } from "react-icons/ri"
const HomeSubHeading = () => {

  return (
    <div className="flex subHeading md:flex-row flex-col items-center justify-around space-y-4 text-xs md:text-sm px-4   mt-[10vh]">
      <div className="flex group items-start  justify-center">        
      <p className="flex items-center gap-x-2"><PiBookFill className=""/> Swap. Share. Rediscover the Joy of Reading.</p>
      <RiShining2Fill className="group-hover:scale-150 duration-500 text-dark group-hover:rotate-180" />
      </div>
      <div className="flex group items-start  justify-center">        
      <p className="flex items-center gap-x-2"><PiBookFill className=""/>Your Next Favorite Book is Just a Loop Away.</p>
      <RiShining2Fill className="group-hover:scale-150 duration-500 text-dark group-hover:rotate-180" />
      </div>
      <div className="flex group items-start  justify-center">        
      <p className="flex items-center gap-x-2"><PiBookFill className=""/>Because Every Book Deserves a Second Reader.</p>
      <RiShining2Fill className="group-hover:scale-150 duration-500 text-dark group-hover:rotate-180" />
      </div>

    </div>
  )
}

export default HomeSubHeading