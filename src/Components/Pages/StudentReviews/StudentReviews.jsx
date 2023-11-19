import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaPlus } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import Titile from "../../Shared/Ttitle/Titile";

const StudentReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("studentReviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <Titile heading={"Reviews "} subHeading={"Explore Our Student Reviews"} />

      <div className="bg-sky-200 rounded-3xl">
        <div className="max-w-7xl ml-auto   mr-auto flex border-t-0 items-start  border  rounded-2xl border-l-2   ">
          <Marquee
            className="rounded-r-3xl border-r-4"
            direction="right"
            speed={50}
            gradientColor={[0, 0, 0]}
            gradientWidth={30}
          >
            {reviews.map((item, index) => (
              <div>
                <div>
                  <div>
                    <div className="card md:w-h-62 md:h- w-64 h-66 shadow-xl mt-20 bg-[#121a23] border-4 border-green-400 flex-col flex items-center ">
                      <img
                        src={item.student_picture_url}
                        alt={item.student_picture_url}
                        className=" cus-rounded md:h-32 md:w-40  h-20 rounded-full w-36 -top-20 absolute border-4"
                      />
                      <div className="card-body md:mt-7 mt-1">
                        <div className="flex flex-col items-center text-center">
                          <h2 className="card-title text-white uppercase ">
                            {item.student_name}
                          </h2>
                          <p className="md:text-sm  text-green-400">
                            Subject : {item.subject_name}
                          </p>
                          <p className="md:text-sm pt-2 text-white">
                            {item.comment.slice(0, 100)}..
                          </p>

                          <div className="flex items-center mt-1 text-2xl ">
                            {" "}
                            <AiFillStar className=" text-yellow-400" />
                            <AiFillStar className=" text-yellow-400" />
                            <AiFillStar className=" text-yellow-400" />
                            <AiFillStar className=" text-yellow-400" />
                            <AiFillStar className=" text-yellow-400" />
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
    </div>
  );
};

export default StudentReviews;
