import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { MdHelp } from "react-icons/md";
import Home from "../assets/img/solar--home-smile-linear";
import Calendar from "../assets/img/Calendar";
import Trophy from '../assets/img/Trophy'
import Logo from '../assets/img/Logo.svg'
import Icon from '../assets/img/Account.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <Home size={25} className="mr-4" />, text: "Home" },
    { icon: <Calendar size={25} className="mr-4" />, text: "Calender" },
    { icon: <Trophy size={25} className="mr-4" />, text: "Quiz" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Account Name" },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm transition-all border-b-[0.1px] border-neutral-500 border-solid mb-0 font-custom">
      {/* Left side */}
      <div className="flex items-center p-3 z-50">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={20} />
        </div>
        <img className="w-4 ml-5" src={Logo}></img>
        <h1 className="text-lg font-bold sm:text-3xl lg:text-4xl px-2">
          Wolu
        </h1>
        <div>
          <img className="w-10 rounded-full h-10 ml-44" src={Icon}></img>
        </div>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full border border-black px-5 ">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}

      {/* Side drawer menu */}
      <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
        <AiOutlineClose onClick={() => setNav(!nav)} size={20} className="absolute right-[15.3rem] top-10 cursor-pointer" />
        <nav>
          <ul className="flex flex-col text-gray-800 py-5 mt-16">
            {menuItems.map(({ icon, text }, index) => {
              return (
                <div key={index}>
                  <li className="text-md font-medium mt-3 flex cursor-pointer hover:text-indigo-600 w-full mx-auto px-8 p-5 hover:bg-indigo-600 hover:bg-opacity-10 hover:border-l-4 hover:border-indigo-600 hover:border-solid transition-all">
                    {icon} {text}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
