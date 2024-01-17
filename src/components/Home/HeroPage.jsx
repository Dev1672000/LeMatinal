
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const HeroPage = () => {
    const Img = [
      { img: "m1.jpg", link: "" },
      { img: "m3.jpg", link: "" },
      { img: "m3.jpg", link: "" },
      { img: "m2.webp", link: "" },
    ];
  return (
    <div className="mt-[5%] mx-[8%]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div
            className="py-[15%]"
            style={{
              backgroundImage: `url("m1.jpg")`,
              backgroundSize: "cover",
              opacity: "90%",
              borderRadius: "25px",
              position: "relative",
            }}
          >
            <p className="uppercase leading-4 text-white tracking-wide">
              Bollywood
            </p>
            <Link className=" text-center hover:underline  text-white sm:text-xl xl:text-4xl pl-5 font-semibold  ">
              {" "}
              I'm An Introvert Who Dated Both An Introvert & Extrovert- I Found
              A Clear Winner
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="py-[15%]"
            style={{
              backgroundImage: `url("m3.jpg")`,
              backgroundSize: "cover",
              opacity: "90%",
              borderRadius: "25px",
              position: "relative",
            }}
          >
            <Link
              href=""
              className=" text-center hover:underline text-white sm:text-xl xl:text-4xl mx-[3%] pt-[10%] font-semibold  "
            >
              {" "}
              I am An Introvert Who Dated Both An Introvert & Extrovert- I Found
              A Clear Winner
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="py-[15%]"
            style={{
              backgroundImage: `url("m2.webp")`,
              backgroundSize: "cover",
              opacity: "90%",
              borderRadius: "25px",
              position: "relative",
            }}
          >
            <Link
              href=""
              className=" text-center hover:underline text-white sm:text-xl xl:text-4xl mx-[3%] pt-[10%] font-semibold  "
            >
              {" "}
              I'm An Introvert Who Dated Both An Introvert & Extrovert- I Found
              A Clear Winner
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroPage