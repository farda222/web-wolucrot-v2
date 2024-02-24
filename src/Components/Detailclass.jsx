//import Navbar from "../Components/NavbarUtama";
import { useState } from "react";
import Iconaccount from "../assets/img/Account.jpg";
import Navbar from '../Components/NavbarUtama'
import Button from '../Components/Buttontaskkandoverlay'

const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:w-[60%] lg:float-right font-Jakarta">
      <Navbar/>
      <nav className="bg-white p-4 px-12 mt-4 font-Jakarta">
        <ul className="flex justify-between items-center">
          <li className="mr-2">
            <a href="#" className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Task
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Quiz
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Member
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-indigo-600 hover:border-b-4 hover:border-indigo-600 w-56 font-semibold transition-all">
              Forum
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center align-middle items-center mx-auto container gap-6 mt-7 ml-1 font-Jakarta">
        <h1 className="text-black font-semibold text-2xl">English XI PPLG 1</h1>
        <button className="text-white bg-indigo-600 w-16 h-7 font-semibold rounded-md text-xs">Share</button>
        <div className="relative flex-row -ml-4">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center w-8 h-8 bg-white rounded-full focus:outline-none focus:bg-gray-300 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth={3.75} d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 1
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 2
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Menu Item 3
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-6 mt-10 bg-neutral-100 p-3 font-Jakarta">
        <h1 className="text-green-500 font-semibold ml-3">Online</h1>
        <div className="flex gap-2">
          <img className="w-7  h-7 rounded-full " src={Iconaccount}></img>
          <img className="w-7  h-7 rounded-full " src={Iconaccount}></img>
          <img className="w-7  h-7 rounded-full " src={Iconaccount}></img>
          <img className="w-7  h-7 rounded-full " src={Iconaccount}></img>
          <img className="w-7  h-7 rounded-full " src={Iconaccount}></img>
        </div>
      </div>
      <Button/>
    </div>
  );
};
export default Detail;
