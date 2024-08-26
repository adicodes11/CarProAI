import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required.';
    if (!email) newErrors.email = 'Email is required.';
    if (!password) newErrors.password = 'Password is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    // Assuming you have a server endpoint to handle the sign-up
    try {
      const response = await fetch('/api/auth/signup', { // Adjust the URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const { userName } = await response.json();
        localStorage.setItem('userName', userName);
        navigate('/welcomePage'); // Redirect to welcomePage
      } else {
        const { message } = await response.json();
        setErrors({ server: message || 'Sign-up failed.' });
      }
    } catch (error) {
      setErrors({ server: 'An error occurred. Please try again.' });
    }
  };

  return (
    <div className={`flex flex-col min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />

      {/* Main content container */}
      <div className="flex-grow flex justify-center items-start mt-40">
        <div className={`w-full max-w-md p-8 rounded-lg shadow-lg ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
          <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
          {errors.server && <p className="text-red-500 mb-4">{errors.server}</p>}
          <form onSubmit={handleSignUpSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className={`w-full p-3 border rounded ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-3 border rounded ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className={`w-full p-3 border rounded ${theme === "dark" ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded ${theme === "dark" ? "bg-red-600 text-white" : "bg-red-500 text-white"}`}
            >
              Sign Up
            </button>
            <a href="/signIn" className={`block text-center mt-4 ${theme === "dark" ? "text-blue-400" : "text-blue-500"}`}>
              Already have an account? Sign In
            </a>
          </form>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignUp;
