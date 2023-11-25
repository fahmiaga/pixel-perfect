import React, { useState } from 'react';

const ChatboxSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="bg-white border border-black text-black pl-8 pr-4 py-2 focus:outline-none focus:shadow-outline-red w-full"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-4 w-4 text-black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path d="M21 21l-6-6m2-5a8 8 0 11-16 0 8 8 0 0116 0z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default ChatboxSearch;
