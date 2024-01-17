import React,{useState,useEffect} from 'react'
import {AiOutlineHome} from "react-icons/ai"
import { BsSearch } from "react-icons/bs";
import { Link } from 'react-router-dom';
import {HiMenuAlt3} from "react-icons/hi"
import { MdNotificationsNone } from "react-icons/md";

const Navbarr = () => {
  const [sideBar, setsideBar] = useState();
   const [scrollBackground, setScrollBackground] = useState(false);
   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 150) {
         setScrollBackground(true);
       } else {
         setScrollBackground(false);
       }
     };

     window.addEventListener("scroll", handleScroll);

     return () => {
       window.removeEventListener("scroll", handleScroll);
     };
   }, []);

  return (
    <>
      <div
        className={` fixed bg-white z-30  w-full ${
          scrollBackground ? " transition-colors duration-700" : ""
        } transition-colors duration-500`}
      >
        {/* Code block starts */}
        <nav role="navigation" className="  w-full  hidden md:block  shadow-md">
          <div className="container px-[7%]  justify-center gap-7 flex items-center md:items-stretch mx-auto border-b border-gray-200 border-opacity-20">
            <Link to="/" className="h-full flex -ml-[1%] items-center">
              <img src="logo.png" alt="" className="w-60" />
            </Link>
            <div className="h-full flex my-1 ml-[3%] items-center justify-center ">
              <div className="relative ">
                <img src="h1.png" alt="" />
              </div>
            </div>
            <div className="md:flex items-center ml-[3%] justify-end hidden">
              <div className="flex items-center">
                <div className="h-full flex items-center">
                  <button
                    aria-label="show notifications"
                    className="relative focus:outline-none hover:text-black focus:text-indigo-100 text-indigo-50 mx-5 h-full flex items-center justify-center cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-bell"
                      width={28}
                      height={28}
                      viewBox="0 0 24 24"
                      color="black"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                      <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                    </svg>
                    {/* <div className="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                      <div className="animate-ping w-2 h-2 rounded-full bg-blue-600" />
                    </div> */}
                  </button>
                </div>
                <div className="h-full flex items-center">
                  <button
                    aria-label="dropdown"
                    className="focus:outline-none focus:text-gray-900 text-gray-800 hover:text-gray-900 w-full flex items-center justify-end relative cursor-pointer"
                  >
                    <img
                      className="rounded-full h-10 w-10 object-cover"
                      src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                      alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-2 w-full bg-[#97989c]  2xl:container    px-[10%]  flex items-center justify-between">
            <ul className="w-full md:flex justify-center items-center   hidden">
              <Link to="/" className="mr-5">
                <AiOutlineHome size={30} color="white " />
              </Link>
              <li>
                <Link
                  to="/Healthcare"
                  className="focus:outline-none font-medium cursor-pointer  flex items-center hover:text-black text-lg uppercase text-indigo-50 tracking-normal"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  to="/Sports"
                  className="focus:outline-none font-medium cursor-pointer flex items-center hover:text-black text-lg uppercase text-indigo-50 mx-6 tracking-normal"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/Spotlight"
                  className="focus:outline-none font-medium cursor-pointer  flex items-center hover:text-black text-lg uppercase text-indigo-50 mr-6 tracking-normal"
                >
                  Spotlight
                </Link>
              </li>
              <li>
                <Link
                  to="/Personality"
                  className="focus:outline-none font-medium cursor-pointer flex items-center hover:text-black text-lg uppercase text-indigo-50 mr-6 tracking-normal"
                >
                  Personality
                </Link>
              </li>
              <li>
                <Link
                  to="/Corporate"
                  className="focus:outline-none hover:text-black font-medium cursor-pointer h-full flex items-center  text-lg uppercase text-indigo-50 mr-6 tracking-normal"
                >
                  Corporate
                </Link>
              </li>
            </ul>
            <div className="">
              {" "}
              <BsSearch size={30} color="white" className="" />
            </div>
          </div>
        </nav>
        {/* Navbar */}
        <nav className="md:hidden">
          <div className="w-full shadow-md bg-white fixed mt-0 top-0 z-40">
            <div className="w-full flex md:hidden">
              <div className="py-4 flex  justify-between mx-4 items-center w-full">
                <Link
                  to="/"
                  aria-label="logo"
                  role="img"
                  className="focus:outline-none my-2"
                >
                  <img src="logo.png" alt="" className="w-28" />
                </Link>
                <div className="flex md:hidden items-center justify-end">
                  <div className="flex items-center">
                    <div className="h-full flex items-center">
                      <button
                        aria-label="show notifications"
                        className="relative focus:outline-none focus:text-indigo-700 hover:text-indigo-700 focus:border-indigo-700 hover:border-indigo-700 h-full flex items-center justify-center text-gray-800 cursor-pointer"
                      >
                        <MdNotificationsNone className="text-black text-[30px]" />
                        {/* <div className="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                          <div className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                        </div> */}
                      </button>
                    </div>
                    <div className="h-full flex items-center">
                      <button
                        aria-label="dropdown"
                        className="focus:outline-none mx-4 focus:text-gray-900 text-gray-800 border-b-2 border-transparent focus:border-gray-800 hover:text-gray-900 w-full flex items-center justify-end relative cursor-pointer"
                      >
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src="https://i.ibb.co/GTLTzZY/Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1.png"
                          alt="Unsplash-Avatars-0000s-0035-azamat-zhanisov-a5s-RFie-A3-BY-unsplash-1"
                        />
                      </button>
                    </div>
                    <div className="h-full flex items-center">
                      <button
                        onClick={() => setsideBar(!sideBar)}
                        aria-label="open menu"
                        className="focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md text-gray-800"
                        onclick="sidebarHandler(true)"
                      >
                        <HiMenuAlt3 className="text-black text-[30px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Mobile  sidebar*/}

          {sideBar && (
            <div
              className={`w-[90%]  duration-700 h-full shadow-lg z-40 fixed  top-0 bg-gray-700 flex-col justify-between md:hidden xl:hidden pb-4 transform transition-transform  ease-in-out ${
                sideBar ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="sm:px-6 px-4 h-full">
                <div className="flex flex-col justify-between h-full w-full">
                  <div>
                    <div className="mt-6 flex w-full items-center justify-between">
                      <div className="pb-4 flex items-center justify-between w-full">
                        <Link
                          to="/"
                          aria-label="logo"
                          role="img"
                          className="focus:outline-none my-2"
                        >
                          <img src="logo.png" alt="" className="w-28" />
                        </Link>
                        <button
                          onClick={() => setsideBar(!sideBar)}
                          id="cross"
                          aria-label="close menu"
                          className="focus:outline-none focus:ring-2 rounded-md text-indigo-50"
                          onclick="sidebarHandler(false)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-x"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <line x1={18} y1={6} x2={6} y2={18} />
                            <line x1={6} y1={6} x2={18} y2={18} />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <ul>
                      <div className="border-gray-200 border-b border-opacity-20 pb-5 md:pr-10 lg:pr-0 h-full flex items-center">
                        <div className="relative w-full">
                          <div className="text-indigo-50 absolute ml-3 inset-0 m-auto w-4 h-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-search"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <circle cx={10} cy={10} r={7} />
                              <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                          </div>
                          <input
                            className="md:hidden bg-indigo-500 bg-opacity-10 placeholder-indigo-50  focus:outline-none focus:border-indigo-700 w-[70%] rounded text-sm text-indigo-50 pl-12 py-2"
                            type="text"
                            placeholder="Search here"
                          />
                        </div>
                      </div>
                      <li>
                        <Link to="/" className="cursor-pointer">
                          <div
                            onClick={() => setsideBar(!sideBar)}
                            className="text-gray-800 b pt-5"
                          >
                            <div className="flex items-center">
                              <p className="focus:outline-none text-indigo-50 text-sm font-medium">
                                Home
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Healthcare" className="cursor-pointer">
                          <div
                            onClick={() => setsideBar(!sideBar)}
                            className="text-gray-800 pt-8"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <p className="focus:outline-none text-indigo-50 text-sm font-medium">
                                  Healthcare
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="/Sports" className="cursor-pointer">
                          <div className="text-gray-800 pt-8">
                            <div
                              onClick={() => setsideBar(!sideBar)}
                              className="flex items-center"
                            >
                              <p className="focus:outline-none text-indigo-50 text-sm font-medium">
                                Sports
                              </p>
                            </div>
                          </div>
                        </Link>
                      </li>
                      <li className="text-gray-800 pt-8 cursor-pointer">
                        <Link
                          to="/Spotlight"
                          className="flex items-center justify-between"
                        >
                          <div
                            onClick={() => setsideBar(!sideBar)}
                            className="w-6 h-6 md:w-8 md:h-8 text-gray-800"
                          >
                            <p className="focus:outline-none text-indigo-50 text-sm font-medium">
                              Spotlight
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li className="text-gray-800 pt-8 cursor-pointer">
                        <Link
                          to="/Personality"
                          className="flex items-center justify-between"
                        >
                          <div
                            onClick={() => setsideBar(!sideBar)}
                            className="w-6 h-6 md:w-8 md:h-8 text-gray-800"
                          >
                            <p className="focus:outline-none text-indigo-50 text-sm font-medium">
                              Personality
                            </p>
                          </div>
                        </Link>
                      </li>
                      <li className="text-gray-800 pt-8 cursor-pointer">
                        <Link
                          to="/Corporate"
                          className="flex items-center justify-between"
                        >
                          <div
                            onClick={() => setsideBar(!sideBar)}
                            className="w-6 h-6 md:w-8 md:h-8 text-gray-800"
                          >
                            <p className="focus:outline-none text-indigo-50 text-sm font-medium">
                              Corporate
                            </p>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbarr
