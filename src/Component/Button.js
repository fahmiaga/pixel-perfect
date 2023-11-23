import React from 'react';
import ChatBox from './Chatbox';

const Button = ({ text, icon, color, content, chatType, isOpen, toggleChatBox }) => {
  const handleClick = () => {
    toggleChatBox(chatType);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="text-white">
          {text}
        </p>
        <button className={`text-white flex justify-center items-center w-16 h-16 rounded-full bg-${color} relative  ${isOpen ? 'after:-z-50 after:absolute after:w-16 after:h-16 after:bg-mediumGray after:-bottom-0 after:right-2 after:rounded-full' : ''}  `} onClick={handleClick}>
          <div>
            {icon}
          </div>
        </button>
      </div>
      {isOpen && <ChatBox toggleChatBox={() => toggleChatBox(chatType)} content={content} />}
    </>
  );
};

export default Button;
