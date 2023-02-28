import Logo from "../assets/logo.png"


const Header = () => {
    return (
        <div className="flex justify-between bg-blue-700 items-center p-4 px-8">
            <div>
                <img src={Logo} alt="" className="w-28" />
            </div>

            <div className="animate-fade-in">
                <ul className="flex gap-3 items-center">
                    <li className="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full transition duration-300 ease-in-out">Home</li>
                    <li className="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full transition duration-300 ease-in-out">About</li>
                    <li className="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full transition duration-300 ease-in-out">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header