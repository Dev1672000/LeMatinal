import React from 'react'

const Blog2 = () => {
   const Img = [
     { img: "m1.jpg", link: "Brands" },
     { img: "m3.jpg", link: "Brands" },
     { img: "m3.jpg", link: "Brands" },
     { img: "m2.webp", link: "Brands" },
     { img: "m3.jpg", link: "Brands" },
     { img: "m2.webp", link: "Brands" },
   ];
   return (
     <>
       <div className="mx-[7%]  ">
         <img src="Fram1_63ff0c9d06cff.jpeg" alt="" className="w-[79vw] mt-5 rounded-3xl" />
       </div>
       <div className="py-[5%]">
         <h1 className="text-3xl font-semibold mb-5 mx-[7%]">
           Brands Men Love
         </h1>
         <div className="flex justify-evenly  mx-[7%]">
           {Img.map((item, i) => {
             return (
               <div className="shadow-sm  rounded-[50px]">
                   <img
                     src={item.img}
                     alt=""
                     className="object-cover  w-48 h-48"
                   />
                   <p className="bg-white text-black font-bold text-center p-3">
                     {item.link}
                   </p>
                 </div>
             );
           })}
         </div>
       </div>
       
     </>
   );
}

export default Blog2