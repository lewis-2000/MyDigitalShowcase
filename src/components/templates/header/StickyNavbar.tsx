// StickyNavbar.tsx
import React from 'react';

interface StickyNavbarProps {
  links: { name: string; href: string }[];
}

const StickyNavbar: React.FC<StickyNavbarProps> = ({ links }) => {
  return (
    <header className="sticky top-0 bg-gray-800 text-white p-4 z-50">
      <nav>
        <ul className="flex justify-between space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default StickyNavbar;
