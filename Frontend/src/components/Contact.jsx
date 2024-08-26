import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!name.trim()) formErrors.name = "Name is required";
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!subject.trim()) formErrors.subject = "Subject is required";
    if (!message.trim()) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted", { name, email, subject, message });
      // Reset form after submission
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <div className="flex-grow flex justify-center items-center bg-gray-100 dark:bg-gray-900 py-20">
        <div className="w-full max-w-2xl p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                className={`w-full p-3 mt-1 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-700 dark:text-white`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                className={`w-full p-3 mt-1 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-700 dark:text-white`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">Subject</label>
              <input
                type="text"
                className={`w-full p-3 mt-1 border rounded-lg ${errors.subject ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-700 dark:text-white`}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && <p className="text-red-500 text-sm mt-2">{errors.subject}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                className={`w-full p-3 mt-1 border rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300'} dark:bg-gray-700 dark:text-white`}
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
