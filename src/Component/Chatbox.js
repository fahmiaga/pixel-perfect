import React from 'react';

const ChatBox = ({ content }) => {
  return (
    <div className="fixed bottom-32 right-0 p-4 transition-transform duration-300 transform animate__animated animate__fadeIn">
      <div className="bg-white p-4 rounded shadow-md w-[543px] h-[537px] overflow-y-auto">
        {content}
      </div>
    </div>
  );
};

export default ChatBox;


