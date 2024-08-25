import React, { useEffect, useState } from 'react';

const WelcomePage = () => {
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-purple-200 to-purple-500">
      <div className="w-full max-w-md p-8 rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Hey {userName} 👋
        </h1>
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Welcome to CarCraft AI
        </h2>
        <p className="text-lg text-white mb-6">
          Let's start by getting to know your requirements
        </p>
        <button className="bg-white text-black py-2 px-4 rounded-full shadow-lg font-semibold">
          Generate Proposal
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
