import React from 'react'

const Men = () => {
      const Img = [
    
        {
          img: "m3.jpg",
          tag: "Bollywood",
          Shares: "3 Shares",
          link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
        },
        {
          img: "m3.jpg",
          tag: "Bollywood",
          Shares: "338 Shares",
          link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
        },
        {
          img: "m2.webp",
          Shares: "8 Shares",
          tag: "Bollywood",
          link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
        },
        {
          img: "m3.jpg",
          tag: "Bollywood",
          Shares: "15 Shares",
          link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
        },
      ];
  return (
    <div className="md:mx-[5%] 2xl:container xl:px-20 gap-7 lg:px-10 px-6">
      <div className="py-[2%]  border-t-2">
        <h1 className="text-3xl font-semibold mb-5 ">Men are Reading</h1>
        <div className="grid grid-cols-4 rounded-lg ">
          {Img.map((item, i) => {
            return (
              <div className="shadow-lg  w-72">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover  w-72 h-80"
                />

                <div className="bg-white ">
                  <p className="uppercase text-gray-500">{item.tag}</p>
                  <p className="text-black hover:underline text-xs font-medium text-justify ">
                    {" "}
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
      </div>
      <div className="py-[2%]  border-t-2">
        <h1 className="text-3xl font-semibold mb-5 ">MensXP Stories</h1>
        <div className="grid grid-cols-5 rounded-lg ">
          {Img.map((item, i) => {
            return (
              <div className="shadow-lg  w-56">
                <img
                  src={item.img}
                  alt=""
                  className="object-cover  w-56 h-80"
                />

                <div className="bg-white p-4">
                  <p className="uppercase text-gray-500">{item.tag}</p>
                  <p className="text-black hover:underline text-xs font-medium text-justify ">
                    {" "}
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
      </div>
    </div>
  );
}

export default Men