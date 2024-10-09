// Header.tsx
import React from 'react';

interface HeaderProps {
  title: string;
  links: { name: string; href: string }[];
  children?: React.ReactNode;
}

const SimpleHeader: React.FC<HeaderProps> = ({ title, links, children }) => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
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
      {children}
    </header>
  );
};

export default SimpleHeader;
