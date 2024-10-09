import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

type SocialMediaAuthProps = {
  logoUrl: string;
  primaryColor: string;
  darkMode: boolean;
};

const SocialMediaAuth: React.FC<SocialMediaAuthProps> = ({ logoUrl, primaryColor, darkMode }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and sign-up
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const themeClass = darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const primaryButtonClass = darkMode ? `bg-${primaryColor}-500` : `bg-${primaryColor}-700`;
  const continueButtonTheme = darkMode ? 'text-white' : 'text-black';

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSocialMediaLogin = (platform: string) => {
    console.log(`Logging in with ${platform}`);
  };

  return (
    <div className={`flex items-center justify-center min-h-screen p-4 ${themeClass}`}>
      <div className="w-full max-w-md bg-opacity-50 p-6 rounded-lg shadow-md">
        <img src={logoUrl} alt="Logo" className="mx-auto mb-6 h-16 md:h-20" />

        <h2 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Log In to Your Account' : 'Create Your Account'}
        </h2>

        {/* Social Media Buttons */}
        <div className="flex justify-between space-x-4 mb-6">
          <button
            className="w-1/3 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            onClick={() => handleSocialMediaLogin('Facebook')}
          >
            Facebook
          </button>
          <button
            className="w-1/3 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            onClick={() => handleSocialMediaLogin('Google')}
          >
            Google
          </button>
          <button
            className="w-1/3 bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500"
            onClick={() => handleSocialMediaLogin('Twitter')}
          >
            Twitter
          </button>
        </div>

        <p className="text-center mb-4">or {isLogin ? 'log in' : 'sign up'} with your email</p>

        {/* Username Input (Sign-up only) */}
        {!isLogin && (
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Enter your username"
            />
          </div>
        )}

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        {/* Confirm Password (Sign-up only) */}
        {!isLogin && (
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              placeholder="Confirm your password"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          className={`w-full py-2 px-4 rounded-md font-semibold ${primaryButtonClass} ${continueButtonTheme}`}
          onClick={() => console.log(isLogin ? 'Logging in' : 'Signing up')}
        >
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>

        <p className="text-center mt-4">
          {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
          <button
            className="text-blue-500 font-bold ml-2 hover:underline"
            onClick={handleToggleForm}
          >
            {isLogin ? 'Sign Up' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SocialMediaAuth;
