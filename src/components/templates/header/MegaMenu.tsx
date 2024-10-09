// MegaMenu.tsx
import React, { useState } from 'react';

interface MegaMenuProps {
  sections: { title: string; links: { name: string; href: string }[] }[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Mega Menu
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-md p-4 grid grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-2">{section.title}</h3>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-700 hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
