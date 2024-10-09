// ContextMenu.tsx
import React, { useState } from 'react';

interface ContextMenuProps {
  items: { name: string; href: string }[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ items }) => {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuPosition({ x: event.pageX, y: event.pageY });
  };

  const closeMenu = () => setMenuPosition(null);

  return (
    <div onContextMenu={handleContextMenu} className="relative w-full h-full">
      <p>Right click to open the context menu.</p>
      {menuPosition && (
        <ul
          className="absolute z-10 bg-white shadow-md rounded-md overflow-hidden border border-gray-200"
          style={{ top: menuPosition.y, left: menuPosition.x }}
          onClick={closeMenu}
        >
          {items.map((item, index) => (
            <li key={index} className="hover:bg-gray-100">
              <a href={item.href} className="block px-4 py-2 text-sm text-gray-700">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContextMenu;
