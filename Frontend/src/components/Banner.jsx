import React from 'react';
import banner from "/Banner.png"

function Banner() {
  return (
    <div className="h-screen flex flex-col justify-center items-center"> {/* Full height */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        {/* Adjusted margin: less upper margin, more bottom margin */}
        <div className="w-full md:w-1/2 mt-4 md:mt-16 mb-16 md:mb-32">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              PERSONALIZE YOUR CAR PURCHASE WITH CUSTOM PROPOSALS
            </h1>
            <p className="text-xl leading-tight">
              Experience a New Era of Gen AI to tailor car proposals to your
              <br />
              unique needs.
            </p>
          </div>
          <button
            className="relative px-6 py-3 mt-10 bg-gradient-to-r from-blue-200 to-purple-400 rounded-full shadow-md transition duration-300 focus:outline-none hover:shadow-xl hover:scale-105 active:scale-95"
            onClick={() => window.location.href = '/signIn'}
          >
            <span className="relative text-black text-lg font">
              Get Started
            </span>
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img src={banner} className="w-70 h-85 md:mt-16 md:pl-10" alt="CarCraft Banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
