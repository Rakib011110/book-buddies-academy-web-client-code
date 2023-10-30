import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "react-parallax";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { FaSearch } from "react-icons/fa";

export default function BannerCourosel() {
  return (
    <>
      <div className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* <img
              className="max-h-screen"
              src=""
              alt=""
            />  */}
            <Parallax
              bgImage="https://www.clever.com/wp-content/uploads/2023/06/teenagers-at-desk.jpg"
              blur={{ min: -40, max: 20 }}
              className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
            >
              <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
                <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10">
                  <h2 className="font-bold md:text-6xl text-orange-500 my-3">
                    Explore Our Books
                  </h2>
                  <div>
                    <p className="text-gray-200 font-thin">
                      A book is a number of pieces of paper, usually with words
                      printed on them, which are fastened together and fixed
                      inside a cover of stronger paper or cardboard
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center items-center">
                    <input
                      type="text"
                      placeholder="Search Books"
                      className="bg-transparent border-b border-white text-white py-1 px-2 mr-3 focus:outline-none"
                    />
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-full">
                      <FaSearch className="mr-2" />
                      Search {/* Use the React Icon */}
                    </button>
                  </div>
                </div>
              </div>
            </Parallax>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Parallax
              bgImage="https://i.ibb.co/M8CbZsq/pngwing-com-8.png"
              blur={{ min: -15, max: 12 }}
              className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
            >
              <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
                {/* <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10 ">
                  <h2 className="font-bold md:text-6xl text-orange-500 my-3">
                    Explore Our Class
                  </h2>
                  <div>
                    <p className="text-gray-200 font-thin">
                      Best Dining in Dhaka Division, Bangladesh: See 23652
                      Tripadvisor traveler reviews of 1076 Dhaka Division
                      restaurants and search by cuisine, price, location!
                    </p>
                  </div>
                </div> */}
              </div>
            </Parallax>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Parallax
              bgImage="https://www.ppic.org/wp-content/uploads/elementary-school-student-sitting-at-desk-in-classroom-and-writing-with-a-pencil.jpg"
              blur={{ min: -15, max: 12 }}
              className="md:bg-no-repeat md:h-screen md:w-full bg-cover h-96"
            >
              <div className="md:h-screen h-96 flex items-center bg-gradient-to-r from-slate-950 via-transparent to-slate-950 ">
                <div className="text-white md:mt-0 mt-20 w-1/2 bg-gradient-to-r from-slate-950 flex flex-col h-full justify-center to-transparent px-10">
                  <h2 className="font-bold md:text-6xl text-orange-500 my-3">
                    WELCOME TO OUR BOOK BUDDIES ACADAMY
                  </h2>
                  <div>
                    <p className="text-gray-200 font-thin">
                      A book is a number of pieces of paper, usually with words
                      printed on them, which are fastened together and fixed
                      inside a cover of stronger paper or cardboard
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center items-center">
                    <input
                      type="text"
                      placeholder="Search Books"
                      className="bg-transparent border-b border-white text-white py-1 px-2 mr-3 focus:outline-none"
                    />
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-full">
                      <FaSearch className="mr-2" />
                      Search {/* Use the React Icon */}
                    </button>
                  </div>
                </div>
              </div>
            </Parallax>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
