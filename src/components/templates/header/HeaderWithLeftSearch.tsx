// HeaderWithLeftSearch.tsx
import React from 'react';

interface HeaderWithLeftSearchProps {
  color: string;
  links: { name: string; href: string }[];
}

const HeaderWithLeftSearch: React.FC<HeaderWithLeftSearchProps> = ({ color, links }) => {
  return (
    <header className={`bg-${color} text-white p-4`}>
      <div className="flex justify-between items-center">
        {/* Left Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded border border-gray-300 mr-4"
          />
          {/* Links */}
          <nav>
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderWithLeftSearch;
