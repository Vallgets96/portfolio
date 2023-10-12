import AOS from "aos"
import Typed from 'react-typed';   


function Hero () {

    AOS.init()
    return(
    <div>
        <div className="bg-black text-white pt-[135px] flex flex-col  w- full justify-center text-center" id="Home" >
            <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1500">
              <h3 className="text-[#ffbd39] text-[14px] font-semibold pt-[100px] ">HELLO!</h3>
                <h1 className="text-[40px] font-bold md:text-[50px] lg:text-[60px] xl:text-[65px]">I'm <span className="text-[#ffbd39] lg:text-[60px]">Naveen Raj</span></h1>
                <Typed className="text-[30px]"
                    strings={['Mern Stack Developer',"Frontend developer"]}
                    typeSpeed={30}
                    backSpeed={40}
                    loop
                />
                <div className="pb-[180px] flex gap-4 justify-center text-[12px] xl:text-[14px] pt-4"><button className=" bg-[#ffbd39] p-4 rounded-r-full text-black rounded-l-full w-[120px] h-[50px] xl:h-[60px] xl:w-[135px]  font-bold "> HIRE ME </button>
                 <button className=" p-4 border rounded-r-full rounded-l-full w-[110px] h-[48px] xl:h-[60px] xl:w-[135px] font-semibold" >MY WORKS</button></div>
              </div>
            </div>
        </div>
    )
}
export default Hero