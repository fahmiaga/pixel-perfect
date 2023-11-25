import React, { useEffect, useState } from 'react'
import Submit from "./Submit"
import TextInput from "./TextInput"
import fetchData from "../store/data"
import { formatHourMinute } from "../utils/util"
import Menu from "./Menu"

const Chat = ({ data, onClose }) => {
  const [chatData, setChatData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const handleClick = () => {
    onClose();
  }

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const result = await fetchData();
        setUserData(result.data);
      } catch (error) {
        console.error('Error fetching chat data:', error);
      }
    };

    fetchDataAndSetState();
  }, []);

  useEffect(() => {
    const fetchDataMessage = async () => {
      const storedData = localStorage.getItem(`chatData_${data.id}`);
      if (!storedData) {
        localStorage.setItem(`chatData_${data.id}`, JSON.stringify(data));
        setChatData(storedData);
      } else {
        setChatData(JSON.parse(storedData));
      }
    };

    fetchDataMessage();
  }, [data]);

  const loggedInUser = userData && userData.length > 0 ? userData[1] : null;

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const currentDate = new Date();
      const newMessageObj = {
        sender: loggedInUser,
        date: currentDate.toISOString(),
        message: newMessage,
      };

      const updatedChatData = {
        ...chatData,
        messages: [...chatData.messages, newMessageObj],
      };

      setChatData(updatedChatData);
      localStorage.setItem(`chatData_${data.id}`, JSON.stringify(updatedChatData));

      setNewMessage('');
    }
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleDelete = (messageId) => {
    const updatedChatData = { ...chatData };
    const messageIndex = updatedChatData.messages.findIndex(message => message.date === messageId);

    if (messageIndex !== -1) {
      updatedChatData.messages[messageIndex].message = '';
      setChatData(updatedChatData);

      localStorage.setItem(`chatData_${updatedChatData.id}`, JSON.stringify(updatedChatData));
    }
  };
  const handleEdit = (messageId, editedText) => {
    const messageIndex = chatData.messages.findIndex((message) => message.date === messageId);

    if (messageIndex !== -1) {
      const editedMessage = { ...chatData.messages[messageIndex], message: editedText };


      const updatedChatData = {
        ...chatData,
        messages: [
          ...chatData.messages.slice(0, messageIndex),
          editedMessage,
          ...chatData.messages.slice(messageIndex + 1),
        ],
      };
      setChatData(updatedChatData);
      localStorage.setItem(`chatData_${chatData.id}`, JSON.stringify(updatedChatData));
    }
  };

  return (
    <>
      {chatData && <div className="bg-white z-30 absolute top-4 left-4 w-[543px] h-[537px]">
        <div className="flex justify-between items-center p-5">
          <div className="flex items-center gap-4">
            <button onClick={handleClick} className="w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 21" fill="none">
                <path d="M20.9883 8.83041H5.68683L12.7152 1.80204L10.9298 0.0292358L0.871338 10.0877L10.9298 20.1462L12.7026 18.3734L5.68683 11.345H20.9883V8.83041Z" fill="black" />
              </svg>
            </button>
            <div>
              <h6 className="text-primaryBlue font-semibold">{chatData.title}</h6>
              {chatData.type === 'group' ?
                <p>{chatData.members.length} Participants</p>
                : ''}
            </div>
          </div>
          <button onClick={handleClick} className="w-4 h-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 21" fill="none">
              <path d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z" fill="black" />
            </svg>
          </button>
        </div>
        <hr />
        {loggedInUser && <div className="h-[400px] px-3 py-2 overflow-auto">
          {chatData.messages.map((message, index) => (
            <div>
              {index === 0 || new Date(message.date).toDateString() !== new Date(chatData.messages[index - 1].date).toDateString() ? (
                <div className="w-full relative z-10">
                  <div className="w-full flex justify-center">
                    <p className="text-center mt-5 text-gray-900 w-[200px] bg-white">
                      {new Date(message.date).toDateString() === new Date().toDateString()
                        ? `Today ${new Date(message.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
                        : new Date(message.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                  <hr className="border-black absolute bottom-2 w-full -z-10" />
                </div>
              ) : null}
              <div className={`w-full flex ${message.sender.id === loggedInUser.id ? 'justify-end' : 'justify-start'}`}>
                <div className="w-1/2">
                  <h6 className={`font-semibold mb-1 ${message.sender.id === loggedInUser.id ? 'text-right text-lightBlue' : 'text-left text-primaryBlue'}`}>
                    {message.sender.id === loggedInUser.id ? 'You' : message.sender.first_name}
                  </h6>
                  <div className="flex gap-1">
                    {message.sender.id === loggedInUser.id ? <Menu messageId={message.date} messageText={message.message} onEdit={handleEdit} onDelete={handleDelete} /> : ''}
                    <div className={`w-full p-2 rounded-md ${message.sender.id === loggedInUser.id ? 'bg-lightRed' : 'bg-primaryWhite'} `}>
                      {message.message === '' ? <p className="text-sm text-gray-400 italic">Message Deleted</p> : message.message}
                      <p className="text-gray-500 text-xs">{formatHourMinute(message.date)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>}

        <div className="flex gap-3 px-3 fixed bottom-8 w-[537px]">
          <TextInput name="message"
            placeholder="Type new message"
            value={newMessage}
            onKeyPress={handleInputKeyPress}
            onChange={(e) => setNewMessage(e.target.value)} />
          <Submit text="Send" onClick={handleSendMessage} />
        </div>
      </div>}

    </>
  )
}

export default Chat