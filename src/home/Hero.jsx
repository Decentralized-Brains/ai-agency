import videoThumb from "../assets/video_thumb.png";

const Hero = () => {
  return (
    <>
      <div className="hero_bg h-full lg:h-[800px]">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black pt-28 md:pt-36 text-center text-white tracking-wider ">
            Revolutionizing Domestic <br /> Agencies with AI-Driven <br />{" "}
            Solutions.
          </h1>
          <p className="text-center text-lg md:text-2xl mt-5 text-gray-300">
            Unlock unprecedented growth and efficiency with our AI-powered
            solutions, <br /> optimising the way your domestic agency operates.
          </p>
        </div>

        <div className="py-5 mt-5 md:mt-32  flex justify-center">
          <img src={videoThumb} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
