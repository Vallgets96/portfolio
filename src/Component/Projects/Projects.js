import AOS from "aos"
import 'aos/dist/aos.css'
import Data from "../Data/Data";




function Projects (){
   AOS.init()
    return(
        <div className="bg-black text-white flex flex-col gap-7 overflow-hidden md:p-9  pb-[100px] " id="Projects">
            <div className="bg-black text-white flex flex-col pt-[180px] pb-[20px]">
                <div className=" relative text-center" data-aos="fade-up" data-aos-duration="1500">
                    <h1 className="absolute font-bold text-[30px] opacity-10 left-[25%] md:text-[53px] md:left-[31%] lg:text-[70px] lg:top-2 xl:text-[100px] xl:top-[-8px]"> My Projects</h1>
                    <h1 className="font-bold text-[34px] z-40 pb-4 md:text-[50px]"> My Projects</h1>
                    <p className="text-gray-400 p-2" >A small river named Duden flows by their place and supplies</p>
                </div>
            </div>

      {/* <div className=" grid grid-cols-1 md:grid-cols-2 gap-7 place-items-center p-7  md:p-0  lg:p-5 xl:p-[80px]" >
         <div className="w-full lg:h-[260px] xl:h-[310px] relative" data-aos="fade-up" data-aos-duration="1500">
            <div className="absolute top-0 left-0 w-full h-full  hover:bg-yellow-500 transition-all duration-300 opacity-5 hover:opacity-100">
            <div className=" flex flex-col justify-center items-center h-full gap-2">
               <h1 className=" text-[20px]">Cars Landing Page</h1>
               <h4 className=" text-[12px] font-bold tracking-[2px]">HTML-CSS</h4>
               </div>
            </div>
         <img className="h-full w-full" src={project1} alt="p1"></img></div>

         <div className="w-full  lg:h-[260px] xl:h-[310px]  relative " data-aos="fade-up" data-aos-duration="1500">
            <div className="absolute top-0 left-0 w-full h-full hover:bg-yellow-500 transition-all duration-300 opacity-0 hover:opacity-100">
               <div className=" flex flex-col justify-center items-center h-full gap-2">
               <h1 className=" text-[20px]">Web design</h1>
               <h4 className=" text-[12px] font-bold tracking-[2px]">HTML-CSS</h4>
               </div>
            </div>
         <img className="h-full   w-full" src={project2} alt="p2"></img></div>

         <div className="w-full  lg:h-[260px] xl:h-[310px]    relative" data-aos="fade-up" data-aos-duration="1500">
            <div className="absolute top-0 left-0 w-full h-full hover:bg-yellow-500 transition-all duration-300 opacity-0 hover:opacity-100">
            <div className=" flex flex-col justify-center items-center h-full gap-2">
               <h1 className=" text-[20px]">Johnwick Profile WebPage</h1>
               <h4 className=" text-[12px] font-bold tracking-[2px]">HTML-CSS</h4>
               </div>
            </div>
         <img className="h-full  w-full" src={project3} alt="p3"></img></div>

         <div className="w-full   lg:h-[260px] xl:h-[310px]  relative" data-aos="fade-up" data-aos-duration="1500">
            <div className="absolute top-0 left-0 w-full h-full hover:bg-yellow-500 transition-all duration-300 hover:bg-opacity-80">
            <div className=" flex flex-col justify-center items-center h-full gap-2 ">
               <h1 className=" text-[20px]">Greeny Website</h1>
               <h4 className=" text-[12px] font-bold tracking-[2px]">HTML-CSS</h4>
               </div>
            </div>
         <img className="h-full w-full" src={project4} alt="p4"></img></div>
        
         </div> */}

         <div className="grid grid-cols-1 md:grid-cols-2 gap-7 place-items-center p-7  md:p-0  lg:p-5 xl:p-[80px] " data-aos="fade-up" data-aos-duration="1500">
            {
               Data.map((val)=>{
                  return(
                     <div className="relative h-[180px] md:h-[180px] lg:h-[230px] xl:h-[280px] group w-full shadow-[#605d5d] shadow-lg ">
                        <div className="absolute w-full h-full bg-black bg-opacity-30  group-hover:bg-[#FFBD39] group-hover:bg-opacity-90">
                              <div className="flex flex-col justify-center items-center h-full text-[25px] 
                                 gap-2 opacity-0 group-hover:opacity-100">{val.Pname}<div className="text-[15px] font-bold">{val.skill}</div>
                              </div >
                                 
                        </div>
                       <img src={val.Project} alt="img" key={val.id} className="w-full h-full"></img>
                     </div>
                  )
               }) 
            }
         </div>
        </div>
    )}

    export default Projects