import React, { useState } from 'react';
import Menu from "./Menu";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between p-2 cursor-pointer" onClick={handleToggle}>
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54391 0.526306H24.6667C26.3264 0.526306 27.6843 1.8842 27.6843 3.54385V24.6667C27.6843 26.3263 26.3264 27.6842 24.6667 27.6842H3.54391C1.88426 27.6842 0.526367 26.3263 0.526367 24.6667V3.54385C0.526367 1.8842 1.88426 0.526306 3.54391 0.526306ZM24.6667 24.6667V3.54385H3.54391V24.6667H24.6667Z" fill="#BDBDBD" />
          </svg>
          <p className="text-xs font-semibold max-w-[300px]">{title}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs max-w-[300px] text-red-400">4 days left</p>
          <p className="text-xs ">12/06/2021</p>
          <svg
            className={`w-4 h-4 ${isOpen ? 'transform rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          <div className="mb-3">
            <Menu />
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-max-height ease-in-out duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
