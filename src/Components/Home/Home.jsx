import React from "react";
import Banner from "../../Banner/Banner";
import Logo from "../Shared/Logo/Logo";
import PopularBook from "../Pages/PopularBook/PopularBook";
import Activities from "../Pages/Activities/Activities";
import Footer from "../Shared/Footer";
import CoursesClass from "../Pages/CoursesClass/CoursesClass";
import OurTeacher from "../Pages/OurTeacher/OurTeacher";
import StudentReviews from "../Pages/StudentReviews/StudentReviews";
import AllBooksBanner from "../Pages/AllBooks/AllBooksBanner/AllBooksBanner";
import ReviewSection from "../Pages/StudentReviews/StudentReviews";

const Home = () => {
  return (
    <div className="   ">
      <Banner />

      <div className="bg-sky-300">
        <PopularBook />
        <Activities />
      </div>

      <div className="bg-sky-300">
        <CoursesClass />
        <OurTeacher />
      </div>

      <div className="mt-28">
        <ReviewSection />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
