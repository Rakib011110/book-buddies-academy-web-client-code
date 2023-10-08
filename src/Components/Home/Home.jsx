import React from "react";
import Banner from "../../Banner/Banner";
import Logo from "../Shared/Logo/Logo";
import PopularBook from "../Pages/PopularBook/PopularBook";
import Activities from "../Pages/Activities/Activities";
import Footer from "../Shared/Footer";
import CoursesClass from "../Pages/CoursesClass/CoursesClass";

const Home = () => {
  return (
    <div className="bg-gradient-to-r  h-screen">
      <Banner></Banner>;
      <Logo />
      <PopularBook />
      <Activities />
      <CoursesClass />
    </div>
  );
};

export default Home;
