import React from "react";

const PopularBook = () => {
  return (
    <div className="container mx-auto mt-28">
      <div className="flex justify-center gap-16">
        <div className="form-control ">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered w-96"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="form-control ">
          <div className="input-group">
            <select className="select select-bordered w-96">
              <option disabled selected>
                Pick category
              </option>
              <option>T-shirts</option>
              <option>Mugs</option>
            </select>
            <button className="btn">Go</button>
          </div>
        </div>
      </div>
      <hr className="border border-purple-500 mt-5 mb-20 w-full" />
    </div>
  );
};

export default PopularBook;