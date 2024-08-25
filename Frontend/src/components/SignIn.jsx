import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Assuming you fetch the full name of the user, you can split it to get the first name
    const fullName = "Friend"; // Replace with the actual name-fetching logic
    const firstName = fullName.split(' ')[0];
    localStorage.setItem('userName', firstName);
    navigate('/welcomePage'); // Redirect to welcomePage
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Sign In</h1>
        <form onSubmit={handleSignInSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            Sign In
          </button>
          <a href="/signUp" className="block text-center mt-4 text-blue-500">Create an account</a>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
