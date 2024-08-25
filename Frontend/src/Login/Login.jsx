import React, { useState } from 'react';

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100 font-montserrat">
      <div className="relative w-[768px] h-[480px] bg-white rounded-lg shadow-lg overflow-hidden flex">
        
        <div className={`absolute top-0 h-full w-1/2 flex justify-center items-center transition-all duration-600 ease-in-out ${isRightPanelActive ? '-left-full opacity-0 z-1' : 'left-0 opacity-100 z-5'}`}>
          <form className="bg-white flex flex-col justify-center items-center px-12 h-full text-center">
            <h1 className="font-bold">Sign in</h1>
            <div className="my-5">
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center m-1 h-10 w-10"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center m-1 h-10 w-10"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center m-1 h-10 w-10"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input className="bg-gray-200 border-none py-3 px-4 mt-2 w-full" type="email" placeholder="Email" />
            <input className="bg-gray-200 border-none py-3 px-4 mt-2 w-full" type="password" placeholder="Password" />
            <a href="#" className="mt-4 text-blue-500">Forgot your password?</a>
            <button className="mt-4 bg-red-500 text-white py-3 px-8 rounded-full uppercase font-bold tracking-wide transition-transform transform active:scale-95">Sign In</button>
          </form>
        </div>

        <div className={`absolute top-0 h-full w-1/2 flex justify-center items-center transition-all duration-600 ease-in-out ${isRightPanelActive ? 'left-1/2 opacity-100 z-5' : 'left-full opacity-0 z-1'}`}>
          <form className="bg-white flex flex-col justify-center items-center px-12 h-full text-center">
            <h1 className="font-bold">Create Account</h1>
            <div className="my-5">
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center m-1 h-10 w-10"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center m-1 h-10 w-10"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="border border-gray-300 rounded-full inline-flex justify-center items-center m-1 h-10 w-10"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input className="bg-gray-200 border-none py-3 px-4 mt-2 w-full" type="text" placeholder="Name" />
            <input className="bg-gray-200 border-none py-3 px-4 mt-2 w-full" type="email" placeholder="Email" />
            <input className="bg-gray-200 border-none py-3 px-4 mt-2 w-full" type="password" placeholder="Password" />
            <button className="mt-4 bg-red-500 text-white py-3 px-8 rounded-full uppercase font-bold tracking-wide transition-transform transform active:scale-95">Sign Up</button>
          </form>
        </div>

        <div className={`absolute top-0 left-1/2 h-full w-1/2 overflow-hidden z-100 transition-transform duration-600 ease-in-out transform ${isRightPanelActive ? '-translate-x-full' : 'translate-x-0'}`}>
          <div className={`bg-gradient-to-r from-red-500 to-pink-500 h-full w-[200%] transform transition-transform duration-600 ease-in-out ${isRightPanelActive ? 'translate-x-1/2' : 'translate-x-0'}`}>
            <div className="absolute flex flex-col justify-center items-center px-10 text-center top-0 h-full w-1/2 transform transition-transform duration-600 ease-in-out -translate-x-1/5">
              <h1 className="font-bold text-white">Welcome Back!</h1>
              <p className="mt-4 mb-8 text-white text-sm">To keep connected with us please login with your personal info</p>
              <button onClick={handleSignInClick} className="bg-transparent border border-white text-white py-3 px-8 rounded-full uppercase font-bold tracking-wide transition-transform transform active:scale-95">Sign In</button>
            </div>
            <div className="absolute flex flex-col justify-center items-center px-10 text-center top-0 h-full w-1/2 transform transition-transform duration-600 ease-in-out translate-x-1/5">
              <h1 className="font-bold text-white">Hello, Friend!</h1>
              <p className="mt-4 mb-8 text-white text-sm">Enter your personal details and start your journey with us</p>
              <button onClick={handleSignUpClick} className="bg-transparent border border-white text-white py-3 px-8 rounded-full uppercase font-bold tracking-wide transition-transform transform active:scale-95">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
