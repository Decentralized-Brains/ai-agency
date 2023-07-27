import videoThumb from "../assets/video_thumb.png";
import { BsFillPlayFill } from "react-icons/bs";

const KnowMore = () => {
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

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ED00F949] w-32 h-16 md:w-40 md:h-20 text-6xl flex justify-center items-center text-white">
          <BsFillPlayFill />
        </div>
      </div>
    </div>
  );
};

export default KnowMore;
