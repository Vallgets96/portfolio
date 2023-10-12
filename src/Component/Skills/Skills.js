import AOS from "aos"
import 'aos/dist/aos.css'
import Skillim from "../skillimg/Skimg";
function Skills() {
  AOS.init()
  return (
    <div className="bg-black text-white   flex flex-col justify-center " id="Skills">
      <div className="pt-[120px] " data-aos="fade-up" data-aos-duration="1500">
        <div className="text-center relative">
          <h1 className="absolute font-bold text-[33px] opacity-10 left-[33%] md:text-[54px] xl:text-[100px] md:left-[35%] lg:text-[70px] lg:left-[36%] xl:left-[36%]   ">
          My Skills</h1>
          <h1 className="font-bold text-[38px] relative z-40 pb-4 md:text-[50px] xl:mb-6 "> 
            My Skills
          </h1>
          <p className="text-gray-400 pb-20 p-3">
            A small river named Duden flows by their place and supplies
          </p>
        </div>
      </div>

      <div className=" lg:p-7  xl:p-14" data-aos="fade-up" data-aos-duration="1500">
        <div className="grid grid-cols-2 gap-x-44 gap-y-16  xl:grid-cols-4 place-items-center font-medium text-[17px] pl-32 pr-28 md:gap-[100px] md:gap-y-14 md:grid-cols-3">
          {
            Skillim.map((val)=>{
              return(
              <div>
              <div className="bg-[#000000] flex flex-col justify-center text-[13px] items-center h-[120px] w-[140px] rounded shadow-lg shadow-slate-300"><img className=" w-[68px] " src={val.Project} alt=""></img><div className="pt-4">{val.skill}</div></div>
              </div>
            )})
          }
         
        </div>
      </div>


   

    </div>
  );
}
export default Skills;
