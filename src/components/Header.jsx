import Logo from "../assets/logo.png"


const Header = () => {
    return(
        <div className="flex justify-between bg-orange-500 items-center p-4">
            <div>
                <img src={Logo} alt="" className="w-28" />
            </div>

            <div>
                <ul className="flex gap-3 items-center">
                    <li className="text-white font-[800] hover:bg-white hover:text-black cursor-pointer">Home</li>
                    <li className="text-white font-[800] hover:bg-white hover:text-black cursor-pointer">About</li>
                    <li className="text-white font-[800] hover:bg-white hover:text-black cursor-pointer">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header