import React from 'react'

const Hero = () => {
  return (
    <div>
      <div class="2xl:mx-auto 2xl:container  py-12 xl:px-20 md:px-6 px-4 flex justify-center items-center w-full flex-col">
        <div class="sm:w-96 md:w-8/12 xl:w-full space-y-10">
          <div class="text-center flex flex-col justify-center items-center space-y-4">
            <h1 class="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">
              Latest Fashion Blogs
            </h1>
            <p class="text-base leading-6 md:leading-4 text-center text-gray-600">
              Dive deep into the world of fashion with our lastest blogs
              updates.
            </p>
          </div>
          <div class=" flex flex-col justify-center items-center space-y-6 xl:space-y-8">
            <div class="w-full relative">
              <img
                class="w-full object-cover xl:object-contain hidden xl:block"
                src="https://i.ibb.co/rG6qtF3/olena-sergienko-n-Ph-Vq-Ch-P1-JI-unsplash-1.png"
                alt="clothes"
              />
              <img
                class="w-full object-cover hidden md:block xl:hidden"
                src="https://i.ibb.co/xGnDtD7/Group-1870-1.png"
                alt="clothes"
              />
              <img
                class="w-full md:hidden"
                src="https://i.ibb.co/FHnwhX7/Group-2234.png"
                alt="clothes"
              />
              <div class="absolute bottom-2 md:bottom-8 inset-x-2 md:inset-x-8 xl:left-8 xl:right-1/2 bg-blur flex flex-col justify-start items-start text-left p-6 md:p-8">
                <p class="text-sm leading-none text-gray-600">23 July 2021</p>
                <p class="mt-2 text-2xl font-semibold leading-6 text-gray-800">
                  The Wardrobe Tour
                </p>
                <p class="mt-4 text-base leading-6 text-gray-600">
                  Read about how your favourite celebrities pick their clothing
                  items to have striking appearances. You might want to click
                  read story if you want to know their fashion secrets.
                </p>
                <a
                  href="javascript:void(0)"
                  class="mt-6 text-base font-medium leading-4 focus:outline-none focus:underline hover:underline text-gray-800"
                >
                  Read Story
                </a>
              </div>
            </div>
            <div class="flex flex-col xl:flex-row w-full justify-center items-center  space-y-6 xl:space-y-0 xl:space-x-8">
              <div class="w-full relative">
                <img
                  class="w-full object-cover xl:object-contain hidden  xl:block"
                  src="https://i.ibb.co/B2yXD4Y/pexels-tanya-satina-6558010.png"
                  alt="girls"
                />
                <img
                  class="w-full object-cover hidden md:block xl:hidden"
                  src="https://i.ibb.co/pndL2sx/pexels-tanya-satina-6558010.png"
                  alt="girls"
                />
                <img
                  class="w-full md:hidden"
                  src="https://i.ibb.co/FYFnDJN/Group-2233.png"
                  alt="girls"
                />
                <div class="absolute bottom-2 md:bottom-8 inset-x-2 md:inset-x-8  bg-blur flex flex-col justify-start items-start text-left p-6 md:p-8">
                  <p class="text-sm leading-none text-gray-600">23 July 2021</p>
                  <p class="mt-2 text-2xl font-semibold leading-6 text-gray-800">
                    The Wardrobe Tour
                  </p>
                  <p class="mt-4 text-base leading-6 text-gray-600">
                    Read about how your favourite celebrities pick their
                    clothing items to have striking appearances. You might want
                    to click read story if you want to know their fashion
                    secrets.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="mt-6 text-base font-medium leading-4 focus:outline-none focus:underline hover:underline text-gray-800"
                  >
                    Read Story
                  </a>
                </div>
              </div>
              <div class="w-full relative">
                <img
                  class="w-full object-cover xl:object-contain hidden  xl:block"
                  src="https://i.ibb.co/B4bchqF/flaunter-b-ETVkpm2u-Mw-unsplash-1.png"
                  alt="girl"
                />
                <img
                  class="w-full object-cover hidden md:block xl:hidden"
                  src="https://i.ibb.co/NxcL40w/pexels-michelle-leman-6774877.png"
                  alt="girl"
                />
                <img
                  class="w-full md:hidden"
                  src="https://i.ibb.co/yWCt1kH/Group-2235.png"
                  alt="girl"
                />
                <div class="absolute md:bottom-8 bottom-2 inset-x-2 md:inset-x-8  bg-blur flex flex-col justify-start items-start text-left p-6 md:p-8">
                  <p class="text-sm leading-none text-gray-600">23 July 2021</p>
                  <p class="mt-2 text-2xl font-semibold leading-6 text-gray-800">
                    The Wardrobe Tour
                  </p>
                  <p class="mt-4 text-base leading-6 text-gray-600">
                    Read about how your favourite celebrities pick their
                    clothing items to have striking appearances. You might want
                    to click read story if you want to know their fashion
                    secrets.
                  </p>
                  <a
                    href="javascript:void(0)"
                    class="mt-6 text-base font-medium leading-4 focus:outline-none focus:underline hover:underline text-gray-800"
                  >
                    Read Story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  );
}

export default Hero