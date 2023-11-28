import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const { login, googleSignIn } = useContext(AuthContext);
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          <span className="bg-gradient-to-r text-transparent from-blue-500 to-purple-500 bg-clip-text">
            LogIn
          </span>
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              <i className="fas fa-envelope mr-2"></i>Email
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
              <i className="fas fa-lock mr-2"></i>Password
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
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              LogIn
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="text-gray-600 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
        <div className="mt-4">
          <p className="text-center text-gray-600">Or log in with:</p>
          <div className="flex justify-center mt-2">
            <a
              href="#"
              className="bg-blue-600 btn hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <FaGithub />
            </a>

            <a
              onClick={handleGoogleSignIn}
              className="bg-red-600 btn hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
