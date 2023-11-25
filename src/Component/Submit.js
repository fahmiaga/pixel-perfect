import React from 'react';

const Submit = ({ text, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="text-white bg-primaryBlue px-2 py-1 rounded-md">
        {text}
      </button>
    </>
  );
}

export default Submit;
