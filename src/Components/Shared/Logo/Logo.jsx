import React from "react";
import { FaBeer, FaCar, FaMoneyCheck, FaShip } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto">
      <div className="grid grid-cols-3  gap-7">
        <div
          className=" flex gap-4 uppercase
       "
        >
          <h3 className=" text-6xl  text-orange-500">
            <FaShip />
          </h3>
          <div className="text-1xl ">
            <h1 className="text-1xl text-gray-800 font-bold font-sans">
              Free Shipping
            </h1>
            <p className="text-sm">
              {" "}
              Select bettwen awide range of texbook and media.
            </p>
          </div>
        </div>
        <div
          className=" flex gap-4 uppercase
       "
        >
          <h3 className=" text-6xl  text-orange-500">
            <FaCar />
          </h3>
          <div className="text-1xl ">
            <h1 className="text-1xl text-gray-800 font-bold font-sans">
              Fast Delivery
            </h1>
            <p className="text-sm">
              {" "}
              Fast Delivery Enjoy free shipping and our fast delivery service.
            </p>
          </div>
        </div>
        <div
          className=" flex gap-4 uppercase
       "
        >
          <h3 className=" text-6xl  text-orange-500">
            <FaMoneyCheck />
          </h3>
          <div className=" ">
            <h1 className="text-1xl text-gray-800 font-bold font-sans">
              Discounted Free
            </h1>
            <p className="text-sm">
              {" "}
              Get nice discount on our top rated product every sunday.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
