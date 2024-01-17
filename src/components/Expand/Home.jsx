import React,{useState} from 'react'

const Home = () => {
     const [itemsToShow, setItemsToShow] = useState(10);

     const loadMoreItems = () => {
       setItemsToShow(itemsToShow + 10);
     };
     const Img = [
       {
         img: "m1.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "38 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m1.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "38 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m1.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "38 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
       {
         img: "m3.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World: Project K Title & Motion Poster To Allegedly Screen At Comic-Con USA",
       },
     ];
     const Img1 = [
       {
         img: "m1.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "38 Shares",
         link: "Prabhas Goes Pan-World",
       },
       {
         img: "m2.webp",
         tag: "5 Hours | campaign Team",
         Shares: "3 Shares",
         link: "Prabhas Goes Pan-World",
       },
       {
         img: "m1.jpg",
         tag: "5 Hours | campaign Team",
         Shares: "338 Shares",
         link: "Prabhas Goes Pan-World",
       },
       {
         img: "m2.webp",
         Shares: "8 Shares",
         tag: "5 Hours | campaign Team",
         link: "Prabhas Goes Pan-World",
       },
       {
         img: "m2.webp",
         tag: "5 Hours | campaign Team",
         Shares: "15 Shares",
         link: "Prabhas Goes Pan-World",
       },
     ];
     const Img2 = [
       {
         img: "m2.webp",
         link: "Cannes Lions 2023: Ogilvy India bags Grand Prix for Cadbury on day four",
       },
       {
         img: "m2.webp",
         link: "Cannes Lions 2023: Ogilvy India bags Grand Prix for Cadbury on day four",
       },
       {
         img: "m2.webp",
         link: "Cannes Lions 2023: Ogilvy India bags Grand Prix for Cadbury on day four",
       },
       {
         img: "m2.webp",
         link: "Cannes Lions 2023: Ogilvy India bags Grand Prix for Cadbury on day four",
       },
       {
         img: "m2.webp",
         link: "Cannes Lions 2023: Ogilvy India bags Grand Prix for Cadbury on day four",
       },
       {
         img: "m2.webp",
         link: "Cannes Lions 2023: Ogilvy India bags Grand Prix for Cadbury on day four",
       },
     ];
  return (
    <div className="2xl:mx-auto 2xl:container xl:px-20 gap-7 lg:px-10 px-6">
      <div className="2xl:mx-auto flex  2xl:container xl:px-20 gap-7 lg:px-10 px-6">
        <div className="py-[2%] w-[80%] ">
          <h1 className="text-3xl font-semibold mb-5">
            The Health: The latest from the world of commercial creativity
          </h1>
          <div className="grid grid-cols-3 gap-5 rounded-lg">
            {Img.slice(0, itemsToShow).map((item, i) => {
              return (
                <div key={i} className="shadow-lg w-72">
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="object-cover transition duration-300 hover:scale-110 w-72 h-40"
                    />
                  </div>
                  <div className="bg-white p-4">
                    <p className="uppercase text-xs italic -mt-2 text-gray-300">{item.tag}</p>
                    <p className="text-black hover:underline text-xs font-medium text-justify">
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
            <button
              className="w-[50%] bg-white shadow-lg hover:bg-slate-200 text-lg font-semibold mt-10 rounded-md border-[1px] hover:border-[2px] py-2 border-black"
              onClick={loadMoreItems}
            >
              Load More...
            </button>
          )}
        </div>
        <div className="py-[2%] bg-white shadow-lg h-[55vw] w-[25%] ">
          <h1 className="text-3xl text-center font-semibold mb-5">
            The latest world 
          </h1>
          <div className="grid grid-cols-1  rounded-lg">
            {Img2.slice(0, itemsToShow).map((item, i) => {
              return (
                <div key={i} className=" py-4 border-b-2 px-2 gap-3 flex">
                  <div className="bg-white w-1/2">
                    <p className="uppercase text-gray-500">{item.tag}</p>
                    <p className="text-black hover:underline text-xs font-medium text-justify">
                      {item.link}
                    </p>
                    <p className="text-xs mt-2 italic text-gray-500">
                      {item.Shares}
                    </p>
                  </div>
                  <div className="overflow-hidden w-1/2">
                    <img
                      src={item.img}
                      alt=""
                      className="object-cover transition duration-300 hover:scale-110 "
                    />
                  </div>
                </div>
              );
            })}
          </div>
     
        </div>
      </div>
    </div>
  );
}

export default Home