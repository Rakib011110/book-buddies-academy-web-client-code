import React from "react";
import Lottie from "react-lottie-player";
import animationBook from "../../../../public/img/Animation/book5json.json";
const AllClassBanner = () => {
  return (
    <div>
      <div className="bg-sky-300 rounded-3xl rounded-t-none">
        <div className="mx-auto  max-w-7xl mb-20   py-12 px-6 xl:px-0 flex justify-center items-center flex-col">
          <div className="flex justify-between bg-sky-500 items-stretch flex-row">
            <div className="flex items-center bg-gray-800 justify-center">
              <p className="transform flex flex-shrink-0 -rotate-90 text-2xl font-semibold tracking-wide leading-normal text-white">
                50% OFF
              </p>
            </div>
            <div className="flex justify-center items-start flex-col xl:w-2/5 md:w-5/12 xl:px-7 px-6 md:px-0 md:py-0 py-5">
              <div>
                <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
                  JOIN YOUR FAVOURIT <span className="text-white">CLASS</span>
                </p>
              </div>
              <div className="xl:mt-4 mt-2">
                <p className="text-base xl:text-xl leading-7 text-gray-600 pr-4">
                  "Unlock potential at Book Buddies Accademy Class: where minds
                  blossom and friendships flourish. 🌱📚 Join the
                  journey—learning, laughing, and thriving every day!
                </p>
              </div>
            </div>
            <div className="">
              <Lottie
                className="hidden md:block h-44 md:h-60 xl:h-72"
                loop
                animationData={animationBook}
                play
              />
            </div>
          </div>
          <div className="md:hidden mt-6 w-full">
            <img
              src="https://www.books2door.com/cdn/shop/files/B2D_collections_-_kids_books_1000x1000.jpg?v=1692354555"
              alt="pexels-dmitry-zvolskiy-2082090-1"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClassBanner;
