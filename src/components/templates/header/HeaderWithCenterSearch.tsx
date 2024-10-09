// HeaderWithCenterSearch.tsx
import React from 'react';

interface HeaderWithCenterSearchProps {
  color: string;
  links: { name: string; href: string }[];
}

const HeaderWithCenterSearch: React.FC<HeaderWithCenterSearchProps> = ({ color, links }) => {
  return (
    <header className={`bg-${color} text-white p-4`}>
      <div className="flex justify-between items-center">
        {/* Left Links */}
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

        {/* Center Search Bar */}
        <div className="flex-1 flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded border border-gray-300"
          />
        </div>

        {/* Empty div to balance flex */}
        <div className="w-1/4"></div>
      </div>
    </header>
  );
};

export default HeaderWithCenterSearch;
