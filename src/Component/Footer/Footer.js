import AOS from "aos"
import 'aos/dist/aos.css'
import { BsFillCircleFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { BiSolidSend } from "react-icons/bi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-scroll";
function Footer(){
    AOS.init()
    return(
        <footer className="bg-black text-white">
        <div className=" p-6 grid grid-cols-1 gap-12 md:grid-cols-3  text-[16px] md:p-14 md:gap-0 lg:gap-0 lg:p-16 xl:p-[200px]" data-aos="fade-up" data-aos-duration="1500" >
            

            <div className="Two flex flex-col gap-3 ">
                <Link className="text-[24px] font-semibold pb-4">Links</Link>
                <Link to="Home" spy={true} smooth={true}  offset={-50}  duration={1000} className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>Home</Link>
                <Link to="About" spy={true} smooth={true}  offset={-50}  duration={1000} className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>About</Link>
                <Link to="Education" spy={true} smooth={true}  offset={-50}  duration={1000} className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>Education</Link>
                <Link to="Services" spy={true} smooth={true}  offset={-50}  duration={1000} className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>Services</Link>
                <Link to="Skills" spy={true} smooth={true}  offset={-50}  duration={1000} className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>Skills</Link>
                <Link to="Projects" spy={true} smooth={true}  offset={-50}  duration={1000} className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>Projects</Link>
                <Link to="Contact" spy={true} smooth={true}  offset={-50}  duration={1000} className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>Contact</Link>
                
            </div>

            <div className="Three flex flex-col gap-3">
                <h1 className="text-[24px] font-semibold pb-3">Services</h1>
                <h2 className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>Web Design</h2>
                <h2 className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>Branding</h2>
                <h2 className="text-gray-400 flex items-center gap-3"><BiSolidSend className="text-[18px]"/>Web Development</h2>
            </div>

            <div className="Four flex flex-col gap-3">
                <h1 className="text-[24px] font-semibold pb-3">Have Questions?</h1>
                <h2 className="text-gray-400 flex  items-center gap-5"><FaMapMarkerAlt className="text-[19px]"/>50/1 Anthoniyar Kovil Streeet, Kamaraj Nagar, Airport, Trichy </h2>
                <h2 className="text-gray-400 flex  items-center gap-5"><IoCall/>+91-6381023935</h2>
                <h2 className="text-gray-400 flex  items-center gap-5 "><FaEnvelope/>naveenraj6381@outlook.com</h2>
            </div>

            <div className="flex gap-2 mt-8">
                    <div className="relative"><BsFillCircleFill className="text-[#1A1A1A] text-[38px] relative"/><BsInstagram className=" absolute text-[20px] text-gray-400 top-[9px] left-[9px]"/></div>
                    <div className="relative"><BsFillCircleFill className="text-[#1A1A1A] text-[38px]  relative"/><FaXTwitter className=" absolute text-[20px] text-gray-400 top-[9px] left-[9px]"/></div>
                    <div className="relative"><BsFillCircleFill className="text-[#1A1A1A] text-[38px]  relative"/><FaFacebookF className="absolute text-[20px] text-gray-400 top-[9px] left-[9px]"/></div>
                </div> 
        </div>
        

        <div className="End text-gray-400 flex flex-col justify-center text-center pt-20 pb-8 p-7" >
                <p>2023 All rights reserved | This template is made with<BsFillSuitHeartFill/>by naveen</p>
            </div>
        </footer>
    )
}

export default Footer