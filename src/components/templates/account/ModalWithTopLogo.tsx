import React, { useState } from 'react';

interface SignupProps {
  logoUrl: string;
  primaryColor: string;
  darkMode: boolean; // New prop for dark mode
}

interface SignupFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC<SignupProps> = ({ logoUrl, primaryColor, darkMode }) => {
  const [formData, setFormData] = useState<SignupFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username.trim()) {
      setIsModalOpen(true); // Open modal when username is provided
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform form submission (email, password, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Logo */}
      <div className="mb-8">
        <img src={logoUrl} alt="Logo" className="w-24 h-24 rounded-full object-cover" />
      </div>

      {/* Signup Form */}
      <div className={`p-8 rounded-md shadow-md w-full max-w-md ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}>
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleContinue}>
          {/* Username Field */}
          <div className="mb-4">
            <label htmlFor="username" className="block font-medium mb-2">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300'}`}
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full text-white py-2 rounded-md hover:opacity-90 transition-colors"
            style={{ backgroundColor: primaryColor }}
          >
            Continue
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className={`p-8 rounded-md shadow-md w-full max-w-md ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}>
            <h3 className="text-xl font-semibold text-center mb-4">
              Hello, {formData.username}!
            </h3>
            <form onSubmit={handleModalSubmit}>
              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300'}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label htmlFor="password" className="block font-medium mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300'}`}
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Confirm Password Field */}
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block font-medium mb-2">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200' : 'bg-white border-gray-300'}`}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white py-2 rounded-md hover:opacity-90 transition-colors"
                style={{ backgroundColor: primaryColor }}
              >
                Sign Up
              </button>
            </form>

            {/* Close Modal */}
            <button
              className="mt-4 text-red-500 hover:text-red-700"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
