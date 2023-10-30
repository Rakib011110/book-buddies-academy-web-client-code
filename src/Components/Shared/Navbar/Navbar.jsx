import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaBookOpen, FaSchool, FaShip } from "react-icons/fa";
import logo from "../../../../public/img/Red Simple Cute Online Book Club Logo.png";
const Navbar = () => {
  const navOptions = (
    <>
      <li className="font-semibold text-lg">
        <Link to="/allBooks">
          {" "}
          <FaBook className="text-green-400 "></FaBook> ALL BOOKS
        </Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to="/">SCHOOLS </Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to="/">BLOG</Link>
      </li>
      <li className="font-semibold text-lg">
        <Link to="/">CONTACT</Link>
      </li>
    </>
  );

  return (
    <div className="bg-sky-100">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link className=" ">
            {" "}
            <div className=" flex  font-semibold gap-3 text-3xl ">
              <FaBookOpen className="text-5xl  text-orange-500 "> </FaBookOpen>
              <div className="mt-1">
                <h1>BOOK BUDIES</h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
