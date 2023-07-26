import videoThumb from "../assets/video_thumb.png";

const Hero = () => {
  return (
    <>
      <div className="hero_bg">
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
      </div>
      <div className="container absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center">
        <img src={videoThumb} alt="" />
      </div>
    </>
  );
};

export default Hero;
