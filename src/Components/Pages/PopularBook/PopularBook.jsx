import React, { useEffect, useState } from "react";
import "./PopularBook.css";
import { Link } from "react-router-dom";

const PopularBook = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleSearchInputChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    filterBooks(searchTerm, selectedCategory);
  };

  const handleCategorySelectChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    filterBooks(searchTerm, category);
  };

  const filterBooks = (searchTerm, category) => {
    let filtered = books;

    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm) ||
          book.description.toLowerCase().includes(searchTerm)
      );
    }

    if (category && category !== "Pick category") {
      filtered = filtered.filter((book) => book.category === category);
    }

    setFilteredBooks(filtered);
  };

  return (
    <div className=" mt-28">
      <div className="flex justify-center container mx-auto flex-wrap gap-16">
        <div className="form-control ">
          <div className="input-group">
            <input
              value={searchTerm}
              onChange={handleSearchInputChange}
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
            <select
              className="select select-bordered w-96"
              onChange={handleCategorySelectChange}
              value={selectedCategory}
            >
              <option value="" disabled>
                Pick category
              </option>
              <option value="">All Categories</option>
              <option value="Fiction">Fiction</option>
              <option value="Non-Fiction">Non-Fiction</option>
            </select>
            <button className="btn">Go</button>
          </div>
        </div>
      </div>
      <div className="bg-orange-50">
        <hr className="border border-purple-500 mt-5  w-full" />

        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
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
