import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Lottie from "react-lottie-player";

const Register = () => {
  const [error, setErr] = useState("");
  const { createUser, updateUserData, googleSignIn, githubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleCreateUser = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;
      // updateUserData(name, photo);
      navigate(from, { replace: true });
      form.reset();
      if (user) {
        toast("Account Created Successfully");
      }
    } catch (error) {
      const errorMessage = error.message;
      setErr(errorMessage);
    }
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });

        if (user) {
          toast("Logged in with GitHub successfully");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
        if (user) {
          toast("Logged in with Google successfully");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <div>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
                Register
              </span>
            </h2>
            <form onSubmit={handleCreateUser}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name
                </label>
                <div>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="photo"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Photo URL
                </label>
                <div>
                  <input
                    name="photo"
                    id="photo"
                    type="text"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your photo URL"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email
                </label>
                <div>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Password
                </label>
                <div>
                  <input
                    name="password"
                    id="password"
                    type="password"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              {error && (
                <div className="mb-4 text-red-500 text-sm">
                  <p>{error}</p>
                </div>
              )}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Register
                </button>
              </div>
            </form>
            <p className="text-center mt-4">Or log in with:</p>
            <div className="flex justify-center mt-2">
              <button
                onClick={handleGithubLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                <FaGithub /> GitHub
              </button>

              <button
                onClick={handleGoogleSignIn}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
              >
                <FaGoogle /> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
