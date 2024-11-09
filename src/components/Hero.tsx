import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <div className="w-[80%] h-[90%] flex flex-col md:flex-row justify-evenly items-center">
        {/* left side */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <Image
            className="rounded-[30px] w-[100px] h-[100px] md:w-[250px] md:h-[250px]"
            src={"/banner_bg.jpg"}
            width={250}
            height={250}
            alt="Profile"
            data-aos="zoom-in-up"
          />
        </div>
        {/* right side */}
        <div className="w-full md:w-[50%] flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-[20px] md:text-[30px] font-serif leading-[28px]" data-aos="zoom-in-up">
            I am Azaan Ahmad, Front-end Developer
          </h1>
          <p className="mt-[15px] md:mt-[20px] px-[15px] md:px-0">
            My name is Azaan Ahmad. I am 15 years old, studying computer science in matriculation.
          </p>
          <button className="mt-[20px] md:mt-[30px] px-[20px] py-[10px] bg-yellow-300 font-semibold rounded-[5px]">
            HIRE ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
