import { teamData } from "../data/teamData.jsx";
import CurveImg from "../assets/team_bg.png";
import { ImFacebook } from "react-icons/im";
import { BsTwitter, BsInstagram, BsVimeo } from "react-icons/bs";

const Team = () => {
  return (
    <div className="container py-16 md:py-32">
      <h1 className="text-4xl md:text-6xl font-bold text-[#9741D6] text-center">
        Our Team
      </h1>
      <p className="text-center text-lg md:text-2xl mt-5 text-gray-500 md:max-w-4xl mx-auto mb-20">
        Are you ready to embrace the unconventional path or are you gonna just
        settle for conventional results?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-5">
        {teamData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center group "
            >
              <div className="relative  overflow-hidden">
                {" "}
                <img
                  src={item.img}
                  alt=""
                  className=" h-80 w-64 object-cover"
                />
                <div className="absolute -bottom-40 group-hover:bottom-0 duration-500 ">
                  <div className="relative ">
                    {" "}
                    <img src={CurveImg} alt="" />
                    <div className="absolute flex justify-center flex-col items-center w-full top-0 p-2">
                      <h3 className="text-lg text-white font-bold mt-5">
                        {item.name}
                      </h3>
                      <p className="text-white">{item.title}</p>

                      <div className="mt-2 flex justify-center gap-5 items-center ">
                        <a href={item.link}>
                          <ImFacebook className="text-white text-xl  cursor-pointer" />
                        </a>
                        <a href={item.link}>
                          <BsTwitter className="text-white text-xl  cursor-pointer" />
                        </a>
                        <a href={item.link}>
                          <BsInstagram className="text-white text-xl  cursor-pointer" />
                        </a>
                        <a href={item.link}>
                          <BsVimeo className="text-white text-xl  cursor-pointer" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
