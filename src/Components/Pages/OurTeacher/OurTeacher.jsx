import React, { useEffect, useState } from "react";
import Teacher from "./Teacher";
import Titile from "../../Shared/Ttitle/Titile";

const OurTeacher = () => {
  const [teachers, setTeacher] = useState([]);

  useEffect(() => {
    fetch("Teacher.json")
      .then((res) => res.json())
      .then((data) => setTeacher(data.slice(0, 4)));
  }, []);
  return (
    <div>
      <Titile heading={"OUR TEACHER"} subHeading={"Meet Our Teacher"} />

      <div className="bg-sky-100 mt-10 ">
        <div className="  max-w-7xl mx-auto gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
          {teachers.map((teacher) => (
            <Teacher teacher={teacher} key={teacher.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeacher;
