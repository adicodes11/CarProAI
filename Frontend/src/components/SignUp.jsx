import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Extract the first name
    const firstName = name.split(' ')[0];
    localStorage.setItem('userName', firstName);
    navigate('/welcomePage'); // Redirect to welcomePage
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <form onSubmit={handleSignUpSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full py-3 bg-red-500 text-white rounded"
          >
            Sign Up
          </button>
          <a href="/signIn" className="block text-center mt-4 text-blue-500">Already have an account? Sign In</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
