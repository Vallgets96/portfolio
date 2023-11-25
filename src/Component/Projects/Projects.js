import AOS from "aos"
import Data from "../Data/Data";
import { FaGithub } from "react-icons/fa";



function Projects (){
   AOS.init()
    return(
        <div className="bg-black text-white flex flex-col gap-7 overflow-hidden md:p-9  pb-[100px] " id="Projects">
            <div className="bg-black text-white flex flex-col pt-[180px] pb-[20px]">
                <div className=" relative text-center" data-aos="fade-up" data-aos-duration="1500">
                    <h1 className="absolute font-bold text-[30px] opacity-20 left-[25%] md:text-[53px] md:left-[31%] lg:text-[70px] lg:top-2 xl:text-[100px] xl:top-[-20px]"> My Projects</h1>
                    <h1 className="font-bold text-[34px] z-40 pb-4 md:text-[50px]"> My Projects</h1>
                    <p className="text-gray-400 p-2 xl:mt-5" >Some of my projects are done recently </p>
                </div>
            </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-7 place-items-center p-7  md:p-0  lg:p-5 xl:p-[80px] " data-aos="fade-up" data-aos-duration="1500">
            {
               Data.map((val)=>{
                  return(
                     <div className="relative h-[180px] md:h-[180px] lg:h-[230px] xl:h-[274px] group w-full shadow-[#6b6868] shadow-lg overflow-hidden" key={val.id}>
                         
                        <div className="absolute  w-full h-full bg-black bg-opacity-30 transition-all duration-700  group-hover:bg-[#333333]  group-hover:bg-opacity-80">
                        <div className="absolute top-0 group-hover:top-72 transition-all duration-500 "><img src={val.Cover} alt="cover"/></div>
                              <div className="flex flex-col justify-center items-center h-full text-[25px] 
                                 gap-2 opacity-0 group-hover:opacity-100 font-bold italic text-[#bab8b8] delay-150 ">{val.Pname}<div className="text-[15px] font-bold italic text-[#9a9898]">{val.skill}</div><a href={val.Github} className="transition-all delay-700 right-72 text-amber-400 cursor-pointer"><FaGithub/></a>

                              </div >
                                      
                        </div>
                       <img src={val.Project} alt="img"  className="w-full h-full"></img>
                     </div>
                  )
               }) 
            }
         </div>
        </div>
    )}

    export default Projects