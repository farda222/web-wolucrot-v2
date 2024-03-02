import Navbar from "../Components/NavbarUtama";
import Icontask from "../assets/img/Icontask.svg";
import Back from "../assets/img/mingcute_left-line.svg";
import Cardimage from "../assets/img/Gambar-card.svg";
import { useNavigate } from "react-router-dom";
import Submit from "../Components/Studentsubmited";
import Pdf from "../assets/img/Convert_PDF_2.svg";
import Link from "../assets/img/Link_Chain.svg";

const Detailtask = () => {
  const navigate = useNavigate();
  return (
    <div className="font-Jakarta">
      <Navbar />
      <div onClick={() => navigate("/Yourclass")} className="absolute mt-12 ml-4">
        <img className="w-7" src={Back}></img>
      </div>
      <div className="flex mx-auto container align-middle items-center justify-center mt-10">
        <img className="ml-3 w-9" src={Icontask} />
        <div className="ml-5 -mt-1 flex-row">
          <h1 className="font-semibold text-sm">English Listening - Chapter 2</h1>
          <p className="text-[10px] mt-1 font-semibold">
            12 February 2024 - <span className="text-red-500">Deadline</span> 15 February 2024{" "}
          </p>
        </div>
      </div>
      <div className="bg-indigo-600 py-[0.5px] w-60 ml-24 mt-5 flex mx-auto container align-middle items-center justify-center"></div>
      <div className="flex mx-auto container align-middle items-center justify-center">
        <h1 className="text-xs w-80 mt-10">Please complete the assignment I have given and remain silent in the class during my teaching hours.</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-10">
        <img className="-ml-1 w-24" src={Cardimage}></img>
        <h1 className="mr-3 text-xs">Learn to read and listen to English</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-4">
        <div className="p-6 px-7 bg-neutral-300">
        <img className="w-5" src={Pdf}/>
        </div>
        <h1 className="mr-3 text-xs px-5">Click to download the file task</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-4">
        <div className="p-6 px-7 bg-neutral-300">
          <img className="w-5" src={Link}/>
        </div>
        <a className="mr-3 text-xs text-indigo-600 px-7" href="https://www.adidas.com/us" target="_blank" rel="noopener noreferrer">
          https://www.adidas.com...
        </a>
      </div>
      <Submit />
    </div>
  );
};

export default Detailtask;
