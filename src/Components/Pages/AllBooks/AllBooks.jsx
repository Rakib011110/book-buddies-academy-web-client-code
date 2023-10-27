import React from "react";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Fetch books data from the provided JSON file
    fetch("Books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 4)));
  }, []);

  return <div>



    
  </div>;
};

export default AllBooks;
