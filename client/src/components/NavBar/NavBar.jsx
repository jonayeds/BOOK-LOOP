
const NavBar = () => {
  return (
    <nav className="relative w-screen -mx-[7vw] " >
        <div className="flex w-full items-center px-[7vw] fixed justify-between py-4  bg-gray-300">
            <div>
                <h1 className="text-5xl">Logo</h1>
            </div>
            <div>
                <ul className="flex gap-[2vw]">
                    <li>Discover</li>
                    <li>Contacts</li>
                </ul>
            </div>
            <div>
                <button>Get Started</button>
            </div>
        </div>
    </nav>
  )
}

export default NavBar