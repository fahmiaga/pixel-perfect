import React, { useState, useEffect, useRef } from 'react';

const MenuTask = ({ messageId, onDelete }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);

  };

  const handleDeleteClick = () => {
    onDelete(messageId);
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={menuRef}>
        <button onClick={handleMenuClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="4" viewBox="0 0 12 4" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.99984 0.666672C1.2665 0.666672 0.666504 1.26667 0.666504 2.00001C0.666504 2.73334 1.2665 3.33334 1.99984 3.33334C2.73317 3.33334 3.33317 2.73334 3.33317 2.00001C3.33317 1.26667 2.73317 0.666672 1.99984 0.666672ZM9.99984 0.666672C9.2665 0.666672 8.6665 1.26667 8.6665 2.00001C8.6665 2.73334 9.2665 3.33334 9.99984 3.33334C10.7332 3.33334 11.3332 2.73334 11.3332 2.00001C11.3332 1.26667 10.7332 0.666672 9.99984 0.666672ZM4.6665 2.00001C4.6665 1.26667 5.2665 0.666672 5.99984 0.666672C6.73317 0.666672 7.33317 1.26667 7.33317 2.00001C7.33317 2.73334 6.73317 3.33334 5.99984 3.33334C5.2665 3.33334 4.6665 2.73334 4.6665 2.00001Z" fill="#4F4F4F" />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 top-0 mt-2 bg-white p-2 border rounded">
            <button onClick={handleDeleteClick} className="block text-red-500 w-full text-left px-2 py-1 hover:bg-gray-100">
              Delete
            </button>

          </div>
        )}
      </div>
    </>
  );
};

export default MenuTask;
