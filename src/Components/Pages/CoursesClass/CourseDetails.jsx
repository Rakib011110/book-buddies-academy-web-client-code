import React from "react";

const CourseDetails = ({ closeModal, course }) => {
  const {
    subject_name,
    teacher,
    teacher_picture_url,
    class_description,
    class_size,
    available_seats,
    class_location,
    eligibility,
    max_enrollment,
    joining_deadline,
    enrollment_price,
    class_picture_url,
  } = course;

  return (
    <div>
      <div class="flex flex-col justify-center h-screen">
        <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div class="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src={class_picture_url}
              alt="tailwind logo"
              class="rounded-xl"
            />
          </div>
          <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div class="flex justify-between item-center">
              <p class="text-gray-500 font-medium hidden md:block">
                Teacher Name : {teacher}{" "}
              </p>
              <div>{/*  */}</div>
              <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                Fees : {enrollment_price}
              </div>
            </div>
            <h3 class="font-black text-gray-800 md:text-3xl text-xl">
              {subject_name}
            </h3>
            <p class="md:text-lg text-gray-500 text-base">
              {class_description}
            </p>
            <p class="text-md font-black text-gray-800">
              Joining deadline : {joining_deadline}+
              <span class="font-normal text-gray-600 text-base"></span>
            </p>
            <p class="text-md font-black text-gray-800">
              Eligibility : {eligibility}
              <span class="font-normal text-gray-600 text-base"></span>
            </p>
            <button
              onClick={() => closeModal()}
              className="btn btn-primary ml-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
