import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverError, setServerError] = useState('');

  const handleSignInSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;

    // Clear previous errors
    setEmailError('');
    setPasswordError('');
    setServerError('');

    // Validate email
    if (!email) {
      setEmailError('Please enter your email.');
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    }

    // If validation fails, return early
    if (!isValid) {
      return;
    }

    // Here you would typically make a request to your server to authenticate the user
    try {
      const response = await fetch('/api/auth/signin', { // Adjust the URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { userName } = await response.json();
        localStorage.setItem('userName', userName);
        navigate('/welcomePage'); // Redirect to welcomePage
      } else {
        const { message } = await response.json();
        setServerError(message || 'Sign-in failed.');
      }
    } catch (error) {
      setServerError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content container */}
      <div className="flex-grow flex justify-center items-start mt-40"> {/* Added margin-top */}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Sign In</h1>
          {serverError && <p className="text-red-500 mb-4">{serverError}</p>}
          <form onSubmit={handleSignInSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red-500 mt-2">{emailError}</p>}
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-500 mt-2">{passwordError}</p>}
            </div>
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

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default SignIn;
