import React from 'react'
import { BsInstagram, BsFacebook } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
      <footer className="relative mt-5 pt-24 md:pt-0">
        <div className="bg-black py-12">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex justify-evenly mx-[5%]">
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <div href="javascript:void(0)">
                      <a className="text-base lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white ">
                        Help and Information
                      </a>
                    </div>
                  </li>
                  <li className="md:mt-6">
                    <div href="javascript:void(0)">
                      <a className="text-xs lg:text-lg leading-none hover:text-brand dark:hover:text-brand text-white ">
                        About
                      </a>
                    </div>
                  </li>
                  <li className="md:mt-6">
                    <div href="javascript:void(0)">
                      <a className="text-xs lg:text-lg leading-none hover:text-brand dark:hover:text-brand text-white ">
                        Pricing
                      </a>
                    </div>
                  </li>
                  <li className="md:mt-6">
                    <div href="javascript:void(0)">
                      <a className="text-xs lg:text-lg leading-none hover:text-brand dark:hover:text-brand text-white ">
                        FAQ
                      </a>
                    </div>
                  </li>
                  <li className=" md:mt-6">
                    <a
                      href="javascript:void(0)"
                      className="text-xs lg:text-lg leading-none hover:text-brand dark:hover:text-brand text-white "
                    >
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <div href="javascript:void(0)">
                      <a className="text-base lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white ">
                        Network
                      </a>
                    </div>
                  </li>

                  <li className="md:mt-6">
                    <div href="javascript:void(0)">
                      <a className="text-xs lg:text-lg leading-none hover:text-brand dark:hover:text-brand text-white ">
                        Blog
                      </a>
                    </div>
                  </li>
                  <li className="md:mt-6">
                    <div href="javascript:void(0)">
                      <a className="text-xs lg:text-lg leading-none hover:text-brand dark:hover:text-brand text-white ">
                        Changelog
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-base lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white "
                    >
                      Privacy policy
                    </a>
                  </li>
                  <li className="md:mt-6">
                    <div href="javascript:void(0)">
                      <a className="text-xs lg:text-lg leading-none hover:text-brand dark:hover:text-brand text-white ">
                        Terms of service
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-base lg:text-xl leading-none hover:text-brand dark:hover:text-brand text-white "
                    >
                      Follow Us
                    </a>
                  </li>
                  <li className="mt-3 md:mt-6">
                    <div className="flex gap-5">
                      <BsInstagram color="white" size={30} />
                      <BsFacebook color="white" size={30} />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-800 pb-5 text-white flex flex-col justify-center items-center">
          <div href="javascript:void(0)">
            <a></a>
          </div>
          <p className="mt-6 text-xs font-semibold lg:text-lg leading-none text-white ">
           Copyright © 2023 Veteran
            India. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer