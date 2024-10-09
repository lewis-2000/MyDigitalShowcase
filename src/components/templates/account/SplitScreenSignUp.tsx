import React, { useState } from 'react';
import Modal from './modals/SignupModal';
import 'tailwindcss/tailwind.css';

type SplitScreenSignUpProps = {
  logoUrl: string;
  primaryColor: string;
  darkMode: boolean;
  promoImage: string;
};

const SplitScreenSignUp: React.FC<SplitScreenSignUpProps> = ({ logoUrl, primaryColor, darkMode, promoImage }) => {
  const [username, setUsername] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State to manage error message

  const handleContinue = () => {
    if (!username.trim()) {
      // If the username is empty, show an error message and do not open the modal
      setErrorMessage('Username is required.');
    } else {
      // Clear error message and open the modal
      setErrorMessage('');
      setIsModalOpen(true);
    }
  };

  const themeClass = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const primaryButtonClass = darkMode ? `bg-${primaryColor}-500` : `bg-${primaryColor}-700`;
  const textTheme = darkMode ? 'text-white' : 'text-black';

  return (
    <div className={`flex flex-col md:flex-row h-screen ${themeClass}`}>
      {/* Left Side - Promo */}
      <div
        className="w-full md:w-1/2 h-64 md:h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${promoImage})` }}
      >
        <div className="h-full flex items-center justify-center bg-opacity-50 bg-black">
          <h1 className="text-white text-4xl">Welcome to Our App!</h1>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <img src={logoUrl} alt="Logo" className="mx-auto mb-6 h-16 md:h-20" />

          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none ${textTheme}`}
              placeholder="Enter your username"
            />
            {/* Error Message */}
            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
          </div>

          {/* Continue Button */}
          <button
            className={`w-full py-2 px-4 rounded-md font-semibold ${primaryButtonClass} ${textTheme}`}
            onClick={handleContinue}
          >
            Continue
          </button>

          {/* Modal */}
          {isModalOpen && (
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} darkMode={darkMode}>
              <div>
                <h2 className="text-xl mb-4">Hello, {username}!</h2>

                {/* Email Input */}
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-4"
                  placeholder="Enter your email"
                />

                <p className="mb-4">Shh, {username}, now choose a super-secret password. Don’t worry, we won’t tell anyone… except maybe your cat.</p>

                {/* Password Input */}
                <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-4"
                  placeholder="Enter your password"
                />
                <p className="mb-4">One more time, for good luck! Confirm your super-secret password, and we’re good to go.</p>

                {/* Confirm Password */}
                <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none mb-4"
                  placeholder="Confirm your password"
                />
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default SplitScreenSignUp;
