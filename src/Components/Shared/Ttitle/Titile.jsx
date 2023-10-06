import React from "react";

const Titile = ({ heading, subHeading }) => {
  return (
    <div>
      <div className="w-[340px] h-36 items-center p-4  bg-cover  mx-auto text-center uppercase bg-[url('https://i.ibb.co/1LqBYXg/cloudx2.png')] mb-10">
        <h1 className="text-orange-500 font-bold mt-4 border-b-2 w-48  mx-auto text-4xl ">
          {heading}
        </h1>
        <p className="border-b-2  w-72 text-sm   font-medium  mx-auto">
          <span className="text-orange-500"> {subHeading}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Titile;
