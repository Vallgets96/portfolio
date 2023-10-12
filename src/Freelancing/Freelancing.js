import AOS from "aos"
import bgimg from "../img1/bg_1.jpg"
function Freelancing (){
    AOS.init()
    return(
        <div className="bg-black text-white  relative bg-fixed  md:pb-12" style={{backgroundImage:`url(${bgimg})`}} >
            <div className="h-[450px] w-full lg:h-[550px]  flex flex-col justify-center text-center items-center overflow-hidden  " data-aos="fade-up" data-aos-duration="1500" >
            <h1 className="z-10 text-[35px] font-extrabold text-white md:text-[49px] ">Im <span className="text-[#ffbd39]"> Available</span> For Freelancing</h1>
            <div className=" text-xs pr-8 pl-8 p-6 md:text-[14px]">I can create authentic websites of my ideas it will be always out of the world</div>
            <button className=" text-[13px] bg-[#ffbd39] rounded-r-full text-black rounded-l-full w-[150px] h-[50px] font-bold tracking-[2px]"> HIRE ME </button>
            </div>
        </div>
        
    )
}
export default Freelancing