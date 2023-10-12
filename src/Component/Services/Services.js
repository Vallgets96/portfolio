import AOS from "aos"

import { FaPanorama } from "react-icons/fa6";
import { AiFillSketchCircle } from "react-icons/ai";
import { MdOutlineImportantDevices } from "react-icons/md";
import { LuCodesandbox } from "react-icons/lu";
function Services (){
    AOS.init()
    return( 
        <div>
            <div className=" bg-black text-white">
               <div className="text-center relative p-5 " data-aos="fade-up" data-aos-duration="1500" id="Services">
                    <h1 className="absolute font-bold text-[30px] opacity-20 left-[33%] md:text-[55px] md:left-[36%] lg:text-[71px] lg:left-[37%] xl:text-[100px] xl:left-[490px] xl:bottom-[2px]">Services</h1>
                    <h1 className="font-bold text-[38px] z-40 pb-4 md:text-[50px]">Services</h1>
                    <p className="text-gray-400 text-[16px]" >A small river named Duden flows by their place and supplies</p>
                </div>
            </div>


            <div className="bg-black text-white grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 pt-[80px] p-8 gap-9  lg:p-14">
                

                <div className="flex flex-col justify-center items-center" >
                    <div className="bg-[#1A1A1A] w-full h-[200px] group relative text-center md:h-[240px] xl:h-56 " data-aos="fade-up" data-aos-duration="1500">
                        <div className=" absolute top-0 text-white text right-0 hover:bg-[#FFBD39] duration-100 delay-100 w-full h-full  ">
                            <div className="flex justify-center text-[72px] text-[#FFBD39] group-hover:text-black mt-8 "><FaPanorama/></div>
                            <h2 className="mt-[28px] -mb-2 text-[13px] tracking-[2px] font-semibold  group-hover:text-black ">WEB DESIGN</h2>
                            <span className="text-[#FFBD39] group-hover:text-black">_______</span>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#1A1A1A] group w-full h-[200px] relative text-center md:h-[240px] " data-aos="fade-up" data-aos-duration="1500">
                        <div className=" absolute top-0 text-white text right-0 hover:bg-[#FFBD39] duration-100 delay-100 w-full h-full hover:text-black  ">
                        <div className="flex justify-center text-[72px] text-[#FFBD39] group-hover:text-black mt-8 "><AiFillSketchCircle/></div>
                            <h2 className="mt-[30px] -mb-2 text-[13px] tracking-[2px] font-semibold">BRANDING</h2>
                            <span className="text-[#FFBD39] group-hover:text-black ">_______</span>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#1A1A1A] w-full group h-[200px] relative text-center md:h-[240px] " data-aos="fade-up" data-aos-duration="1500">
                        <div className=" absolute top-0 text-white text right-0 hover:bg-[#FFBD39] duration-100 delay-100 w-full h-full hover:text-black  ">
                        <div className="flex justify-center text-[70px] text-[#FFBD39] group-hover:text-black mt-8 "><MdOutlineImportantDevices/></div>
                            <h2 className="mt-[30px] -mb-2 text-[13px] tracking-[2px] font-semibold">WEB DEVELOPMENT</h2>
                            <span className="text-[#FFBD39] group-hover:text-black">_______</span>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#1A1A1A] w-full group h-[200px] relative text-center md:h-[240px] " data-aos="fade-up" data-aos-duration="1500">
                        <div className=" absolute top-0 text-white text right-0 hover:bg-[#FFBD39] duration-100 delay-100 w-full h-full hover:text-black  ">

                        <div className="flex justify-center text-[69px] text-[#FFBD39] group-hover:text-black mt-8 "><LuCodesandbox/></div>
                            <h2 className="mt-[30px] -mb-2 text-[13px] tracking-[2px] font-semibold">3D MODELING</h2>
                            <span className="text-[#FFBD39] group-hover:text-black">_______</span>
                        </div>
                    </div>

                </div>





            </div>
        </div>
    )
}

export default Services