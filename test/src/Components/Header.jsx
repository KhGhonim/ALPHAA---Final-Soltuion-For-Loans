/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
// @ts-ignore
import Logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdClose, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { HeaderData } from "../constants/db";
import { IoMenu } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";

export default function Header() {
  const location = useLocation();
  const [state, setstate] = useState(location);
  const [submenuOpen, setSubmenuOpen] = useState(false); //For the BIG Screens
  const [servicesSubmenuOpen, setservicesSubmenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesClickCount, setServicesClickCount] = useState(0);
  const navigate = useNavigate();

  const handleLinkClick = (list) => {
    if (!list.subMenu) {
      setMenuOpen(false);
      navigate(list.link);
      setservicesSubmenuOpen(false);
    } else if (list.name === "SERVICES") {
      if (servicesClickCount === 0) {
        setservicesSubmenuOpen(true);
        setServicesClickCount(1);
      } else {
        setservicesSubmenuOpen(false);
        setServicesClickCount(0);
        navigate(list.link);
      }
    }
  };

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    setservicesSubmenuOpen(false);
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
      <header className="hidden lg:block bg-white p-2 font-cairo">
        <div className="w-10/12 flex justify-between items-center container mx-auto">
          <Link to="/" className="flex items-center ">
            <img
              alt="logo"
              src={Logo}
              className=" w-full h-20 pl-16 object-cover"
            />
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
            <div
              className="relative group"
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => setSubmenuOpen(false)}
            >
              {/* Main SERVICES Link */}
              <Link
                to="/services"
                className={`text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                  submenuOpen
                    ? "bg-[#22232D] text-white"
                    : "group-hover:text-white group-hover:bg-[#22232D]"
                } flex justify-center items-center gap-3`}
              >
                SERVICES{" "}
                <span className={submenuOpen ? "invisible" : ""}>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </Link>

              {/* Dropdown List */}
              {submenuOpen && (
                <ul className="absolute top-16 left-0 z-50 w-80 bg-white text-[#22232D] text-sm font-bold rounded-sm transition-all ease-in-out">
                  {HeaderData[2].subMenu.map((list, index) => (
                    <li key={index} className="w-full">
                      <Link
                        to={list.link}
                        className={`block w-full hover:text-white hover:bg-[#22232D] py-5 px-4 text-sm font-bold ${
                          state.pathname === list.link
                            ? "bg-orange-400"
                            : "hover:bg-[#22232D]"
                        } ${
                          index !== HeaderData[2].subMenu.length - 1
                            ? "border-b-2"
                            : ""
                        }`}
                        onClick={() => setSubmenuOpen(false)} // Close submenu on click
                      >
                        {list.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
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
      <header className="hidden relative md:block lg:hidden bg-white p-4 font-cairo ">
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

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute flex flex-col left-0 w-full bottom-0 transform translate-y-full right-0 z-50 bg-white text-[#22232D] text-sm font-bold rounded-sm transition-all ease-in-out">
            {HeaderData?.map((list, index) => (
              <div key={index} className="relative">
                <div
                  onClick={() => handleLinkClick(list)}
                  className={`text-[#22232D] flex justify-between items-center text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                    state.pathname === list.link
                      ? "bg-orange-400"
                      : "hover:text-white hover:bg-[#22232D]"
                  }`}
                >
                  {list.name}

                  {list.subMenu && (
                    <span className={`ml-2 transition-transform duration-300`}>
                      <RiArrowDownSFill size={20} />
                    </span>
                  )}
                </div>

                {/* Submenu for Services */}
                {servicesSubmenuOpen && list.name === "SERVICES" && (
                  <ul className="flex flex-col left-0 w-full bg-white mt-1 relative">
                    {list?.subMenu?.map((subItem, subIndex) => (
                      <li key={subIndex} className="w-full">
                        <Link
                          to={subItem.link}
                          onClick={handleMenuClick} // Close main menu when submenu item is clicked
                          className={`block ${
                            state.pathname === subItem.link
                              ? "bg-orange-400"
                              : "hover:text-white hover:bg-[#22232D]"
                          } w-full pl-7 hover:bg-[#22232D] hover:text-white text-[#22232D] text-sm font-bold py-6 px-5 rounded-sm transition-all duration-500 ease-in-out ${
                            subIndex !== list.subMenu.length - 1
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
      <header className="block md:hidden bg-white p-5 font-cairo">
        <div className="w-full flex flex-col ">
          <Link
            to="/"
            className="w-full flex justify-center items-center container mx-auto "
          >
            <img alt="logo" src={Logo} className="w-auto h-16 object-cover" />
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
                    <div
                      onClick={() => handleLinkClick(list)}
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
                          className={`ml-2 transition-transform duration-300`}
                        >
                          <RiArrowDownSFill size={20} />
                        </span>
                      )}
                    </div>

                    {/* Submenu for Services */}
                    {servicesSubmenuOpen && list.name === "SERVICES" && (
                      <ul
                        className={` flex flex-col left-0 w-full bg-white mt-1 relative`}
                      >
                        {list?.subMenu?.map((subItem, subIndex) => (
                          <li key={subIndex} className="w-full">
                            <Link
                              to={subItem.link}
                              onClick={handleMenuClick}
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
