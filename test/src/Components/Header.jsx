/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
// @ts-ignore
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { MdClose, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HeaderData } from "../constants/db";
import { IoMenu } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";

export default function Header() {
  const location = useLocation();
  const [state, setstate] = useState(location);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuToggle, setMenuToggle] = useState({});

  const handleToggle = (index) => {
    setMenuToggle((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
      <header className="hidden lg:block bg-white p-4 font-cairo">
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
              <ul className="absolute  top-16 left-0 z-50 w-72 hidden group-hover:block bg-white text-[#22232D] text-sm font-bold rounded-sm transition-all ease-in-out">
                {HeaderData[2].subMenu.map((list, index) => {
                  return (
                    <li key={index} className="w-full">
                      <Link
                        to={list.link}
                        className={`block w-full hover:text-white hover:bg-[#22232D] py-5 px-5 text-xs ${
                          state.pathname === list.link
                            ? "bg-orange-400"
                            : " hover:text-white hover:bg-[#22232D]"
                        } ${
                          index !== HeaderData.length - 1 ? "border-b-2" : ""
                        } `}
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

      {/* Tablet HEADER */}
      <header className="hidden md:block lg:hidden bg-white p-4 font-cairo">
        <div className="w-10/12 flex justify-between items-center container mx-auto">
          <Link to="/" className="flex items-center ">
            <img alt="logo" src={Logo} className=" w-full h-16 object-cover" />
          </Link>
          <nav className="space-x-1 flex justify-center relative items-center">
            <div className="w-16 text-3xl re flex justify-center items-center font-bold my-7">
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
            <button className="bg-[#2A2C38] text-sm font-bold text-white p-4 rounded-lg hover:bg-[#2A2C38] hover:scale-110 transition-all duration-500 ease-in-out">
              CALL US ANYTIME
            </button>
          </nav>
        </div>
        {menuOpen && (
          <div className="absolute flex flex-col left-0 w-full right-0 translate-y-0 z-50 bg-white text-[#22232D] text-sm font-bold rounded-sm transition-all ease-in-out">
            {HeaderData.map((list, index) => (
              <div key={index} className="relative">
                {/* Main Link */}
                <Link
                  to={list.link}
                  onClick={() => handleToggle(index)} // Handle submenu toggle
                  className={`text-[#22232D] flex justify-between items-center text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                    state.pathname === list.link
                      ? "bg-orange-400"
                      : "hover:text-white hover:bg-[#22232D]"
                  }`}
                >
                  {list.name}

                  {/* Down arrow for services */}
                  {list.subMenu && (
                    <span
                      className={`ml-2 transition-transform duration-300 ${
                        menuToggle[index] ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <RiArrowDownSFill size={20} />
                    </span>
                  )}
                </Link>

                {/* Submenu for Services */}
                {list.subMenu && (
                  <ul
                    className={`${
                      menuToggle[index] ? "block" : "hidden"
                    } flex flex-col left-0 w-full bg-white mt-1 relative`}
                  >
                    {list.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="w-full">
                        <Link
                          to={subItem.link}
                          className={`block ${
                            state.pathname === subItem.link
                              ? "bg-orange-400"
                              : "hover:text-white hover:bg-[#22232D]"
                          } w-full pl-7 hover:bg-[#22232D] hover:text-white text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                            index !== list.subMenu.length - 1
                              ? "border-b-2"
                              : ""
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
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
              <div className="absolute flex flex-col left-0 w-full right-0 translate-y-0 z-50 bg-white text-[#22232D] text-sm font-bold rounded-sm transition-all ease-in-out">
                {HeaderData.map((list, index) => (
                  <div key={index} className="relative">
                    {/* Main Link */}
                    <Link
                      to={list.link}
                      onClick={() => handleToggle(index)} // Handle submenu toggle
                      className={`text-[#22232D] flex justify-between items-center text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                        state.pathname === list.link
                          ? "bg-orange-400"
                          : "hover:text-white hover:bg-[#22232D]"
                      }`}
                    >
                      {list.name}

                      {/* Down arrow for services */}
                      {list.subMenu && (
                        <span
                          className={`ml-2 transition-transform duration-300 ${
                            menuToggle[index] ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <RiArrowDownSFill size={20} />
                        </span>
                      )}
                    </Link>

                    {/* Submenu for Services */}
                    {list.subMenu && (
                      <ul
                        className={`${
                          menuToggle[index] ? "block" : "hidden"
                        } flex flex-col left-0 w-full bg-white mt-1 relative`}
                      >
                        {list.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="w-full">
                            <Link
                              to={subItem.link}
                              className={`block ${
                                state.pathname === subItem.link
                                  ? "bg-orange-400"
                                  : "hover:text-white hover:bg-[#22232D]"
                              } w-full pl-7 hover:bg-[#22232D] hover:text-white text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                                index !== list.subMenu.length - 1
                                  ? "border-b-2"
                                  : ""
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
