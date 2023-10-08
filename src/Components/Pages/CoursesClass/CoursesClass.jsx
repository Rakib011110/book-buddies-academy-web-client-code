import React, { useEffect, useState } from "react";
import Titile from "../../Shared/Ttitle/Titile";
import { FaArrowAltCircleRight, FaGamepad, FaTv } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const CoursesClass = () => {
  const [coursClass, setCourseClass] = useState([]);
  useEffect(() => {
    fetch("CoursClass.json")
      .then((res) => res.json())
      .then((data) => setCourseClass(data.slice(0, 4)));
  }, []);
  return (
    <div>
      <Titile
        heading={"OUR  CLASS"}
        subHeading={"Choose Your Favourit Class"}
      />
      <div className="grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 place-items-center uppercase">
        {coursClass.map((course) => (
          <div>
            <div>
              <div className="mt-28 mb-28 max-w-7xl mx-auto">
                <div className="">
                  <div>
                    <div
                      style={{
                        backgroundColor: "#121a23",
                        backgroundImage:
                          "linear-gradient(90deg, #0c0e12 0%, rgba(31, 41, 53, 0.36078) 100%)",
                      }}
                      className="bg-black border-2  border-black p-1 shadow-md mb-14 h-[350px] w-72 rounded-md"
                    >
                      <div className="flex justify-center items-center leading-none">
                        <img
                          src={course.class_picture_url}
                          alt="pic"
                          className="h-44 border-4 border-black w-60 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                        />
                      </div>
                      <div className="p-3 ">
                        <p>
                          date {course.joining_deadline} time
                          <span className="text-green-500">
                            {" "}
                            {course.subject_name}
                          </span>
                        </p>

                        <p className="block mb-1 text-2xl font-extrabold text-yellow-400">
                          {course.class_location}
                        </p>

                        <div className="flex  mb-10 justify-between ">
                          <div className="flex  text-xl font-semibold gap-1 text-white">
                            <FaPeopleGroup className="mt-1" />

                            <p>
                              <span> {course.available_seats}</span>
                            </p>
                          </div>
                          <div className="flex text-xl font-semibold gap-1 text-white">
                            <FaTv className="mt-1" />

                            <p>
                              <span> {course.max_enrollment}</span>
                            </p>
                          </div>
                          <div className="flex text-xl font-semibold gap-1 text-white">
                            <FaGamepad className="mt-1" />
                            <p>
                              <span> {course.class_size}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-2 ">
                        <img
                          src={course.teacher_picture_url}
                          alt=""
                          className="rounded-full h-7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesClass;
