import { FaAirbnb } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { IoIosMenu } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Nav() {
  return (
    <nav className=" hidden  md:w-full md:flex items-center justify-between p-3 px-20">
        <Link to="/" className=" flex items-center font-bold text-2xl text-[#ff5a5f] " >
        <FaAirbnb className="text-4xl" />
        <span>airbnb</span>
        </Link>

        <ul className=" hidden lg:flex items-center justify-center ml-36 gap-7">
            <li className="font-bold text-[#484848]"><a href="#" >Logements</a></li>
            <li className=" text-[#484848]  "><a href="#" >Expériences</a></li>
           

        </ul>


        <div className="flex items-center justify-center gap-5 ">
          <ul>
          <li className=" text-[#484848]    "><a href="#" >Mettre mon logement sur Airbnb</a></li>

          </ul>
        
            <a href="#"><TbWorld/></a>
            <div  className="flex items-center justify-center gap-3 border border-[#rgb(237,237,237)] py-2 px-3 rounded-full hover:shadow-md cursor-pointer " >
             <IoIosMenu className=" text-xl   " />
             <FaRegUserCircle className=" text-3xl   " />
            </div>
        </div>



    </nav>
  )
}
