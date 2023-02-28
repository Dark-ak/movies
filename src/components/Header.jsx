import Logo from "../assets/logo.png"


const Header = () => {
    return (
        <div class="flex justify-between bg-blue-700 items-center p-4 px-8">
            <div>
                <img src={Logo} alt="" class="w-28" />
            </div>

            <div class="animate-fade-in">
                <ul class="flex gap-3 items-center sm:hidden">
                    <li class="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full transition duration-300 ease-in-out">Menu</li>
                </ul>
                <ul class="hidden sm:flex gap-3 items-center">
                    <li class="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full transition duration-300 ease-in-out">Home</li>
                    <li class="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full transition duration-300 ease-in-out">About</li>
                    <li class="text-white font-bold text-lg hover:bg-white hover:text-black cursor-pointer py-2 px-3 rounded-full transition duration-300 ease-in-out">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header