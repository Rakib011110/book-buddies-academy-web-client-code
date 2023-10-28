import React from "react";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  return (
    <div>
      <div>
        <div>
          <div className=" mx-auto mb-4 mt-10 ">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-center items-center">
                <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="book">
                    <div className="page">
                      <div>
                        <img
                          src={book.image}
                          className="front-page bg-cover bg-center relative border border-blue-500"
                          alt=""
                        />
                        <div className="after-content bg-center absolute inset-0 opacity-0 hover:opacity-100 transition duration-300">
                          <img
                            src="https://lookupmy.xyz/wp-content/uploads/2021/03/sarah-book-3.jpg"
                            alt="Content"
                            className="h-full w-full"
                          />
                        </div>
                      </div>
                      <div className="back-page flex flex-col justify-between h-full">
                        <div className="text-black">
                          <div className="font-bold"> {book.title} </div>
                          <div className="text-base"> {book.description} </div>
                        </div>
                        <Link to={`/`}>
                          <button className="btn mb-4 mt-auto">
                            View Details
                          </button>
                        </Link>
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
  );
};

export default Books;
