import videoThumb from "../assets/video_thumb.png";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BsFillPlayFill } from "react-icons/bs";

const KnowMore = () => {
  const [modal, setModal] = useState(false);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div className="container py-16 md:py-32">
      <h1 className="text-4xl md:text-6xl font-bold text-[#9741D6] text-center">
        Embrace Unconventionality
      </h1>
      <p className="text-center text-lg md:text-2xl mt-5 text-gray-500 md:max-w-4xl mx-auto">
        Are you ready to embrace the unconventional path or are you gonna just
        settle for conventional results?
      </p>

      <div className="relative">
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
  );
};

export default KnowMore;
