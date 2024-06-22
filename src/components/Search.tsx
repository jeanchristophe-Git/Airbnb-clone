import { IoIosSearch } from "react-icons/io";
import { CiSearch } from "react-icons/ci";


export default function Search() {
  return (
   <div className=" p-5 border-b-2 md:pb-5">
     <div className="max-w-[670px] shadow-md rounded-full m-auto border border-gray-300 flex items-center gap-3 overflow-hidden">
      <button className="flex md:flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
      <div className=" flex items-center gap-3 " >
      <CiSearch className=" w-8 h-8 md:hidden " />
        <div className=" flex  flex-col items-start " >
        <p className="text-sm font-semibold sm:text-[17px] md:text-sm md:font-bold">Destination</p>
        <p className="text-sm hidden md:block md:text-sm ">Rechercher une destination</p>
        <p className="text-sm md:hidden  font-sans text-[12.9px] ">N'importe ou . Une semaine  . Ajouter des voyageurs</p>
        </div>
      </div>
      </button>
      <button className=" hidden md:flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold">Arrivée</p>
        <span className="text-sm">Quand ?</span>
      </button>
      <button className=" hidden md:flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold ">Départ</p>
        <span className="text-sm">Quand ?</span>
      </button>
      <button className=" hidden md:flex flex-col px-5 py-2 hover:rounded-full hover:bg-gray-200">
        <p className="text-sm font-bold">Voyageurs</p>
        <span className="text-sm">Ajouter un voyageurs</span>
      </button>
      <button className=" hidden md:block  rounded-full bg-[#FF5A5F] hover:bg-[#FC642D] text-white text-2xl p-3"><IoIosSearch/> </button>
    </div>
   </div>
  )
}