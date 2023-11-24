import React, { useState } from 'react'
import Search from "../Component/Search"
import Button from "../Component/Button"
import Task from "../Component/Task"
import Message from "../Component/Message"


const Main = () => {


  const [isTaskOpen, setIsTaskOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const toggleChatBox = (chatType) => {
    if (chatType === 'Task') {
      setIsTaskOpen(!isTaskOpen);
      setIsMessageOpen(false);
    } else if (chatType === 'Message') {
      setIsMessageOpen(!isMessageOpen);
      setIsTaskOpen(false);
    }
  };

  const NewTask =
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M17.6433 0.514526H1.29826C0.606744 0.514526 0.0409546 1.08032 0.0409546 1.77184V19.3742L5.07019 14.3449H17.6433C18.3348 14.3449 18.9006 13.7791 18.9006 13.0876V1.77184C18.9006 1.08032 18.3348 0.514526 17.6433 0.514526ZM16.386 3.02908V11.8302H4.02665L3.28484 12.5721L2.5556 13.3013V3.02908H16.386ZM21.4152 5.54381H23.9298C24.6213 5.54381 25.1871 6.10959 25.1871 6.80112V25.6608L20.1579 20.6315H6.32748C5.63596 20.6315 5.07017 20.0657 5.07017 19.3742V16.8596H21.4152V5.54381Z" fill="white" />
    </svg>
  const NewMessage =
    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="22" viewBox="0 0 29 22" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.92984 0.400635H25.5614C26.9445 0.400635 28.076 1.53221 28.076 2.91526V19.2603C28.076 20.6433 26.9445 21.7749 25.5614 21.7749H2.92984C1.5468 21.7749 0.415222 20.6433 0.415222 19.2603V2.91526C0.415222 1.53221 1.5468 0.400635 2.92984 0.400635ZM2.9298 2.91528V19.2603H12.9883V2.91528H2.9298ZM25.5614 19.2603H15.5029V2.91528H25.5614V19.2603ZM24.3042 7.31582H16.7603V9.20178H24.3042V7.31582ZM16.7603 10.4591H24.3042V12.3451H16.7603V10.4591ZM24.3042 13.6024H16.7603V15.4883H24.3042V13.6024Z" fill="#F8B76B" />
    </svg>

  return (
    <>
      <div className="flex">
        <div className="w-1/4 h-screen "></div>
        <div className="w-3/4 h-screen border-l-2 border-mediumGray">
          <Search />
          <div className="absolute bottom-1 right-1 flex items-center justify-end gap-6 mr-2 mb-9 w-full">
            <Button text='Task' icon={NewTask} color="bg-lightBlue" content={<Task />} chatType="Task" isOpen={isTaskOpen} toggleChatBox={toggleChatBox} />
            <Button text='Inbox' icon={NewMessage} color="bg-primaryWhite" content={<Message />} chatType="Message" isOpen={isMessageOpen} toggleChatBox={toggleChatBox} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main