import Navbar from "../Components/NavbarUtama";
import Icontask from "../assets/img/Icontask.svg";
import Back from "../assets/img/mingcute_left-line.svg";
import Cardimage from "../assets/img/Gambar-card.svg";
import { useNavigate } from "react-router-dom";
import Iconaccount from "../assets/img/Account.jpg";
import Submit from "../Components/Studentsubmited";

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
      <div className="bg-indigo-600 py-[0.5px] w-60 ml-28 mt-5 flex mx-auto container align-middle items-center justify-center"></div>
      <div className="flex mx-auto container align-middle items-center justify-center">
        <h1 className="text-xs w-80 mt-10">Please complete the assignment I have given and remain silent in the class during my teaching hours.</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-10">
        <img className="-ml-1 w-24" src={Cardimage}></img>
        <h1 className="mr-3 text-xs">Learn to read and listen to English</h1>
      </div>
      <div className="border-[1px] border-neutral-300 w-fit h-fit rounded-[8.87px] flex mx-auto container align-middle items-center justify-center gap-4 mt-4">
        <img className="-ml-1 w-24" src={Cardimage}></img>
        <h1 className="mr-3 text-xs">Learn to read and listen to English</h1>
      </div>
      <div className="relative flex mx-auto container align-middle items-center justify-center mt-14 w-[90%] bg-white shadow-xl shadow-neutral-100 rounded-lg py-2 px-7 mb-10">
        {" "}
        <img
          src={Iconaccount} // Ganti dengan path gambar Anda
          alt="Icon"
          className="h-10 w-10  rounded-full"
        />
        <input type="text" className="ml-10 py-3 px-3" placeholder="Type something..."></input>
      </div>
      <Submit/>
    </div>
  );
};

export default Detailtask;
