import React from "react";
import Marquee from "react-fast-marquee";
import { FaPlus } from "react-icons/fa";

const StudentReviews = () => {
  const data = [
    {
      name: "",
      SocialPic: "https://i.ibb.co/xgYrGJQ/pngwing-com-12.png",
      esponredPic: "",
    },
    {
      SocialPic: "https://i.ibb.co/J285tWN/pngwing-com-11.png",
      esponredPic: "",
    },
    {
      name: "",
      SocialPic: "https://i.ibb.co/y4fhvWp/pngwing-com-8.png",
      esponredPic: "",
    },
  ];

  return (
    <div>
      <div className="max-w-7xl ml-auto mr-auto flex  items-start  shadow-2xl  rounded-2xl border-l-2 p-2  ">
        <Marquee
          className="rounded-r-3xl border-r-4"
          direction="right"
          speed={50}
          gradientColor={[0, 0, 0]}
          gradientWidth={30}
        >
          {data.map((item, index) => (
            <div>
              <div>
                <div className="">
                  <div className=" ">
                    <div>
                      <div className=" border-2   border-green-500  p-1 shadow-md mb-14 h-[350px] w-72 rounded-md">
                        <div className="flex justify-center mt-5  items-center leading-none">
                          <img
                            src={item.SocialPic}
                            alt="pic"
                            className="h-44 border-4  rounded-full border-green-400 w-60  shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                          />
                        </div>
                        <div className="p-3 ">
                          <p>date time</p>
                          <p className="block mb-1 text-2xl font-extrabold text-orange-500"></p>
                          <div className="   "></div>
                          <div className="mt-4">
                            <div className="flex justify-between text-sm font-semibold gap-1 text-orange-500">
                              <h1>
                                {" "}
                                Teacher :{" "}
                                <span className="text-green-500 "></span>{" "}
                              </h1>
                              <p>
                                <button className="btn-sm btn-outline text-white bg-orange-500 rounded-xl">
                                  <FaPlus />
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default StudentReviews;
