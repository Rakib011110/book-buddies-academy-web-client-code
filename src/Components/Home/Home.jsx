import React from "react";
import Banner from "../../Banner/Banner";
import Logo from "../Shared/Logo/Logo";
import PopularBook from "../Pages/PopularBook/PopularBook";
import Activities from "../Pages/Activities/Activities";
import Footer from "../Shared/Footer";
import CoursesClass from "../Pages/CoursesClass/CoursesClass";
import OurTeacher from "../Pages/OurTeacher/OurTeacher";

const Home = () => {
  return (
    <div className="bg-gradient-to-r  h-screen">
      <Banner></Banner>;
      <Logo />
      <PopularBook />
      <Activities />
      <CoursesClass />
      <OurTeacher />
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
