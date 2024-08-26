import React from 'react';

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-grow flex justify-center items-center bg-gray-100 dark:bg-gray-900 py-20">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">About Us</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Welcome to CarCraft AI, where innovation meets the automotive industry. We are a cutting-edge company specializing in AI-driven automotive solutions tailored to meet the evolving needs of car enthusiasts, dealerships, and manufacturers.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Our mission is to revolutionize the way people experience cars, offering personalized solutions that enhance performance, safety, and convenience. We leverage state-of-the-art artificial intelligence to deliver predictive maintenance alerts, personalized car proposals, and AI-driven car customization options.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            At CarCraft AI, we believe in pushing the boundaries of what's possible with technology. Our team is composed of passionate innovators who are dedicated to creating the future of automotive solutions today.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            We are committed to providing exceptional services to our clients and partners. Our goal is to empower you with the tools to make informed decisions, optimize your vehicle's performance, and enjoy a superior driving experience.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Join us on this exciting journey as we redefine the automotive landscape through the power of AI. Together, we can drive the future forward.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
