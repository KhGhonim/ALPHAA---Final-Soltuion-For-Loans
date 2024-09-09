import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdClose, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HeaderData } from "../constants/db";
import { IoMenu } from "react-icons/io5";

export default function Header() {
  const location = useLocation();
  const [state, setstate] = useState(location);
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * This useEffect hook is used to keep the state up to date with the current
   * location. This is necessary because the location prop is not updated
   * automatically when the user navigates to a new page.
   */
  useEffect(() => {
    setstate(location);
  }, [location]);

  return (
    <>
      {/* PC HEADER */}
      <header className="hidden md:block bg-white p-4 font-cairo">
        <div className="w-10/12 flex justify-between items-center container mx-auto">
          <Link to="/" className="flex items-center ">
            <img alt="logo" src={Logo} className=" w-full h-16 object-cover" />
          </Link>
          <nav className="space-x-1 flex justify-center items-center">
            <Link
              to="/"
              className={`text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                state.pathname === "/"
                  ? ""
                  : " hover:text-white hover:bg-[#22232D]"
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about-us"
              className={`text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                state.pathname === "/about-us"
                  ? ""
                  : " hover:text-white hover:bg-[#22232D]"
              }`}
            >
              ABOUT US
            </Link>
            <div className="relative group">
              {/* Main SERVICES Link */}
              <Link
                to="/services"
                className={`text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                  state.pathname === "/services"
                    ? ""
                    : " group-hover:text-white group-hover:bg-[#22232D]"
                } flex justify-center items-center gap-3`}
              >
                SERVICES{" "}
                <span className="group-hover:invisible">
                  <MdOutlineKeyboardArrowDown />
                </span>
              </Link>

              {/* Dropdown List */}
              <ul className="absolute top-16 left-0 z-50 w-72 hidden group-hover:block bg-white text-[#22232D] text-sm font-bold rounded-sm transition-all ease-in-out">
                {HeaderData.map((list, index) => {
                  return (
                    <li key={index} className="w-full">
                      <Link
                        to={list.link}
                        className="block w-full hover:text-white hover:bg-[#22232D] py-6 px-5 text-xs"
                      >
                        {list.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Link
              to="/faq"
              className={`text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                state.pathname === "/faq"
                  ? ""
                  : " hover:text-white hover:bg-[#22232D]"
              }`}
            >
              FAQ'S
            </Link>
            <button className="bg-[#2A2C38] text-sm font-bold text-white p-4 rounded-lg hover:bg-[#2A2C38] hover:scale-110 transition-all duration-500 ease-in-out">
              CALL US ANYTIME
            </button>
          </nav>
        </div>
      </header>

      {/* MOBILE HEADER */}
      <header className="block md:hidden bg-white p-4 font-cairo">
        <div className="w-full flex flex-col ">
          <Link
            to="/"
            className="w-full flex justify-center items-center container mx-auto "
          >
            <img
              alt="logo"
              src={Logo}
              className=" w-full h-20 object-contain"
            />
          </Link>
          <nav className="space-y-1 ">
            <div className="w-16 text-3xl flex justify-center items-center font-bold my-7">
              {menuOpen ? (
                <MdClose
                  className="cursor-pointer hover:text-orange-400"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              ) : (
                <IoMenu
                  className="cursor-pointer hover:text-orange-400"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              )}
            </div>
            {menuOpen && (
              <div className=" absolute flex flex-col left-0 z-50 w-full bg-white text-[#22232D] text-sm font-bold rounded-sm transition-all ease-in-out">
                <Link
                  to="/"
                  className={`text-[#22232D]  text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                    state.pathname === "/"
                      ? "bg-orange-400"
                      : " hover:text-white hover:bg-[#22232D]"
                  }`}
                >
                  HOME
                </Link>
                <Link
                  to="/about-us"
                  className={`text-[#22232D]  text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                    state.pathname === "/about-us"
                      ? "bg-orange-400"
                      : " hover:text-white hover:bg-[#22232D] "
                  }`}
                >
                  ABOUT US
                </Link>
                <Link
                  to="/services"
                  className={`text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                    state.pathname === "/services"
                      ? "bg-orange-400"
                      : " hover:text-white hover:bg-[#22232D] "
                  }`}
                >
                  SERVICES
                </Link>
                <Link
                  to="/faq"
                  className={`text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                    state.pathname === "/faq"
                      ? "bg-orange-400"
                      : " hover:text-white hover:bg-[#22232D] "
                  }`}
                >
                  FAQ'S
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
