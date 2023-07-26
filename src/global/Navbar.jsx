import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      name: "Home",
    },
    {
      id: 2,
      link: "about",
      name: "About",
    },
    {
      id: 3,
      link: "team",
      name: "Team",
    },
    {
      id: 4,
      link: "faq",
      name: "FAQ",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 10 ? setShadow(true) : setShadow(false);
    });
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div
        className={
          shadow
            ? "fixed w-full h-[80px] duration-300 z-[100] shadow-lg bg-white/10 backdrop-blur-xl"
            : "fixed w-full h-[80px] duration-300 z-[100]"
        }
      >
        {/* this is for large screen devices */}
        <div className="flex justify-end md:justify-center text-lg items-center h-full container text-white ">
          <ul className=" flex justify-center items-center">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="max-md:hidden cursor-pointer capitalize hover:scale-105 duration-300 px-6 flex justify-center items-center gap-2"
              >
                <Link to={link} smooth duration={500}>
                  {name}
                </Link>
              </li>
            ))}
            {/* shinnig button inifinity loop */}
          </ul>
          <div className="flex justify-center items-center gap-5">
            <div onClick={handleNav} className="block md:hidden ">
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
          </div>
        </div>
      </div>
      {/* this is for small screen devices */}

      <div
        className={
          nav
            ? "fixed h-screen pt-20 left-0 top-0 w-[80%] text-white ease-in duration-500 backdrop-blur-lg z-40 md:hidden"
            : "fixed h-screen pt-20 left-[-100%] top-0 w-[80%] ease-in duration-500 backdrop-blur-lg z-40"
        }
      >
        <ul>
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 flex justify-center items-center gap-2 font-bold"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
