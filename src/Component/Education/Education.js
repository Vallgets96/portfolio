import AOS from "aos"

function Eduction() {
  AOS.init()
  return (
    <main>
      <div className="  bg-black text-white" id="Education">
      <div className="relative flex flex-col gap-10 text-center" data-aos="fade-up" data-aos-duration="1500">
        <h1 className="absolute font-bold text-[30px] opacity-10 left-[96px]  md:text-[54px] md:left-[272px]  lg:text-[72px] lg:left-[370px] xl:text-[100px] xl:left-[480px] xl:bottom-[2px]  ">
          Eduction
        </h1>
        <h1 className="font-bold text-[38px] z-40  md:text-[50px]">Eduction</h1>
        <p className="text-gray-400 ">
        Committed to lifelong learning and continuous self-improvement through formal education, training
        </p>  
      </div>
      </div>

      <div className="bg-black text-white grid grid-cols-1 place-items-center md:grid-cols-2 pt-[80px] p-7 gap-9 md:p-8 lg:p-12 xl:p-[82px]">
        
        <div className="flex flex-col gap-2 " data-aos="fade-up" data-aos-duration="1500">
          <div className="bg-[#1A1A1A] flex flex-col gap-4 p-4 rounded-lg  md:p-6 ">
            <h1 className="text-[#ffbd39] font-extrabold text-[22px]">
              2020-2023
            </h1>
            <h1 className="text-[24px] md:text-[26px]  ">
              Bachelor of Mechanical Engineering
            </h1>
            <h3 className="text-[10px] tracking-[3px] text-gray-400 ">
              MIET ENGIEERING COLLAGE
            </h3>
            <p className="text-gray-400 text-[16px]">
              I am a recent graduate with a bachelor's degree in mechanical engineering. I have acquired a strong foundation in mechanical engineering principles, problem-solving skills, and a dedication to learning. Eager to apply my knowledge and contribute to innovative projects within the field and others
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1500">
          <div className="bg-[#1A1A1A] flex flex-col gap-4 p-4 rounded-lg  md:p-6 ">
            <h1 className="text-[#ffbd39] font-extrabold text-[22px]">
              2018-2020
            </h1>
            <h1 className="text-[24px] md:text-[26px]  ">
              Diploma in Mechanical Engineering
            </h1>
            <h3 className="text-[10px] tracking-[3px] text-gray-400 ">
              MIET POLYTECHNIC COLLAGE
            </h3>
            <p className="text-gray-400 text-[16px]">
            Diploma holder in mechanical engineering with a strong foundation in mechanical principles and a versatile skill set. 
            Equipped to apply technical knowledge to a range of engineering disciplines and contribute to innovative projects. 
            Committed to making a meaningful impact in the field of engineering
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1500" >
          <div className="bg-[#1A1A1A] flex flex-col gap-4 p-4 rounded-lg   md:p-6  ">
            <h1 className="text-[#ffbd39] font-extrabold text-[22px]">
              2017-2018
            </h1>
            <h1 className="text-[24px] md:text-[26px] ">
              SSLC 
            </h1>
            <h3 className="text-[10px] tracking-[3px] text-gray-400 ">
              ABOUT MARCEL HR SEC SCHOOL
            </h3>
            <p className="text-gray-400 text-[16px]">
            SSLC graduate with a strong academic foundation, showcasing proficiency in core subjects. Eager to leverage this knowledge for personal and professional growth. Committed to continued learning and development in various fields.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2" data-aos="fade-up" data-aos-duration="1500">
          <div className="bg-[#1A1A1A] flex flex-col gap-4 p-4 rounded-lg   md:p-6 ">
            <h1 className="text-[#ffbd39] font-extrabold text-[22px]">
              2023
            </h1>
            <h1 className="text-[24px] md:text-[26px]  ">
                Full Stack Development
            </h1>
            <h3 className="text-[10px] tracking-[3px] text-gray-400 ">
              Self learning
            </h3>
            <p className="text-gray-400 text-[16px]">
            Experienced full-stack developer with proficiency in front-end and back-end technologies, adept at creating dynamic and user-friendly web applications. Skilled in multiple programming languages and frameworks, with a strong commitment to staying current with industry trends
            </p>
          </div>
        </div>



      </div>
    </main>
  );
}
export default Eduction;
