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
    <div className="card card-side bg-base-100 shadow-xl p-6 border border-green-400 rounded-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 md:mr-6 mb-4 md:mb-0">
          <figure>
            <img
              src={class_picture_url}
              alt={subject_name}
              className="w-full h-auto"
            />
          </figure>
        </div>
        <div className="md:w-2/3">
          <h2 className="card-title text-orange-500 mb-2">{subject_name}</h2>
          <p className="mb-4">{class_description}</p>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-1/2 mb-2">
              <strong>Teacher:</strong> {teacher}
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <strong>Class Size:</strong> {class_size}
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <strong>Available Seats:</strong> {available_seats}
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <strong>Class Location:</strong> {class_location}
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <strong>Eligibility:</strong> {eligibility}
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <strong>Max Enrollment:</strong> {max_enrollment}
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <strong>Joining Deadline:</strong> {joining_deadline}
            </div>
            <div className="w-full md:w-1/2 mb-2">
              <strong>Enrollment Price:</strong> {enrollment_price}
            </div>
          </div>
          <div className="card-actions flex  md:justify-end  sm:justify-start">
            <button className="btn btn-primary">Watch</button>
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
