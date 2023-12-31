import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaGamepad, FaPlus, FaTv } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import CourseDetails from "../CoursesClass/CourseDetails";
import Titile from "../../Shared/Ttitle/Titile";
import AllClassBanner from "./AllClassBanner";

const AllClass = () => {
  const [coursClass, setCourseClass] = useState([]);
  const [slectClass, setSelectClass] = useState(null);

  useEffect(() => {
    fetch("CoursClass.json")
      .then((res) => res.json())
      .then((data) => setCourseClass(data));
  }, []);

  const openModal = (course) => {
    setSelectClass(course);
    console.log(course);
  };

  const closeModal = () => {
    setSelectClass(null);
  };

  const handledetailsRouter = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer:
        '<a  as={Link}  href="/login" className="text-red-600">You Have to login ?</a>',
    });
  };

  return (
    <div>
      <div>
        <AllClassBanner />
      </div>

      <div
        className="bg-sky-100 rounded-b-full 
      "
      >
        <div className="grid  max-w-7xl mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 place-items-center uppercase">
          {coursClass.map((course) => (
            <div>
              <div>
                <div>
                  <div className="">
                    <div className=" ">
                      <div>
                        <div className=" border-2  border-green-500 p-1 shadow-md mb-14 h-[300px] w-72 rounded-md">
                          <div className="flex justify-center items-center leading-none">
                            <img
                              src={course.class_picture_url}
                              alt="pic"
                              className="h-44 border-4 border-green-400 w-60 rounded-md shadow-2xl mt- transform -translate-y-10 hover:-translate-y-4 transition duration-700"
                            />
                          </div>
                          <div className="p-3 ">
                            <p>Joining date : {course.joining_deadline} time</p>
                            <p className="block mb-1 text-2xl font-extrabold text-orange-500">
                              {course.subject_name}
                            </p>
                            <div className="   "></div>
                            <div className="mt-">
                              <div className="flex justify-between text-sm font-semibold gap-1 text-orange-500">
                                <h1>
                                  {" "}
                                  Teacher :{" "}
                                  <span className="text-green-500 ">
                                    {course.teacher}
                                  </span>{" "}
                                </h1>
                                <p>
                                  <button
                                    onClick={() => openModal(course)}
                                    className="btn-sm btn-outline text-white bg-orange-500 rounded-xl"
                                  >
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
            </div>
          ))}
        </div>
      </div>
      <div>
        {slectClass && (
          <div className="fixed inset-0  flex items-center justify-center">
            <CourseDetails course={slectClass} closeModal={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllClass;
