import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleSignInClick = () => {
    setIsSignUp(false);
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Logic for sign-in (e.g., authentication)
    navigate('/welcomePage'); // Redirect to the welcomePage
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Logic for sign-up (e.g., registration)
    navigate('/welcomePage'); // Redirect to the welcomePage
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 font-montserrat">
      <div className="relative w-[768px] h-[480px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Sign In Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-700 ease-in-out ${
            isSignUp ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          <form onSubmit={handleSignInSubmit} className="bg-white flex flex-col justify-center items-center px-12 h-full text-center">
            <h1 className="font-bold text-3xl mb-6">Sign In</h1>
            <div className="my-5 flex gap-2">
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              className="bg-gray-200 border-none py-3 px-4 mt-2 w-full"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-gray-200 border-none py-3 px-4 mt-2 w-full"
              type="password"
              placeholder="Password"
            />
            <a href="#" className="mt-4 text-blue-500">Forgot your password?</a>
            <button type="submit" className="mt-4 bg-red-500 text-white py-3 px-8 rounded-full uppercase font-bold tracking-wide transition-transform transform active:scale-95">
              Sign In
            </button>
          </form>
        </div>

        {/* Sign Up Form */}
        <div
          className={`absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-700 ease-in-out ${
            isSignUp ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <form onSubmit={handleSignUpSubmit} className="bg-white flex flex-col justify-center items-center px-12 h-full text-center">
            <h1 className="font-bold text-3xl mb-6">Create Account</h1>
            <div className="my-5 flex gap-2">
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center h-10 w-10">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              className="bg-gray-200 border-none py-3 px-4 mt-2 w-full"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-gray-200 border-none py-3 px-4 mt-2 w-full"
              type="email"
              placeholder="Email"
            />
            <input
              className="bg-gray-200 border-none py-3 px-4 mt-2 w-full"
              type="password"
              placeholder="Password"
            />
            <button type="submit" className="mt-4 bg-red-500 text-white py-3 px-8 rounded-full uppercase font-bold tracking-wide transition-transform transform active:scale-95">
              Sign Up
            </button>
          </form>
        </div>

        {/* Overlay */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex transition-transform duration-700 ease-in-out ${
            isSignUp ? 'translate-x-1/2' : 'translate-x-0'
          }`}
        >
          <div className="w-1/2 h-full bg-gradient-to-r from-red-500 to-pink-500 flex flex-col justify-center items-center text-center text-white">
            <h1 className="font-bold text-3xl mb-6">Hello, Friend!</h1>
            <p className="mb-8 text-sm">Enter your personal details and start your journey with us</p>
            <button
              onClick={handleSignUpClick}
              className="bg-transparent border border-white text-white py-3 px-8 rounded-full uppercase font-bold tracking-wide transition-transform transform active:scale-95"
            >
              Sign Up
            </button>
          </div>

          <div className="w-1/2 h-full bg-gradient-to-r from-pink-500 to-red-500 flex flex-col justify-center items-center text-center text-white">
            <h1 className="font-bold text-3xl mb-6">Welcome Back!</h1>
            <p className="mb-8 text-sm">To keep connected with us please login with your personal info</p>
            <button
              onClick={handleSignInClick}
              className="bg-transparent border border-white text-white py-3 px-8 rounded-full uppercase font-bold tracking-wide transition-transform transform active:scale-95"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
