import AOS from "aos"

function Numbers(){
    AOS.init()
    return(
        <div className="bg-black  flex flex-col justify-center items-center text-center md:flex-row md:p-8 md:pt-[180px] md:mb-[-80px] lg:mb-[-125px]  lg:p-14  xl:mb-[-200px] xl:p-36 p-6 gap-6 xl:pt-64" id="Numbers">
            <div className="bg-[#1A1A1A] flex flex-col w-full h-32 lg:h-40 rounded-md justify-center md:z-50" data-aos="fade-up" data-aos-duration="1500">
                <h1 className=" text-[#ffbd39] text-[37px] font-bold">6</h1>
                <h1  className=" text-white text-[18px]">Projects</h1>
            </div>

            <div className="bg-[#1A1A1A] flex flex-col w-full h-32 lg:h-40 rounded-md justify-center md:z-50 " data-aos="fade-up" data-aos-duration="1500">
                <h1 className=" text-[#ffbd39] text-[37px] font-bold">1</h1>
                <h1  className=" text-white text-[18px]">Happy Customer</h1>
            </div>

            <div className="bg-[#1A1A1A] flex flex-col w-full h-32 lg:h-40 rounded-md justify-center md:z-50 " data-aos="fade-up" data-aos-duration="1500">
                <h1 className=" text-[#ffbd39] text-[37px] font-bold">100%</h1>
                <h1  className=" text-white text-[17px]">Customer Satisfaction</h1>
            </div>


        </div>

    )
}
export default Numbers