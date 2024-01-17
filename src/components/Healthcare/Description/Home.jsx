import React from 'react'
import {
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsBookmark,
} from "react-icons/bs";

const Home = () => {
  return (
    <div className="flex mx-[10.5%] space-x-3 ">
      <div className='w-[20%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe repellat libero modi? Hic iure eius neque voluptatibus consequuntur doloribus dolor provident quae placeat facilis quis praesentium nulla reprehenderit repellendus quos tempora, perferendis earum, delectus ab aperiam minima corrupti sed! Voluptatem, autem quisquam minus vero eaque quam dignissimos a aspernatur.</div>
      <div className="w-[60%] space-y-3">
        <h1 className="text-xl mt-[1%]">
          Weather News Live Updates: Yamuna water level may touch 208.75m
          between 3-5pm in Delhi
        </h1>
        <div className="flex justify-between ">
          <p className="text-lg">Jul 13, 2023 09:16 AM IST</p>
          <p className="flex gap-5 text-[22px]">
            <BsBookmark />
            <BsInstagram />
            <BsFacebook />
            <BsLinkedin />
          </p>
        </div>
        <div>
          <p>
            Weather News India Live Updates: According to the Delhi government,
            a total of 16,564 people living in low-lying areas have been
            evacuated to safer places. Today's weather news LIVE Updates:
            Several north Indian states have reported a loss of life and
            property, along with disruption in transport and power as heavy
            rainfall lashed the parts of Delhi, Uttar Pradesh, Uttarakhand and
            Himachal Pradesh, for the past few days leading to waterlogging,
            flash floods and landslides.
          </p>
          <img src="womanRain.jpg" alt="" />
          <p>
            People waiting for help at the Yamuna Sabzi Mandi wade through
            floodwaters near Mayur Vihar on Wednesday. (Raj K Raj/HT
            Photo)(HT_PRINT)
          </p>
          <p>
            Today's weather news LIVE Updates: Several north Indian states have
            reported a loss of life and property, along with disruption in
            transport and power as heavy rainfall lashed the parts of Delhi,
            Uttar Pradesh, Uttarakhand and Himachal Pradesh, for the past few
            days leading to waterlogging, flash floods and landslides.
          </p>
          <p>
            Meanwhile, the water level of Yamuna in Delhi has crossed the mark
            of 208.08 meters, exceeding the Central Water Commission's estimate
            of 207.99 meters late on Wednesday night, putting authorities on
            alert mode. Thousands of people staying national capital’s low-lying
            areas were shifted to safe places as a precautionary measure.{" "}
          </p>
        </div>
      </div>
      <div className='w-[20%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit voluptates autem sapiente, ab eaque! Aliquid, porro facere! Mollitia maiores atque fuga voluptatem fugiat amet odio quisquam doloribus perspiciatis reprehenderit sit, ratione quas impedit nam, eius praesentium natus voluptatibus officiis distinctio. Quaerat eveniet maiores odit voluptas, iusto odio aliquam corrupti.</div>
    </div>
  );
}

export default Home