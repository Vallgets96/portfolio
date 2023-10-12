import AOS from "aos"
import 'aos/dist/aos.css'
import { IoCall } from "react-icons/io5";
import { FaMapSigns } from "react-icons/fa";
import { BsFillCircleFill } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
function Contact (){
    AOS.init()
    return(
        <div className="bg-black  text-white flex flex-col gap-24 pt-52 " id="Contact">
            <div className=" pt-[80px]" data-aos="fade-up" data-aos-duration="1500" >
                <div className="text-center relative">
                <h1 className="absolute font-bold text-[30px] opacity-10 left-[30%] md:text-[54px] md:left-[238px] lg:text-[70px] lg:left-[32%] xl:text-[100px] xl:left-[32%]  ">Contact Me</h1>
                    <h1 className="font-bold text-[38px] z-40 pb-4 md:text-[50px]"> Contact Me</h1>
                    <p className="text-gray-400 p-2" >A small river named Duden flows by their place and supplies</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:p-16 lg:gap-3 place-items-center" data-aos="fade-up" data-aos-duration="1500" >
                <div className="flex flex-col justify-center items-center text-center  gap-5">
                    <div className="text-[100px] text-[#1A1A1A] relative"><BsFillCircleFill className="relative"/><FaMapSigns className="absolute top-9 left-8 text-[#ffbd39] text-[33px]"/></div>
                    <div className="  font-semibold text-[18px]" >ADDRESS</div>
                    <div className="p-10 pt-0 pb-0 text-gray-400 text-[14px] md:pb-[90px] lg:pb-0" >50/1 Anthniyar Kovil Street, Kamaraj Nagar Airport, Trichy</div>
                </div>

                <div className="flex flex-col justify-center items-center text-center gap-5">
                    <div className="text-[100px] text-[#1A1A1A] relative"><BsFillCircleFill className="relative"/><IoCall className="absolute top-9 left-8 text-[#ffbd39] text-[33px]"/></div>
                    <div className="  font-semibold text-[18px]" >CONTACT</div>
                    <div className="p-10 pt-0 pb-0 text-gray-400 text-[14px] md:pb-[90px] lg:pb-0" >+91-6381023935</div>
                </div>

                <div className="flex flex-col justify-center items-center text-center gap-5">
                    <div className="text-[100px] text-[#1A1A1A] relative"><BsFillCircleFill className="relative"/><BiLogoTelegram className="absolute top-9 left-8 text-[#ffbd39] text-[33px]"/></div>
                    <div className="  font-semibold text-[18px]" >EMAIL ADDRESS</div>
                    <div className="p-10 pt-0 pb-0 text-gray-400 text-[14px]" >naveenraj6381@outlook.com</div>
                </div>

                <div className="flex flex-col justify-center items-center text-center gap-5">
                    <div className="text-[100px] text-[#1A1A1A] relative"><BsFillCircleFill className="relative"/><FaLinkedinIn className="absolute top-9 left-8 text-[#ffbd39] text-[33px]"/></div>
                    <div className="  font-semibold text-[18px]" >LINKEDIN</div>
                    <div className="p-10 pt-0 pb-0 text-gray-400 text-[14px]" >https://www.linkedin.com/in/naveenraj6381</div>
                </div>

                
            </div>
            <div className="flex justify-center" data-aos="fade-up" data-aos-duration="1500" >
                    <form className="bg-white w-[265px] flex flex-col justify-center items-center gap-4 rounded-sm ">
                        <input className="mt-6 w-56 h-[40px] border border-gray-400 rounded-md " type="text" placeholder="  Your name"></input>
                        <input className=" w-56 h-[40px] border border-gray-400 rounded-md" type="text" placeholder="  Mail"></input>
                        <input className=" w-56 h-[40px] border border-gray-400 rounded-md" type="text" placeholder="  Subject"></input>
                        <textarea class="resize-none border rounded-md p-2 w-56  border-gray-400 mb-4" rows="4" placeholder="Messege"></textarea>
                        <button className=" bg-[#ffbd39] rounded-r-full text-black rounded-l-full w-[170px] h-[38px] font-bold text-[11px] tracking-[2px] mb-4"> SEND MESSAGE </button>

                    </form>
                </div>
                

            
        </div>
    )}
    export default Contact