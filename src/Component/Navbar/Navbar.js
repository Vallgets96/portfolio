import {HiBars4} from "react-icons/hi2"
import { useState } from "react";
import { Link } from "react-scroll";



function Navbar() {
    
    const [snavbar ,showsNavbar ] = useState(false)

    function movement(){
        showsNavbar(!snavbar)
    }
  return (
    <header className=" w-full z-50 font-semibold ">
      <div className="flex justify-between p-4 items-center shadow-xl fixed top-0 bg-black  z-30 w-full text-white ">
        <h1 className="font-bold text-2xl logo xl:ml-[65px]">Naveen</h1>
        <button className="text-3xl font-bold text-gray-600 lg:hidden" onClick={movement}><HiBars4/></button>
        <div className="list-none gap-14 hidden lg:flex xl:mr-[62px]">
     
        <Link className="hover:border-b-2 border-[#ffbd39] cursor-pointer active:border-b-2" to="Home"
        spy={true}
        smooth={true} 
        offset={-50} 
        duration={1000}>Home</Link>
        
        <Link className="hover:border-b-2 border-[#ffbd39] cursor-pointer "  to="About"
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={1000}>About
        </Link>

        <Link className="hover:border-b-2 border-[#ffbd39] cursor-pointer" to="Education"
        spy={true} 
        smooth={true} 
        offset={-60} 
        duration={1000}>Education
        </Link>

        <Link className="hover:border-b-2 transition-all border-[#ffbd39] cursor-pointer" to="Services"
        spy={true} 
        smooth={true} 
        offset={-120} 
        duration={1000}>Services
        </Link>

        <Link className="hover:border-b-2 transition-all  border-[#ffbd39] cursor-pointer" to="Skills"
        spy={true} 
        smooth={true} 
        offset={5} 
        duration={1000}>Skills
        </Link>

        <Link className="hover:border-b-2 border-[#ffbd39] cursor-pointer" to="Projects"
        spy={true} 
        smooth={true}  
        duration={1000}>Projects
        </Link>
        
        <Link className="hover:border-b-2 border-[#ffbd39] cursor-pointer" to="Contact"
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={1000}>Contact
        </Link>
        
      </div>
      </div>
    <div className={snavbar ? " fixed top-16 w-full p-5 list-none  bg-[#ffbd39] text-center  transition-all duration-1500 delay-75 h-90 z-10" : "fixed -top-full text-center w-full z-10 transition-all duration-1500  list-none delay-75 "}>

      <div className="flex flex-col gap-7">
      <Link className="cursor-pointer " to="Home"
        spy={true}
        smooth={true} 
        offset={-50} 
        duration={1000}>Home</Link>
        
        <Link className="cursor-pointer "  to="About"
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={1000}>About
        </Link>

        <Link className="cursor-pointer" to="Education"
        spy={true} 
        smooth={true} 
        offset={-60} 
        duration={1000}>Education
        </Link>

        <Link className="cursor-pointer" to="Services"
        spy={true} 
        smooth={true} 
        offset={-120} 
        duration={1000}>Services
        </Link>

        <Link className="cursor-pointer" to="Skills"
        spy={true} 
        smooth={true} 
        offset={5} 
        duration={1000}>Skills
        </Link>

        <Link className="cursor-pointer" to="Projects"
        spy={true} 
        smooth={true}  
        duration={1000}>Projects
        </Link>
        
        <Link className="cursor-pointer" to="Contact"
        spy={true} 
        smooth={true} 
        offset={-50} 
        duration={1000}>Contact
        </Link>
      </div>
      </div>
    </header>
  );
}

export default Navbar;
