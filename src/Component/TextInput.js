import React from 'react';

const TextInput = ({ name, placeholder, value, onChange, onKeyPress }) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        autoComplete="off"
        onChange={onChange}
        onKeyDown={onKeyPress}
        className="border-2 border-gray-400 w-full rounded-md"
      />
    </>
  );
}

export default TextInput;
