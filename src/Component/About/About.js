import AOS from "aos"

function About (){
    AOS.init()
    return(
        <div className="bg-black relative text-white" id="About">
            <div className="p-8 pl-5 flex flex-col gap-8 md:pl-14" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="absolute font-bold text-[28px] opacity-10 left-[12px] md:text-[53px] md:left-[8px] lg:text-[72px]  lg:top-[28px] lg:left-[26px] xl:text-[92px] xl:left-[14px] xl:top-[4px] ">About</h1>
            <h1 className=" relative font-bold text-[38px] z-40 md:text-[50px]">About Me</h1>
            
            <div className="main flex gap-6 ">
                
                <div className="flex flex-col gap-2" >
                    <h3 className="text-[16px] font-bold ">Name:</h3>
                    <h3 className="text-[16px] font-bold ">DateofBirth:</h3>
                    <h3 className="text-[16px] font-bold  pb-6 md:pb-0">Address:</h3>
                    <h3 className="text-[16px] font-bold ">Zip code :</h3>
                    <h3 className="text-[16px] font-bold ">Email :</h3>
                    <h3 className="text-[16px] font-bold ">Phone :</h3>
                </div>

                <div className="flex flex-col gap-2" >
                    <h3 className="text-[16px] text-gray-400">Naveen Raj</h3>
                    <h3 className="text-[16px] text-gray-400">September 08,2001</h3>
                    <h3 className="text-[16px] text-gray-400">Anthniyar Kovil Street, Kamaraj Nagar Airport, Trichy</h3>
                    <h3 className="text-[16px] text-gray-400">620007</h3>
                    <h3 className="text-[16px] text-gray-400">naveenraj6381@outlook.com</h3>
                    <h3 className="text-[16px] text-gray-400">+91-6381023935</h3>
                </div>
            </div>
            <div className="flex flex-col gap-7">
            <h1 className="text-[20px] font-medium "><span className="text-[#ffbd39] ">50</span> Projects completed</h1>
            <button className=" bg-[#ffbd39] p-4 rounded-r-full text-black rounded-l-full w-[160px] text-[12px] h-[48px] font-bold tracking-[2px] ">DOWNLOAD CV</button>
            </div>
            </div>
        </div>
    )
}
export default About 