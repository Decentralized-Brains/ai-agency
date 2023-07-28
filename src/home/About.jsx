import About_us_img from "../assets/about_us_img.png";
import { ImArrowUpRight2 } from "react-icons/im";

const About = () => {
  return (
    <div className=" bg-[#9741D604] ">
      <div className="container pb-20 lg:pb-0 pt-20 lg:pt-[20rem] xl:pt-[35rem]">
        <div className="flex flex-col md:flex-row  gap-5 justify-center items-center">
          <div className=" md:w-1/2">
            <img src={About_us_img} alt="" className="mx-auto" />
          </div>
          <div className="md:w-1/2 md:max-w-xl">
            <h1 className=" text-4xl md:text-6xl font-bold text-[#9741D6] ">
              About Us
            </h1>
            <br />
            <p>
              Domestech.Ai is a leading agency for AI implementation and
              automation across the Domestic Services industry. Our innovative
              solutions empower Domestic Service Agencies with cutting-edge AI
              tools, streamlining operations and prioritising employee
              wellbeing. <br />
              <br />
              We revolutionise the way domestic service agencies operate,
              creating a more efficient and successful future for our clients.
            </p>
            <br />

            <a
              href=""
              className="flex gap-3 items-center justify-center border-2 rounded border-pink-400 hover:bg-pink-400 py-2 w-40 group duration-300 hover:text-white"
            >
              Learn More
              <span>
                <ImArrowUpRight2 className="text-pink-400 group-hover:text-white font-medium" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
