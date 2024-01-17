import React,{useState} from 'react'

const Home = () => {
   const [itemsToShow, setItemsToShow] = useState(10);

   const loadMoreItems = () => {
     setItemsToShow(itemsToShow + 10);
   };
       const Img = [
         {
           img: "a1.jpg",
           tag: "Bollywood",
           Shares: "38 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "a2.avif",
           tag: "Bollywood",
           Shares: "3 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "a3.jpg",
           tag: "Bollywood",
           Shares: "338 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "a4.jpeg",
           Shares: "8 Shares",
           tag: "Bollywood",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "a5.jpg",
           tag: "Bollywood",
           Shares: "15 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "a6.webp",
           tag: "Bollywood",
           Shares: "3 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "a7.jpg",
           tag: "Bollywood",
           Shares: "338 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "a8.jpg",
           Shares: "8 Shares",
           tag: "Bollywood",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "a9.jpg",
           tag: "Bollywood",
           Shares: "15 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "a10.jpg",
           tag: "Bollywood",
           Shares: "3 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
         img: "boot.webp",
         tag: "5 Hours | campaign Team",
         Shares: "38 Shares",
         link: "          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ratione, enim officiis sit facilis vitae.",
       },
       {
         img: "womanRain.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ratione, enim officiis sit facilis vitae.",
       },
       {
         img: "virat.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ratione, enim officiis sit facilis vitae.",
       },
       {
         img: "SACHIN.jpg",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ratione, enim officiis sit facilis vitae.",
       },
       {
         img: "girlboot.webp",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ratione, enim officiis sit facilis vitae.",
       },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "15 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "3 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "338 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m2.webp",
           Shares: "8 Shares",
           tag: "Bollywood",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "15 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "3 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "338 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m2.webp",
           Shares: "8 Shares",
           tag: "Bollywood",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "15 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m1.jpg",
           tag: "Bollywood",
           Shares: "38 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "3 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "338 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m2.webp",
           Shares: "8 Shares",
           tag: "Bollywood",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "15 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "3 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "338 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m2.webp",
           Shares: "8 Shares",
           tag: "Bollywood",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "15 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "3 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "338 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m2.webp",
           Shares: "8 Shares",
           tag: "Bollywood",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
         {
           img: "m3.jpg",
           tag: "Bollywood",
           Shares: "15 Shares",
           link: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
         },
       ];
        const Img1 = [
          {
            img: "m1.jpg",
            tag: "Bollywood",
            Shares: "38 Shares",
            link: "Akshay Kumar",
          },
          {
            img: "a1.jpg",
            tag: "Bollywood",
            Shares: "3 Shares",
            link: " Lorem ipsum dolorec",
          },
          {
            img: "a7.jpg",
            tag: "Bollywood",
            Shares: "338 Shares",
            link: " Lorem ipsum dolorec",
          },
          {
            img: "a5.jpg",
            Shares: "8 Shares",
            tag: "Bollywood",
            link: " Lorem ipsum dolorec",
          },
          {
            img: "a8.jpg",
            tag: "Bollywood",
            Shares: "15 Shares",
            link: " Lorem ipsum dolorec",
          },
        ];
  return (
    <>
      <div className=" md:pl-16 md:px-6 pb-12  px-4 overflow-x-hidden container mx-auto">
        {/* <div className="2xl:mx-auto 2xl:container xl:px-20 gap-7 lg:px-10 px-6 md:py-5">
          <div className="lg:flex  justify-center">
            <div className="flex flex-col  gap-8 h-full lg:w-[40%]">
              <div className="relative ">
                <a href="https://yourlink.com" target="_blank">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png"
                      alt="fingerprint recognition"
                      className="h-1/2 transition duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-1 px-3 ">
                    <h1 className="lg:text-2xl  text-xl font-semibold  text-white hover:scale-90 transition duration-300">
                      Chip fingerprint technology for secure transaction
                    </h1>
                  </div>
                </a>
              </div>
              <div className="relative ">
                <a href="https://yourlink.com" target="_blank">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png"
                      alt="fingerprint recognition"
                      className=" transition duration-300 h-1/2 hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-1 px-3 ">
                    <h1 className="lg:text-2xl  text-xl font-semibold  text-white hover:scale-90 transition duration-300">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, sunt?
                    </h1>
                  </div>
                </a>
              </div>
            </div>

            <div className="lg:ml-6 lg:mt-0 mt-7  gap-5 lg:w-[25%] w-full flex lg:flex-col sm:flex-row flex-col items-center ">
              <div className="relative">
                <a href="https://yourlink.com" target="_blank">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png"
                      alt="fingerprint recognition"
                      className="h-60 transition duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-1 px-3  ">
                    <h1 className=" font-semibold  text-white transition duration-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In provident repellat iste ipsum distinctio sequi?
                    </h1>
                  </div>
                </a>
              </div>
              <div className="relative">
                <a href="https://yourlink.com" target="_blank">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png"
                      alt="fingerprint recognition"
                      className="h-60 transition duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-1 px-3 ">
                    <h1 className=" font-semibold  text-white hover:scale-90 transition duration-300">
                      Chip fingerprint technology for secure transaction
                    </h1>
                  </div>
                </a>
              </div>
              <div className="relative">
                <a href="https://yourlink.com" target="_blank">
                  <div className="overflow-hidden">
                    <img
                      src="https://i.ibb.co/ZY43FRd/blog-1-desktop.png"
                      alt="fingerprint recognition"
                      className="h-60 transition duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="absolute bottom-1 px-3 ">
                    <h1 className=" font-semibold  text-white hover:scale-90 transition duration-300">
                      Chip fingerprint technology for secure transaction
                    </h1>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex mt-5 md:mt-0 md:mx-5 lg:w-[25%] shadow-md flex-col">
              <div className=" mx-auto -mt-4 xl:mx-0 border-b-2 pb-2 flex sm:mx-auto mb-2 items-center">
                <div className="h-32 overflow-hidden w-2/5">
                  <img
                    src="https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt
                    className="h-full w-full object-cover overflow-hidden lg:w-full  transition duration-300 hover:scale-110 rounded"
                  />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                  <p className="uppercase text-sm text-indigo-700 pb-2">FOOD</p>
                  <p className="text-base text-gray-800 pb-2">
                    The way I drive and handle a car, is an expression of my
                    inner feeling.
                  </p>
                  <p className="text-xs text-gray-600">
                    May 13, 2019 by Allison Fox
                  </p>
                </div>
              </div>
              <div className="flex sm:mx-auto border-b-2 pb-2 mb-2 items-center">
                <div className="h-32 overflow-hidden w-2/5">
                  <img
                    src="https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80
"
                    alt
                    className="h-full lg:w-full w-auto transition duration-300 hover:scale-110 object-cover overflow-hidden rounded"
                  />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                  <p className="uppercase text-sm text-indigo-700 pb-2">
                    GOOGLE
                  </p>
                  <p className="text-base text-gray-800 pb-2">
                    I'm a greater believer in luck, and I find the harder I work
                    the more I have of it.
                  </p>
                  <p className="text-xs text-gray-600">
                    May 13, 2019 by Allison Fox
                  </p>
                </div>
              </div>
              <div className="flex sm:mx-auto border-b-2 pb-2 mb-2 items-center">
                <div className="h-32 overflow-hidden w-2/5">
                  <img
                    src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
                    alt
                    className="h-full lg:w-full w-auto transition duration-300 hover:scale-110 object-cover overflow-hidden rounded"
                  />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                  <p className="uppercase text-sm text-indigo-700 pb-2">
                    GALAXY
                  </p>
                  <p className="text-base text-gray-800 pb-2">
                    Productivity is being able to do things that you were never
                    able to do before.
                  </p>
                  <p className="text-xs text-gray-600">
                    May 13, 2019 by Allison Fox
                  </p>
                </div>
              </div>
              <div className=" flex sm:mx-auto   items-center">
                <div className="h-32 overflow-hidden w-2/5">
                  <img
                    src="https://images.unsplash.com/photo-1544476915-ed1370594142?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80
"
                    alt
                    className="h-full lg:w-full w-auto transition duration-300 hover:scale-110 object-cover overflow-hidden rounded"
                  />
                </div>
                <div className="w-3/5 pt-3 pb-3 pl-5 pr-5">
                  <p className="uppercase text-sm text-indigo-700 pb-2">
                    GOOGLE
                  </p>
                  <p className="text-base text-gray-800 pb-2">
                    The way I drive and handle a car, is an expression of my
                    inner feeling.
                  </p>
                  <p className="text-xs text-gray-600">
                    May 13, 2019 by Allison Fox
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="2xl:mx-auto 2xl:container xl:px-[9.2%] gap-7 lg:px-12 pt-5 px-0">
          <div className="py-[2%] ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5   gap-3 md:gap-5  rounded-lg">
              {Img.slice(0, itemsToShow).map((item, i) => {
                return (
                  <div key={i} className="shadow-lg ">
                    <div className="overflow-hidden">
                      <img
                        src={item.img}
                        alt=""
                        className="object-cover transition duration-300 hover:scale-110 w-full h-40"
                      />
                    </div>
                    <div className="bg-white p-4">
                      <p className="uppercase text-gray-500">{item.tag}</p>
                      <p className="text-gray-700 hover:underline text-sm font-medium text-justify">
                        {item.link}
                      </p>
                      <p className="text-xs mt-2 italic text-gray-500">
                        {item.Shares}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {itemsToShow < Img.length && (
              <div className="text-center">
                {" "}
                <button
                  className="w-[50%]  bg-white shadow-lg hover:bg-slate-200 text-lg font-semibold mt-10 rounded-md border-[1px] hover:border-[2px] py-2 border-black"
                  onClick={loadMoreItems}
                >
                  Load More...
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="">
          <div className="2xl:mx-auto 2xl:container xl:px-[9.2%] gap-7 lg:px-12 pt-5 px-2 ">
            <div className="flex flex-col lg:flex-row 2xl:flex-row xl:flex-row justify-center  items-end">
              <div className="mt-5  ">
                <div id="menu" className="bg-white md:shadow-lg">
                  <div className="flex flex-col gap-3 lg:flex-row 2xl:flex-row xl:flex-row">
                    <div className="md:w-2/5  md:mb-12 px-0">
                      <div className="overflow-hidden">
                        <img
                          className="w-full transition duration-300 hover:scale-110"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%207%20%281%29.png"
                        />
                      </div>
                      <h1 className="text-gray-800 font-bold pl-2 mt-4">
                        6 email examples you’ll want to steal
                      </h1>
                      <h1 className="text-gray-600 pl-2 font-semibold text-sm mt-3">
                        The emerge of internet of things has brought in, rather
                        urgently, a need for low-cost security technology
                      </h1>
                      <div className="mt-12">
                        <div className="overflow-hidden">
                          <img
                            className="w-full transition duration-300 hover:scale-110"
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/image%207%20%282%29.png"
                          />
                        </div>
                        <h1 className="text-gray-800 pl-2 font-bold mt-4">
                          Why is machine learning an effective ?
                        </h1>
                        <h1 className="text-gray-600 pl-2 font-semibold text-sm mt-3 w-11/12">
                          Businesses must go above and beyond meeting
                          fundamental customer expectations
                        </h1>
                      </div>
                    </div>

                    <div className="md:bg-gray-50 md:w-2/5">
                      <div className=" lg:px-6 xl:px-6 2xl:px-8 px-0">
                        <div className="">
                          <h1 className="text-center text-2xl  font-bold mb-5 ">
                            Stories
                          </h1>
                          <div className="grid grid-cols-2 gap-5 rounded-lg">
                            {Img1.map((item, i) => {
                              return (
                                <div className="relative shadow-lg md:w-48">
                                  <div className="overflow-hidden">
                                    <img
                                      src={item.img}
                                      alt=""
                                      className="object-cover transition duration-300 hover:scale-110 w-48 h-48"
                                    />
                                  </div>
                                  <div className="absolute  bottom-1  bg-opacity-70 text-white px-2 ">
                                    <p className=" font-semibold  text-white hover:scale-90 transition duration-300">
                                      {item.link}
                                    </p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pb-[3%] px-[2%]  ">
                      <h1 className="text-center text-2xl  font-bold">
                        Most Read
                      </h1>
                      <div className="space-y-5  mt-5">
                        <div className="overflow-hidden">
                          <img
                            className="w-full lg:w-full  transition duration-300 hover:scale-110 h-20"
                            src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                            alt="games"
                          />
                          <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                            <p className="text-sm hover:scale-90 transition duration-300 text-white font-semibold tracking-wide">
                              Lorem ipsum dolor sit amet consec
                            </p>
                          </div>
                        </div>
                        <div className="overflow-hidden">
                          <img
                            className="w-full lg:w-full transition duration-300 hover:scale-110 h-20"
                            src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                            alt="games"
                          />
                          <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                            <p className="text-sm hover:scale-90 transition duration-300 text-white font-semibold tracking-wide">
                              Lorem ipsum dolor sit amet consec
                            </p>
                          </div>
                        </div>

                        <div className="overflow-hidden">
                          <img
                            className="w-full lg:w-full  transition duration-300 hover:scale-110 h-20"
                            src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                            alt="games"
                          />
                          <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                            <p className="text-sm hover:scale-90 transition duration-300 text-white font-semibold tracking-wide">
                              Lorem ipsum dolor sit amet consec
                            </p>
                          </div>
                        </div>
                        <div className="overflow-hidden">
                          <img
                            className="w-full lg:w-full  transition duration-300 hover:scale-110 h-20"
                            src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png"
                            alt="games"
                          />
                          <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                            <p className="text-sm hover:scale-90 transition duration-300 text-white font-semibold tracking-wide">
                              Lorem ipsum dolor sit amet consec
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home