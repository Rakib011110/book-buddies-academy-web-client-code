import React, { useEffect, useState } from "react";
import AllBooksBanner from "./AllBooksBanner/AllBooksBanner";
import { Link } from "react-router-dom";
import Books from "./Books";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <AllBooksBanner />

      <div className="  ">
        <div className="bg-sky-50 rounded-3xl">
          <hr className="border border-purple-500 mt-5  md:w-full sm:w-1/2 mx-auto" />

          <div className="max-w-7xl mx-auto ">
            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
              {books.map((book) => (
                <Books book={book} key={book._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
