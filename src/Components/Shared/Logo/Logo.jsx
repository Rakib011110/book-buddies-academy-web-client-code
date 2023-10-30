import React from "react";
import { FaBeer, FaCar, FaMoneyCheck, FaShip } from "react-icons/fa";
import logo1 from "../../../../public/img/Animation/book2json.json";
import logo2 from "../../../../public/img/Animation/book3json.json";
import logo4 from "../../../../public/img/Animation/book4json.json";
import Lottie from "react-lottie-player";

const Logo = () => {
  return (
    <div className=" max-w-7xl mx-auto bg-sky-400 rounded-md p-4">
      <div className="grid grid-cols-1 md:grid-cols-4  gap-7">
        <div
          className=" flex justify-center gap-4 uppercase
       "
        >
          <h3 className="  mx-auto  text-center border   rounded-full text-orange-500">
            <Lottie
              className="  h-20 w-32 mx-auto "
              loop
              animationData={logo1}
              play
            />
          </h3>
        </div>

        <div
          className=" flex gap-4 uppercase
       "
        >
          <h3 className="  mx-auto  text-center   border-2  border-2-green-400 rounded-full text-orange-500">
            <Lottie
              className="    h-20 w-32 mx-auto "
              loop
              animationData={logo2}
              play
            />
          </h3>
        </div>
        <div
          className=" flex gap-4 uppercase
       "
        >
          <h3 className="  mx-auto  text-center  border-2   rounded-full text-orange-500">
            <Lottie
              className="  h-20 w-32 mx-auto "
              loop
              animationData={logo4}
              play
            />
          </h3>
        </div>
        <div
          className=" flex gap-4 uppercase
       "
        >
          <h3 className="  mx-auto  text-center  border-2  rounded-full text-orange-500">
            <Lottie
              className="  h-20 w-32 mx-auto "
              loop
              animationData={logo1}
              play
            />
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Logo;
