import Logo from "../assets/logo.png"


const Header = () => {
    return (
        <div className="flex justify-between bg-orange-500 items-center p-4 px-8">
            <div>
                <img src={Logo} alt="" className="w-28" />
            </div>

            <div>
                <ul className="flex gap-3 items-center">
                    <li className="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full">Home</li>
                    <li className="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full">About</li>
                    <li className="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header