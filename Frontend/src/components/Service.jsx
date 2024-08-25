import React from 'react';

function Service() {
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 pt-40 pb-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Welcome To CarCraft AI Services
          </h1>
          <p className="text-lg text-gray-600 mb-16">
            At CarCraft AI, we harness the power of Artificial Intelligence to deliver tailor-made automotive solutions. Our services are designed to meet the evolving needs of car enthusiasts, dealerships, and manufacturers alike.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {/* Service 1 */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Driven Car Customization</h2>
            <p className="text-gray-600">
              Customize your car with AI recommendations based on your preferences. We offer dynamic and real-time customization options that suit your style.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Car Proposals</h2>
            <p className="text-gray-600">
              Get personalized car proposals based on your specific needs, powered by our advanced AI algorithms. We analyze your requirements to present the perfect options.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Predictive Maintenance Alerts</h2>
            <p className="text-gray-600">
              Stay ahead of potential issues with predictive maintenance alerts. Our AI-driven system monitors your car's condition and alerts you before problems arise.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose CarCraft AI?</h3>
          <p className="text-gray-600 mb-8">
            Our innovative AI solutions empower you with the tools to make informed decisions, optimize performance, and enhance your automotive experience.
          </p>
          <a href="/contactus" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}

export default Service;
