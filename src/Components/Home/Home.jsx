import React from "react";
import Banner from "../../Banner/Banner";
import Logo from "../Shared/Logo/Logo";
import PopularBook from "../Pages/PopularBook/PopularBook";

const Home = () => {
  return (
    <div className="bg-gradient-to-r  h-screen">
      <Banner></Banner>;
      <Logo />
      <PopularBook />
    </div>
  );
};

export default Home;
