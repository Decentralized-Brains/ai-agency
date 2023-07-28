import videoThumb from "../assets/video_thumb.png";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BsFillPlayFill } from "react-icons/bs";

const Hero = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <>
      <div className="hero_bg h-full lg:h-[800px] pb-5">
        <div className="container">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black pt-28 md:pt-36 text-center text-white tracking-wider ">
            Automating Domestic <br /> Agencies
          </h1>
          <p className="text-center text-lg md:text-2xl mt-10 text-gray-300">
            Unlock unprecedented growth and efficiency with our AI-powered{" "}
            <br /> solutions.
          </p>
        </div>

        <div className="relative  mt-5 ">
          <img
            src={videoThumb}
            alt=""
            className="mt-16 w-full md:w-9/12 h-full mx-auto"
          />

          <div
            onClick={openModal}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ED00F949] w-32 h-16 md:w-40 md:h-20 text-6xl flex justify-center items-center text-white"
          >
            <BsFillPlayFill />
            {modal ? (
              <section className="modal__bg -mt-24">
                <div className="h-[1000px] w-screen flex justify-center items-center ">
                  <div className="modal__content w-[95%] h-[40%] lg:w-2/3 lg:h-2/3 ">
                    <IoMdClose
                      className="text-black"
                      arial-label="Close modal"
                      onClick={setModal}
                    />
                    <div className="h-full w-full">
                      <iframe
                        className="modal__video-style w-full h-full  flex justify-center items-center"
                        onLoad={spinner}
                        loading="lazy"
                        width="1200"
                        height="800"
                        src="https://www.youtube.com/embed/4UZrsTqkcW4"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
