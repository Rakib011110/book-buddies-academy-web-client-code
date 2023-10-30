import React, { useEffect, useState } from "react";
import "./PopularBook.css";
import { Link } from "react-router-dom";

const PopularBook = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Fetch books data from the provided JSON file
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 4)));
  }, []);

  // Filter books based on search term and selected category
  const filteredBooks = books.filter((book) => {
    const titleMatches = book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatches =
      selectedCategory === "All" || book.category === selectedCategory;
    return titleMatches && categoryMatches;
  });

  return (
    <div className="  mt-28 max-w-7xl mx-auto">
      <div className="sm:flex  justify-between sm:flex-wrap md:flex-nowrap  container mx-auto  gap-16">
        <div className=" border  items-center font-semibold border-orange-400 bg-sky-400   flex p-4 rounded-md">
          <h2>
            FIND YOUR THE <span className="text-white">POPULAR BOOKS</span>
          </h2>
        </div>

        <div className="form-control mb-3">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-96"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
      </div>
      <div className="bg-sky-50 rounded-3xl">
        <hr className="border border-purple-500 mt-5  md:w-full sm:w-1/2 mx-auto" />

        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
            {filteredBooks.map((book) => (
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
                                  <div className="font-bold">
                                    {" "}
                                    {book.title}{" "}
                                  </div>
                                  <div className="text-base">
                                    {" "}
                                    {book.description}{" "}
                                  </div>
                                </div>
                                <Link to={`/allgame`}>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBook;
