import React, { useState, useEffect } from 'react';
import ChatboxSearch from "./ChatboxSearch";
import updateChatData from "../store/chats";
import ChartCard from "./ChartCard";
import Loading from "./../assets/images/loading.gif";


const Message = () => {
  const [chatData, setChatData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredChatData, setFilteredChatData] = useState(null);

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const timeout = setTimeout(async () => {
          const data = await updateChatData();

          if (data) {
            setChatData(data);
            setFilteredChatData(data);
          }
          setIsLoading(false);
        }, 1000);


        return () => clearTimeout(timeout);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchDataAndSetState();
  }, []);

  const filterChats = (searchTerm) => {
    if (!searchTerm) {
      setFilteredChatData(chatData);
    } else {
      const filteredChats = chatData.filter((chat) =>
        chat.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredChatData(filteredChats);
    }
  };

  return (
    <>
      <ChatboxSearch onSearch={filterChats} />
      {!isLoading &&
        (filteredChatData ? (
          filteredChatData.map((data) => (
            <ChartCard key={data.title} data={data} />
          ))
        ) : (
          <p>No matching chats found.</p>
        ))}
      {isLoading && (
        <div>
          <div className="flex flex-col items-center justify-center mt-40">
            <img src={Loading} alt="loading" className="w-10 h-10" />
            <p>Loading Chats ...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Message;

