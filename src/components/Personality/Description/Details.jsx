import React from 'react'

const Details = () => {
  return (
    <div className="overflow-y-hidden flex flex-col md:flex-row gap-5 mx-[10%]">
      <div className="py-6 px-4 md:w-[70%] md:px-6 lg:px-0 xl:px-0 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center flex-col">
        <div className="w-full flex justify-between items-center ">
          <h1 className="text-xl md:text-2xl xl:text-4xl font-bold leading-6 md:leading-8 xl:leading-10 text-gray-800">
            Our Healthcare
          </h1>
          {/* <p className="text-sm md:text-base leading-none text-gray-600">
            Home <span className="font-medium text-gray-800">/ Healthcare</span>
          </p> */}
        </div>
        <div className="mt-8 md:mt-5 md:px-20 lg:px-14 xl:px-0 w-full flex justify-center items-center space-y-10 flex-col">
          <div className="w-full flex justify-start items-start flex-col space-y-8 ">
            <div className="w-full">
              <img
                className="lg:object-cover lg:h-72 xl:h-96 w-full"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog_6-img-1.png"
                alt="drawing room 1"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full space-y-4">
              <h2 className="text-lg md:text-xl xl:text-2xl font-medium xl:font-semibold leading-6 md:leading-5 xl:leading-normal text-gray-800">
                Interior design is the art, the interior designer is the artist.
              </h2>
              <p className="text-base leading-normal text-gray-600">
                Contrary to popular belief, Lorem Ipsum indignation and dislike
                men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in…
              </p>
              <div className="flex justify-between items-center w-full">
                <button className="border border-gray-600 flex justify-center items-center hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out text-gray-800 space-x-3 px-5 py-3">
                  <p className="text-base leading-none ">Read More</p>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.375 3.5L12.875 8L8.375 12.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.25 8H3.125"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p className="text-sm md:text-base leading-4 text-gray-600">
                  23, Feburary 2021
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-start flex-col space-y-8 ">
            <div className="w-full">
              <img
                className="lg:object-cover lg:h-72 xl:h-96 w-full"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog_6-img-2.png"
                alt="drawing room 2"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full space-y-4">
              <h2 className="text-lg md:text-xl xl:text-2xl font-medium xl:font-semibold leading-6 md:leading-5 xl:leading-normal text-gray-800">
                Decorate your home with the most modern furnishings.
              </h2>
              <p className="text-base leading-normal text-gray-600">
                Contrary to popular belief, Lorem Ipsum indignation and dislike
                men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in…
              </p>
              <div className="flex justify-between items-center w-full">
                <button className="border border-gray-600 flex justify-center items-center hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out text-gray-800 space-x-3 px-5 py-3">
                  <p className="text-base leading-none ">Read More</p>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.375 3.5L12.875 8L8.375 12.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.25 8H3.125"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p className="text-sm md:text-base leading-4 text-gray-600">
                  23, Feburary 2021
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-start items-start flex-col space-y-8 ">
            <div className="w-full">
              <img
                className="lg:object-cover lg:h-72 xl:h-96 w-full"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog_6-img-3.png"
                alt="drawing room 3"
              />
            </div>
            <div className="flex flex-col justify-start items-start w-full space-y-4">
              <h2 className="text-lg md:text-xl xl:text-2xl font-medium xl:font-semibold leading-6 md:leading-5 xl:leading-normal text-gray-800">
                Unique products that will impress your home in 2020.
              </h2>
              <p className="text-base leading-normal text-gray-600">
                Contrary to popular belief, Lorem Ipsum indignation and dislike
                men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in…
              </p>
              <div className="flex justify-between items-center w-full">
                <button className="border border-gray-600 flex justify-center items-center hover:bg-gray-800 hover:text-white transition duration-200 ease-in-out text-gray-800 space-x-3 px-5 py-3">
                  <p className="text-base leading-none ">Read More</p>
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.375 3.5L12.875 8L8.375 12.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.25 8H3.125"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <p className="text-sm md:text-base leading-4 text-gray-600">
                  23, Feburary 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start w-full space-x-4">
            <button className="w-6 h-6 text-center focus:bg-gray-800 focus:text-white bg-gray-100">
              <p className="text-sm leading-none ">1</p>
            </button>
            <button className="w-6 h-6 text-center focus:bg-gray-800 focus:text-white bg-gray-100">
              <p className="text-sm leading-none ">2</p>
            </button>
            <button className="w-6 h-6 text-center focus:bg-gray-800 focus:text-white bg-gray-100">
              <p className="text-sm leading-none ">3</p>
            </button>
            <button className="w-24 h-6 text-xs font-light leading-3 space-x-0.5 text-gray-800 flex justify-center items-center text-center focus:bg-gray-800 focus:text-white bg-gray-100">
              <p className="text-sm pb-0.5 leading-none ">Next page</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.21967 2.96967C5.51256 2.67678 5.98744 2.67678 6.28033 2.96967L10.7803 7.46967C11.0732 7.76256 11.0732 8.23744 10.7803 8.53033L6.28033 13.0303C5.98744 13.3232 5.51256 13.3232 5.21967 13.0303C4.92678 12.7374 4.92678 12.2626 5.21967 11.9697L9.18934 8L5.21967 4.03033C4.92678 3.73744 4.92678 3.26256 5.21967 2.96967Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-[30%] mt-8 md:mt-[3.3%]">
        <h1 className="text-2xl mb-3 text-center font-bold">Trending News</h1>
        <div className="w-full ">
          <div className="container">
            <div className=" flex  flex-col ">
              <div className=" mx-auto sm:max-w-xs mb-20 xl:max-w-sm  relative">
                <div className="relative w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                    className="w-full"
                    alt="Thea"
                  />
                  <div className="flex justify-center items-center absolute opacity-0 bg-gray-900 hover:opacity-75 w-full h-full top-0">
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M20.67 30V18.39H24.5583L25.14 13.8767H20.67V10.9967C20.67 9.69 21.0333 8.79833 22.9067 8.79833H25.2967V4.76167C24.1397 4.63891 22.9768 4.57937 21.8133 4.58333C18.3683 4.58333 16.01 6.68667 16.01 10.55V13.8767H12.1133V18.39H16.01V30H1.66667C1.22464 30 0.800716 29.8244 0.488155 29.5118C0.175595 29.1993 0 28.7754 0 28.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H28.3333C28.7754 0 29.1993 0.175595 29.5118 0.488155C29.8244 0.800716 30 1.22464 30 1.66667V28.3333C30 28.7754 29.8244 29.1993 29.5118 29.5118C29.1993 29.8244 28.7754 30 28.3333 30H20.67Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={28}
                        viewBox="0 0 35 28"
                        fill="none"
                      >
                        <path
                          d="M34.9367 3.42654C33.6643 3.98937 32.315 4.359 30.9334 4.52321C32.3896 3.65227 33.4795 2.28157 34 0.666544C32.6334 1.47988 31.135 2.04988 29.5734 2.35821C28.5244 1.23584 27.134 0.491483 25.6183 0.240852C24.1026 -0.00977847 22.5466 0.247363 21.1921 0.972299C19.8377 1.69724 18.7607 2.84935 18.1285 4.24953C17.4964 5.64971 17.3446 7.21951 17.6967 8.71488C14.9252 8.57597 12.2139 7.85575 9.73884 6.60098C7.26376 5.34622 5.08024 3.58496 3.33003 1.43154C2.71051 2.49563 2.38495 3.70525 2.38669 4.93654C2.38669 7.35321 3.61669 9.48821 5.48669 10.7382C4.38004 10.7034 3.29775 10.4045 2.33003 9.86654V9.95321C2.33036 11.5627 2.88731 13.1226 3.90644 14.3683C4.92557 15.614 6.34416 16.469 7.92169 16.7882C6.89438 17.0666 5.8172 17.1076 4.77169 16.9082C5.21647 18.2936 6.08337 19.5052 7.25101 20.3734C8.41865 21.2416 9.82857 21.7229 11.2834 21.7499C9.83749 22.8854 8.18199 23.7248 6.41149 24.2202C4.641 24.7155 2.79024 24.857 0.965027 24.6365C4.15119 26.6856 7.86019 27.7734 11.6484 27.7699C24.47 27.7699 31.4817 17.1482 31.4817 7.93654C31.4817 7.63654 31.4734 7.33321 31.46 7.03654C32.8248 6.05016 34.0027 4.82824 34.9384 3.42821L34.9367 3.42654Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M25.5583 25.565H21.1167V18.6033C21.1167 16.9433 21.0833 14.8067 18.8 14.8067C16.485 14.8067 16.1317 16.6133 16.1317 18.4817V25.565H11.6883V11.25H15.955V13.2H16.0133C16.61 12.0767 18.06 10.8883 20.2267 10.8883C24.7267 10.8883 25.56 13.8517 25.56 17.7067V25.565H25.5583ZM6.67167 9.29167C6.33259 9.29211 5.99677 9.22562 5.68344 9.09601C5.37011 8.9664 5.08545 8.77623 4.84576 8.53639C4.60608 8.29655 4.41609 8.01176 4.28668 7.69835C4.15728 7.38494 4.09101 7.04907 4.09167 6.71C4.092 6.19972 4.24363 5.70101 4.5274 5.27691C4.81117 4.85281 5.21432 4.52239 5.68588 4.32742C6.15744 4.13245 6.67623 4.08169 7.17663 4.18157C7.67704 4.28144 8.13659 4.52746 8.49718 4.88851C8.85777 5.24956 9.10319 5.70943 9.20242 6.20997C9.30164 6.7105 9.25022 7.22922 9.05464 7.70053C8.85906 8.17184 8.52811 8.57456 8.10365 8.85778C7.67919 9.141 7.18028 9.292 6.67 9.29167H6.67167ZM8.89833 25.565H4.44333V11.25H8.9V25.565H8.89833ZM27.7833 0H2.215C0.988333 0 0 0.966667 0 2.16167V27.8383C0 29.0333 0.99 30 2.21333 30H27.7767C29 30 30 29.0333 30 27.8383V2.16167C30 0.966667 29 0 27.7767 0H27.7817H27.7833Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                  <p className="text-xl text-center text-gray-800 font-normal mb-1">
                    Andres Berlin
                  </p>
                  <p className="text-center text-base text-gray-600">
                    Chief Executive Officer
                  </p>
                </div>
              </div>

              <div className="  sm:max-w-xs mb-20 xl:max-w-sm relative">
                <div className="relative w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/side-view-woman-reading-sofa_23-2148294040.jpg"
                    className="w-full"
                    alt="Thea"
                  />
                  <div className="flex justify-center items-center absolute opacity-0 bg-gray-900 hover:opacity-75 w-full h-full top-0">
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M20.67 30V18.39H24.5583L25.14 13.8767H20.67V10.9967C20.67 9.69 21.0333 8.79833 22.9067 8.79833H25.2967V4.76167C24.1397 4.63891 22.9768 4.57937 21.8133 4.58333C18.3683 4.58333 16.01 6.68667 16.01 10.55V13.8767H12.1133V18.39H16.01V30H1.66667C1.22464 30 0.800716 29.8244 0.488155 29.5118C0.175595 29.1993 0 28.7754 0 28.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H28.3333C28.7754 0 29.1993 0.175595 29.5118 0.488155C29.8244 0.800716 30 1.22464 30 1.66667V28.3333C30 28.7754 29.8244 29.1993 29.5118 29.5118C29.1993 29.8244 28.7754 30 28.3333 30H20.67Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={28}
                        viewBox="0 0 35 28"
                        fill="none"
                      >
                        <path
                          d="M34.9367 3.42654C33.6643 3.98937 32.315 4.359 30.9334 4.52321C32.3896 3.65227 33.4795 2.28157 34 0.666544C32.6334 1.47988 31.135 2.04988 29.5734 2.35821C28.5244 1.23584 27.134 0.491483 25.6183 0.240852C24.1026 -0.00977847 22.5466 0.247363 21.1921 0.972299C19.8377 1.69724 18.7607 2.84935 18.1285 4.24953C17.4964 5.64971 17.3446 7.21951 17.6967 8.71488C14.9252 8.57597 12.2139 7.85575 9.73884 6.60098C7.26376 5.34622 5.08024 3.58496 3.33003 1.43154C2.71051 2.49563 2.38495 3.70525 2.38669 4.93654C2.38669 7.35321 3.61669 9.48821 5.48669 10.7382C4.38004 10.7034 3.29775 10.4045 2.33003 9.86654V9.95321C2.33036 11.5627 2.88731 13.1226 3.90644 14.3683C4.92557 15.614 6.34416 16.469 7.92169 16.7882C6.89438 17.0666 5.8172 17.1076 4.77169 16.9082C5.21647 18.2936 6.08337 19.5052 7.25101 20.3734C8.41865 21.2416 9.82857 21.7229 11.2834 21.7499C9.83749 22.8854 8.18199 23.7248 6.41149 24.2202C4.641 24.7155 2.79024 24.857 0.965027 24.6365C4.15119 26.6856 7.86019 27.7734 11.6484 27.7699C24.47 27.7699 31.4817 17.1482 31.4817 7.93654C31.4817 7.63654 31.4734 7.33321 31.46 7.03654C32.8248 6.05016 34.0027 4.82824 34.9384 3.42821L34.9367 3.42654Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M25.5583 25.565H21.1167V18.6033C21.1167 16.9433 21.0833 14.8067 18.8 14.8067C16.485 14.8067 16.1317 16.6133 16.1317 18.4817V25.565H11.6883V11.25H15.955V13.2H16.0133C16.61 12.0767 18.06 10.8883 20.2267 10.8883C24.7267 10.8883 25.56 13.8517 25.56 17.7067V25.565H25.5583ZM6.67167 9.29167C6.33259 9.29211 5.99677 9.22562 5.68344 9.09601C5.37011 8.9664 5.08545 8.77623 4.84576 8.53639C4.60608 8.29655 4.41609 8.01176 4.28668 7.69835C4.15728 7.38494 4.09101 7.04907 4.09167 6.71C4.092 6.19972 4.24363 5.70101 4.5274 5.27691C4.81117 4.85281 5.21432 4.52239 5.68588 4.32742C6.15744 4.13245 6.67623 4.08169 7.17663 4.18157C7.67704 4.28144 8.13659 4.52746 8.49718 4.88851C8.85777 5.24956 9.10319 5.70943 9.20242 6.20997C9.30164 6.7105 9.25022 7.22922 9.05464 7.70053C8.85906 8.17184 8.52811 8.57456 8.10365 8.85778C7.67919 9.141 7.18028 9.292 6.67 9.29167H6.67167ZM8.89833 25.565H4.44333V11.25H8.9V25.565H8.89833ZM27.7833 0H2.215C0.988333 0 0 0.966667 0 2.16167V27.8383C0 29.0333 0.99 30 2.21333 30H27.7767C29 30 30 29.0333 30 27.8383V2.16167C30 0.966667 29 0 27.7767 0H27.7817H27.7833Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                  <p className="text-xl text-center text-gray-800 font-normal mb-1">
                    Silene Tokyo
                  </p>
                  <p className="text-center text-base text-gray-600">
                    Chief Marketing Officer
                  </p>
                </div>
              </div>
              <div className=" mx-auto sm:max-w-xs mb-20 xl:max-w-sm relative">
                <div className="relative w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                    className="w-full"
                    alt="Thea"
                  />
                  <div className="flex justify-center items-center absolute opacity-0 bg-gray-900 hover:opacity-75 w-full h-full top-0">
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M20.67 30V18.39H24.5583L25.14 13.8767H20.67V10.9967C20.67 9.69 21.0333 8.79833 22.9067 8.79833H25.2967V4.76167C24.1397 4.63891 22.9768 4.57937 21.8133 4.58333C18.3683 4.58333 16.01 6.68667 16.01 10.55V13.8767H12.1133V18.39H16.01V30H1.66667C1.22464 30 0.800716 29.8244 0.488155 29.5118C0.175595 29.1993 0 28.7754 0 28.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H28.3333C28.7754 0 29.1993 0.175595 29.5118 0.488155C29.8244 0.800716 30 1.22464 30 1.66667V28.3333C30 28.7754 29.8244 29.1993 29.5118 29.5118C29.1993 29.8244 28.7754 30 28.3333 30H20.67Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={28}
                        viewBox="0 0 35 28"
                        fill="none"
                      >
                        <path
                          d="M34.9367 3.42654C33.6643 3.98937 32.315 4.359 30.9334 4.52321C32.3896 3.65227 33.4795 2.28157 34 0.666544C32.6334 1.47988 31.135 2.04988 29.5734 2.35821C28.5244 1.23584 27.134 0.491483 25.6183 0.240852C24.1026 -0.00977847 22.5466 0.247363 21.1921 0.972299C19.8377 1.69724 18.7607 2.84935 18.1285 4.24953C17.4964 5.64971 17.3446 7.21951 17.6967 8.71488C14.9252 8.57597 12.2139 7.85575 9.73884 6.60098C7.26376 5.34622 5.08024 3.58496 3.33003 1.43154C2.71051 2.49563 2.38495 3.70525 2.38669 4.93654C2.38669 7.35321 3.61669 9.48821 5.48669 10.7382C4.38004 10.7034 3.29775 10.4045 2.33003 9.86654V9.95321C2.33036 11.5627 2.88731 13.1226 3.90644 14.3683C4.92557 15.614 6.34416 16.469 7.92169 16.7882C6.89438 17.0666 5.8172 17.1076 4.77169 16.9082C5.21647 18.2936 6.08337 19.5052 7.25101 20.3734C8.41865 21.2416 9.82857 21.7229 11.2834 21.7499C9.83749 22.8854 8.18199 23.7248 6.41149 24.2202C4.641 24.7155 2.79024 24.857 0.965027 24.6365C4.15119 26.6856 7.86019 27.7734 11.6484 27.7699C24.47 27.7699 31.4817 17.1482 31.4817 7.93654C31.4817 7.63654 31.4734 7.33321 31.46 7.03654C32.8248 6.05016 34.0027 4.82824 34.9384 3.42821L34.9367 3.42654Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M25.5583 25.565H21.1167V18.6033C21.1167 16.9433 21.0833 14.8067 18.8 14.8067C16.485 14.8067 16.1317 16.6133 16.1317 18.4817V25.565H11.6883V11.25H15.955V13.2H16.0133C16.61 12.0767 18.06 10.8883 20.2267 10.8883C24.7267 10.8883 25.56 13.8517 25.56 17.7067V25.565H25.5583ZM6.67167 9.29167C6.33259 9.29211 5.99677 9.22562 5.68344 9.09601C5.37011 8.9664 5.08545 8.77623 4.84576 8.53639C4.60608 8.29655 4.41609 8.01176 4.28668 7.69835C4.15728 7.38494 4.09101 7.04907 4.09167 6.71C4.092 6.19972 4.24363 5.70101 4.5274 5.27691C4.81117 4.85281 5.21432 4.52239 5.68588 4.32742C6.15744 4.13245 6.67623 4.08169 7.17663 4.18157C7.67704 4.28144 8.13659 4.52746 8.49718 4.88851C8.85777 5.24956 9.10319 5.70943 9.20242 6.20997C9.30164 6.7105 9.25022 7.22922 9.05464 7.70053C8.85906 8.17184 8.52811 8.57456 8.10365 8.85778C7.67919 9.141 7.18028 9.292 6.67 9.29167H6.67167ZM8.89833 25.565H4.44333V11.25H8.9V25.565H8.89833ZM27.7833 0H2.215C0.988333 0 0 0.966667 0 2.16167V27.8383C0 29.0333 0.99 30 2.21333 30H27.7767C29 30 30 29.0333 30 27.8383V2.16167C30 0.966667 29 0 27.7767 0H27.7817H27.7833Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                  <p className="text-xl text-center text-gray-800 font-normal mb-1">
                    Richard Johnson
                  </p>
                  <p className="text-center text-base text-gray-600">
                    Head of Talent Manegement
                  </p>
                </div>
              </div>
              <div className=" mx-auto sm:max-w-xs mb-20 xl:max-w-sm  relative">
                <div className="relative w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                    className="w-full"
                    alt="Thea"
                  />
                  <div className="flex justify-center items-center absolute opacity-0 bg-gray-900 hover:opacity-75 w-full h-full top-0">
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M20.67 30V18.39H24.5583L25.14 13.8767H20.67V10.9967C20.67 9.69 21.0333 8.79833 22.9067 8.79833H25.2967V4.76167C24.1397 4.63891 22.9768 4.57937 21.8133 4.58333C18.3683 4.58333 16.01 6.68667 16.01 10.55V13.8767H12.1133V18.39H16.01V30H1.66667C1.22464 30 0.800716 29.8244 0.488155 29.5118C0.175595 29.1993 0 28.7754 0 28.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H28.3333C28.7754 0 29.1993 0.175595 29.5118 0.488155C29.8244 0.800716 30 1.22464 30 1.66667V28.3333C30 28.7754 29.8244 29.1993 29.5118 29.5118C29.1993 29.8244 28.7754 30 28.3333 30H20.67Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={28}
                        viewBox="0 0 35 28"
                        fill="none"
                      >
                        <path
                          d="M34.9367 3.42654C33.6643 3.98937 32.315 4.359 30.9334 4.52321C32.3896 3.65227 33.4795 2.28157 34 0.666544C32.6334 1.47988 31.135 2.04988 29.5734 2.35821C28.5244 1.23584 27.134 0.491483 25.6183 0.240852C24.1026 -0.00977847 22.5466 0.247363 21.1921 0.972299C19.8377 1.69724 18.7607 2.84935 18.1285 4.24953C17.4964 5.64971 17.3446 7.21951 17.6967 8.71488C14.9252 8.57597 12.2139 7.85575 9.73884 6.60098C7.26376 5.34622 5.08024 3.58496 3.33003 1.43154C2.71051 2.49563 2.38495 3.70525 2.38669 4.93654C2.38669 7.35321 3.61669 9.48821 5.48669 10.7382C4.38004 10.7034 3.29775 10.4045 2.33003 9.86654V9.95321C2.33036 11.5627 2.88731 13.1226 3.90644 14.3683C4.92557 15.614 6.34416 16.469 7.92169 16.7882C6.89438 17.0666 5.8172 17.1076 4.77169 16.9082C5.21647 18.2936 6.08337 19.5052 7.25101 20.3734C8.41865 21.2416 9.82857 21.7229 11.2834 21.7499C9.83749 22.8854 8.18199 23.7248 6.41149 24.2202C4.641 24.7155 2.79024 24.857 0.965027 24.6365C4.15119 26.6856 7.86019 27.7734 11.6484 27.7699C24.47 27.7699 31.4817 17.1482 31.4817 7.93654C31.4817 7.63654 31.4734 7.33321 31.46 7.03654C32.8248 6.05016 34.0027 4.82824 34.9384 3.42821L34.9367 3.42654Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M25.5583 25.565H21.1167V18.6033C21.1167 16.9433 21.0833 14.8067 18.8 14.8067C16.485 14.8067 16.1317 16.6133 16.1317 18.4817V25.565H11.6883V11.25H15.955V13.2H16.0133C16.61 12.0767 18.06 10.8883 20.2267 10.8883C24.7267 10.8883 25.56 13.8517 25.56 17.7067V25.565H25.5583ZM6.67167 9.29167C6.33259 9.29211 5.99677 9.22562 5.68344 9.09601C5.37011 8.9664 5.08545 8.77623 4.84576 8.53639C4.60608 8.29655 4.41609 8.01176 4.28668 7.69835C4.15728 7.38494 4.09101 7.04907 4.09167 6.71C4.092 6.19972 4.24363 5.70101 4.5274 5.27691C4.81117 4.85281 5.21432 4.52239 5.68588 4.32742C6.15744 4.13245 6.67623 4.08169 7.17663 4.18157C7.67704 4.28144 8.13659 4.52746 8.49718 4.88851C8.85777 5.24956 9.10319 5.70943 9.20242 6.20997C9.30164 6.7105 9.25022 7.22922 9.05464 7.70053C8.85906 8.17184 8.52811 8.57456 8.10365 8.85778C7.67919 9.141 7.18028 9.292 6.67 9.29167H6.67167ZM8.89833 25.565H4.44333V11.25H8.9V25.565H8.89833ZM27.7833 0H2.215C0.988333 0 0 0.966667 0 2.16167V27.8383C0 29.0333 0.99 30 2.21333 30H27.7767C29 30 30 29.0333 30 27.8383V2.16167C30 0.966667 29 0 27.7767 0H27.7817H27.7833Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                  <p className="text-xl text-center text-gray-800 font-normal mb-1">
                    Andres Berlin
                  </p>
                  <p className="text-center text-base text-gray-600">
                    Chief Executive Officer
                  </p>
                </div>
              </div>
              <div className=" mx-auto sm:max-w-xs mb-20 xl:max-w-sm  relative">
                <div className="relative w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg"
                    className="w-full"
                    alt="Thea"
                  />
                  <div className="flex justify-center items-center absolute opacity-0 bg-gray-900 hover:opacity-75 w-full h-full top-0">
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M20.67 30V18.39H24.5583L25.14 13.8767H20.67V10.9967C20.67 9.69 21.0333 8.79833 22.9067 8.79833H25.2967V4.76167C24.1397 4.63891 22.9768 4.57937 21.8133 4.58333C18.3683 4.58333 16.01 6.68667 16.01 10.55V13.8767H12.1133V18.39H16.01V30H1.66667C1.22464 30 0.800716 29.8244 0.488155 29.5118C0.175595 29.1993 0 28.7754 0 28.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H28.3333C28.7754 0 29.1993 0.175595 29.5118 0.488155C29.8244 0.800716 30 1.22464 30 1.66667V28.3333C30 28.7754 29.8244 29.1993 29.5118 29.5118C29.1993 29.8244 28.7754 30 28.3333 30H20.67Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={28}
                        viewBox="0 0 35 28"
                        fill="none"
                      >
                        <path
                          d="M34.9367 3.42654C33.6643 3.98937 32.315 4.359 30.9334 4.52321C32.3896 3.65227 33.4795 2.28157 34 0.666544C32.6334 1.47988 31.135 2.04988 29.5734 2.35821C28.5244 1.23584 27.134 0.491483 25.6183 0.240852C24.1026 -0.00977847 22.5466 0.247363 21.1921 0.972299C19.8377 1.69724 18.7607 2.84935 18.1285 4.24953C17.4964 5.64971 17.3446 7.21951 17.6967 8.71488C14.9252 8.57597 12.2139 7.85575 9.73884 6.60098C7.26376 5.34622 5.08024 3.58496 3.33003 1.43154C2.71051 2.49563 2.38495 3.70525 2.38669 4.93654C2.38669 7.35321 3.61669 9.48821 5.48669 10.7382C4.38004 10.7034 3.29775 10.4045 2.33003 9.86654V9.95321C2.33036 11.5627 2.88731 13.1226 3.90644 14.3683C4.92557 15.614 6.34416 16.469 7.92169 16.7882C6.89438 17.0666 5.8172 17.1076 4.77169 16.9082C5.21647 18.2936 6.08337 19.5052 7.25101 20.3734C8.41865 21.2416 9.82857 21.7229 11.2834 21.7499C9.83749 22.8854 8.18199 23.7248 6.41149 24.2202C4.641 24.7155 2.79024 24.857 0.965027 24.6365C4.15119 26.6856 7.86019 27.7734 11.6484 27.7699C24.47 27.7699 31.4817 17.1482 31.4817 7.93654C31.4817 7.63654 31.4734 7.33321 31.46 7.03654C32.8248 6.05016 34.0027 4.82824 34.9384 3.42821L34.9367 3.42654Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M25.5583 25.565H21.1167V18.6033C21.1167 16.9433 21.0833 14.8067 18.8 14.8067C16.485 14.8067 16.1317 16.6133 16.1317 18.4817V25.565H11.6883V11.25H15.955V13.2H16.0133C16.61 12.0767 18.06 10.8883 20.2267 10.8883C24.7267 10.8883 25.56 13.8517 25.56 17.7067V25.565H25.5583ZM6.67167 9.29167C6.33259 9.29211 5.99677 9.22562 5.68344 9.09601C5.37011 8.9664 5.08545 8.77623 4.84576 8.53639C4.60608 8.29655 4.41609 8.01176 4.28668 7.69835C4.15728 7.38494 4.09101 7.04907 4.09167 6.71C4.092 6.19972 4.24363 5.70101 4.5274 5.27691C4.81117 4.85281 5.21432 4.52239 5.68588 4.32742C6.15744 4.13245 6.67623 4.08169 7.17663 4.18157C7.67704 4.28144 8.13659 4.52746 8.49718 4.88851C8.85777 5.24956 9.10319 5.70943 9.20242 6.20997C9.30164 6.7105 9.25022 7.22922 9.05464 7.70053C8.85906 8.17184 8.52811 8.57456 8.10365 8.85778C7.67919 9.141 7.18028 9.292 6.67 9.29167H6.67167ZM8.89833 25.565H4.44333V11.25H8.9V25.565H8.89833ZM27.7833 0H2.215C0.988333 0 0 0.966667 0 2.16167V27.8383C0 29.0333 0.99 30 2.21333 30H27.7767C29 30 30 29.0333 30 27.8383V2.16167C30 0.966667 29 0 27.7767 0H27.7817H27.7833Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                  <p className="text-xl text-center text-gray-800 font-normal mb-1">
                    Andres Berlin
                  </p>
                  <p className="text-center text-base text-gray-600">
                    Chief Executive Officer
                  </p>
                </div>
              </div>
              <div className="  sm:max-w-xs mb-20 xl:max-w-sm relative">
                <div className="relative w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/templates/radian/team(2).png"
                    className="w-full"
                    alt="Thea"
                  />
                  <div className="flex justify-center items-center absolute opacity-0 bg-gray-900 hover:opacity-75 w-full h-full top-0">
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M20.67 30V18.39H24.5583L25.14 13.8767H20.67V10.9967C20.67 9.69 21.0333 8.79833 22.9067 8.79833H25.2967V4.76167C24.1397 4.63891 22.9768 4.57937 21.8133 4.58333C18.3683 4.58333 16.01 6.68667 16.01 10.55V13.8767H12.1133V18.39H16.01V30H1.66667C1.22464 30 0.800716 29.8244 0.488155 29.5118C0.175595 29.1993 0 28.7754 0 28.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H28.3333C28.7754 0 29.1993 0.175595 29.5118 0.488155C29.8244 0.800716 30 1.22464 30 1.66667V28.3333C30 28.7754 29.8244 29.1993 29.5118 29.5118C29.1993 29.8244 28.7754 30 28.3333 30H20.67Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={28}
                        viewBox="0 0 35 28"
                        fill="none"
                      >
                        <path
                          d="M34.9367 3.42654C33.6643 3.98937 32.315 4.359 30.9334 4.52321C32.3896 3.65227 33.4795 2.28157 34 0.666544C32.6334 1.47988 31.135 2.04988 29.5734 2.35821C28.5244 1.23584 27.134 0.491483 25.6183 0.240852C24.1026 -0.00977847 22.5466 0.247363 21.1921 0.972299C19.8377 1.69724 18.7607 2.84935 18.1285 4.24953C17.4964 5.64971 17.3446 7.21951 17.6967 8.71488C14.9252 8.57597 12.2139 7.85575 9.73884 6.60098C7.26376 5.34622 5.08024 3.58496 3.33003 1.43154C2.71051 2.49563 2.38495 3.70525 2.38669 4.93654C2.38669 7.35321 3.61669 9.48821 5.48669 10.7382C4.38004 10.7034 3.29775 10.4045 2.33003 9.86654V9.95321C2.33036 11.5627 2.88731 13.1226 3.90644 14.3683C4.92557 15.614 6.34416 16.469 7.92169 16.7882C6.89438 17.0666 5.8172 17.1076 4.77169 16.9082C5.21647 18.2936 6.08337 19.5052 7.25101 20.3734C8.41865 21.2416 9.82857 21.7229 11.2834 21.7499C9.83749 22.8854 8.18199 23.7248 6.41149 24.2202C4.641 24.7155 2.79024 24.857 0.965027 24.6365C4.15119 26.6856 7.86019 27.7734 11.6484 27.7699C24.47 27.7699 31.4817 17.1482 31.4817 7.93654C31.4817 7.63654 31.4734 7.33321 31.46 7.03654C32.8248 6.05016 34.0027 4.82824 34.9384 3.42821L34.9367 3.42654Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M25.5583 25.565H21.1167V18.6033C21.1167 16.9433 21.0833 14.8067 18.8 14.8067C16.485 14.8067 16.1317 16.6133 16.1317 18.4817V25.565H11.6883V11.25H15.955V13.2H16.0133C16.61 12.0767 18.06 10.8883 20.2267 10.8883C24.7267 10.8883 25.56 13.8517 25.56 17.7067V25.565H25.5583ZM6.67167 9.29167C6.33259 9.29211 5.99677 9.22562 5.68344 9.09601C5.37011 8.9664 5.08545 8.77623 4.84576 8.53639C4.60608 8.29655 4.41609 8.01176 4.28668 7.69835C4.15728 7.38494 4.09101 7.04907 4.09167 6.71C4.092 6.19972 4.24363 5.70101 4.5274 5.27691C4.81117 4.85281 5.21432 4.52239 5.68588 4.32742C6.15744 4.13245 6.67623 4.08169 7.17663 4.18157C7.67704 4.28144 8.13659 4.52746 8.49718 4.88851C8.85777 5.24956 9.10319 5.70943 9.20242 6.20997C9.30164 6.7105 9.25022 7.22922 9.05464 7.70053C8.85906 8.17184 8.52811 8.57456 8.10365 8.85778C7.67919 9.141 7.18028 9.292 6.67 9.29167H6.67167ZM8.89833 25.565H4.44333V11.25H8.9V25.565H8.89833ZM27.7833 0H2.215C0.988333 0 0 0.966667 0 2.16167V27.8383C0 29.0333 0.99 30 2.21333 30H27.7767C29 30 30 29.0333 30 27.8383V2.16167C30 0.966667 29 0 27.7767 0H27.7817H27.7833Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                  <p className="text-xl text-center text-gray-800 font-normal mb-1">
                    Silene Tokyo
                  </p>
                  <p className="text-center text-base text-gray-600">
                    Chief Marketing Officer
                  </p>
                </div>
              </div>
              <div className=" mx-auto sm:max-w-xs mb-20 xl:max-w-sm relative">
                <div className="relative w-full">
                  <img
                    src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg"
                    className="w-full"
                    alt="Thea"
                  />
                  <div className="flex justify-center items-center absolute opacity-0 bg-gray-900 hover:opacity-75 w-full h-full top-0">
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M20.67 30V18.39H24.5583L25.14 13.8767H20.67V10.9967C20.67 9.69 21.0333 8.79833 22.9067 8.79833H25.2967V4.76167C24.1397 4.63891 22.9768 4.57937 21.8133 4.58333C18.3683 4.58333 16.01 6.68667 16.01 10.55V13.8767H12.1133V18.39H16.01V30H1.66667C1.22464 30 0.800716 29.8244 0.488155 29.5118C0.175595 29.1993 0 28.7754 0 28.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H28.3333C28.7754 0 29.1993 0.175595 29.5118 0.488155C29.8244 0.800716 30 1.22464 30 1.66667V28.3333C30 28.7754 29.8244 29.1993 29.5118 29.5118C29.1993 29.8244 28.7754 30 28.3333 30H20.67Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={28}
                        viewBox="0 0 35 28"
                        fill="none"
                      >
                        <path
                          d="M34.9367 3.42654C33.6643 3.98937 32.315 4.359 30.9334 4.52321C32.3896 3.65227 33.4795 2.28157 34 0.666544C32.6334 1.47988 31.135 2.04988 29.5734 2.35821C28.5244 1.23584 27.134 0.491483 25.6183 0.240852C24.1026 -0.00977847 22.5466 0.247363 21.1921 0.972299C19.8377 1.69724 18.7607 2.84935 18.1285 4.24953C17.4964 5.64971 17.3446 7.21951 17.6967 8.71488C14.9252 8.57597 12.2139 7.85575 9.73884 6.60098C7.26376 5.34622 5.08024 3.58496 3.33003 1.43154C2.71051 2.49563 2.38495 3.70525 2.38669 4.93654C2.38669 7.35321 3.61669 9.48821 5.48669 10.7382C4.38004 10.7034 3.29775 10.4045 2.33003 9.86654V9.95321C2.33036 11.5627 2.88731 13.1226 3.90644 14.3683C4.92557 15.614 6.34416 16.469 7.92169 16.7882C6.89438 17.0666 5.8172 17.1076 4.77169 16.9082C5.21647 18.2936 6.08337 19.5052 7.25101 20.3734C8.41865 21.2416 9.82857 21.7229 11.2834 21.7499C9.83749 22.8854 8.18199 23.7248 6.41149 24.2202C4.641 24.7155 2.79024 24.857 0.965027 24.6365C4.15119 26.6856 7.86019 27.7734 11.6484 27.7699C24.47 27.7699 31.4817 17.1482 31.4817 7.93654C31.4817 7.63654 31.4734 7.33321 31.46 7.03654C32.8248 6.05016 34.0027 4.82824 34.9384 3.42821L34.9367 3.42654Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="cursor-pointer">
                      <svg
                        className="ml-9"
                        xmlns="http://www.w3.org/2000/svg"
                        width={30}
                        height={30}
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M25.5583 25.565H21.1167V18.6033C21.1167 16.9433 21.0833 14.8067 18.8 14.8067C16.485 14.8067 16.1317 16.6133 16.1317 18.4817V25.565H11.6883V11.25H15.955V13.2H16.0133C16.61 12.0767 18.06 10.8883 20.2267 10.8883C24.7267 10.8883 25.56 13.8517 25.56 17.7067V25.565H25.5583ZM6.67167 9.29167C6.33259 9.29211 5.99677 9.22562 5.68344 9.09601C5.37011 8.9664 5.08545 8.77623 4.84576 8.53639C4.60608 8.29655 4.41609 8.01176 4.28668 7.69835C4.15728 7.38494 4.09101 7.04907 4.09167 6.71C4.092 6.19972 4.24363 5.70101 4.5274 5.27691C4.81117 4.85281 5.21432 4.52239 5.68588 4.32742C6.15744 4.13245 6.67623 4.08169 7.17663 4.18157C7.67704 4.28144 8.13659 4.52746 8.49718 4.88851C8.85777 5.24956 9.10319 5.70943 9.20242 6.20997C9.30164 6.7105 9.25022 7.22922 9.05464 7.70053C8.85906 8.17184 8.52811 8.57456 8.10365 8.85778C7.67919 9.141 7.18028 9.292 6.67 9.29167H6.67167ZM8.89833 25.565H4.44333V11.25H8.9V25.565H8.89833ZM27.7833 0H2.215C0.988333 0 0 0.966667 0 2.16167V27.8383C0 29.0333 0.99 30 2.21333 30H27.7767C29 30 30 29.0333 30 27.8383V2.16167C30 0.966667 29 0 27.7767 0H27.7817H27.7833Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="py-5 bg-white flex flex-col justify-center w-11/12 mx-auto absolute rounded shadow -mt-12 right-0 left-0">
                  <p className="text-xl text-center text-gray-800 font-normal mb-1">
                    Richard Johnson
                  </p>
                  <p className="text-center text-base text-gray-600">
                    Head of Talent Manegement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details