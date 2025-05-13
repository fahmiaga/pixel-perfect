import React from 'react';

const Search = () => {

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="bg-mediumGray text-white pl-8 pr-4 py-2 focus:outline-none focus:shadow-outline-red w-full"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-2">

        <svg
          className="h-4 w-4 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path d="M21 21l-6-6m2-5a8 8 0 11-16 0 8 8 0 0116 0z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Search;
