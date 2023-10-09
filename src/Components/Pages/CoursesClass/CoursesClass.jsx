import React, { useEffect, useState } from "react";
import Titile from "../../Shared/Ttitle/Titile";
import { FaArrowAltCircleRight, FaGamepad, FaPlus, FaTv } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import CourseDetails from "./CourseDetails";

const CoursesClass = () => {
  const [coursClass, setCourseClass] = useState([]);
  const [slectClass, setSelectClass] = useState(null);

  useEffect(() => {
    fetch("CoursClass.json")
      .then((res) => res.json())
      .then((data) => setCourseClass(data.slice(0, 4)));
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
      <Titile
        heading={"OUR  CLASS"}
        subHeading={"Choose Your Favourit Class"}
      />
      <div className="bg-sky-100 rounded-b-full ">
        <div className="grid  max-w-7xl mx-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-1 place-items-center uppercase">
          {coursClass.map((course) => (
            <div>
              <div>
                <div className="">
                  <div className=" ">
                    <div>
                      <div className=" border-2  border-black p-1 shadow-md mb-14 h-[350px] w-72 rounded-md">
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
                              {course.class_location}
                            </span>
                          </p>

                          <p className="block mb-1 text-2xl font-extrabold text-orange-500">
                            {course.subject_name}
                          </p>

                          <div className="flex   justify-between ">
                            <div className="flex  text-sm font-semibold gap-1 text-green-500">
                              <FaPeopleGroup className="mt-1" />

                              <p>
                                <span>Seats {course.available_seats}</span>
                              </p>
                            </div>
                            <div className="flex text-sm font-semibold gap-1 text-green-500">
                              <FaTv className="mt-1" />

                              <p>
                                <span>Student {course.max_enrollment}</span>
                              </p>
                            </div>
                            <div className="flex text-sm font-semibold gap-1 text-green-500">
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
                          <div className="mt-2">
                            <h1>
                              {" "}
                              Teacher Name:{" "}
                              <span className="text-green-500">
                                {course.teacher}
                              </span>{" "}
                            </h1>
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

export default CoursesClass;
