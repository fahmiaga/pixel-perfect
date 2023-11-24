import React, { useState } from 'react'
import ChatGroup from '../assets/images/chat-group.png'
import { formatISODate } from '../utils/util';
import Chat from "./Chat";

const ChartCard = ({ data }) => {
  const newMessage = data.messages.length - 1
  const newestMessage = data.messages[newMessage]
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen ? <Chat data={data} onClose={handleClose} /> :
        <div>
          <div className="flex gap-4 my-5 cursor-pointer" onClick={handleClick}>
            {data.type === 'group' ?
              <img src={ChatGroup} alt="group" className="w-12 h-9" />
              :
              <img src={data.members[0].photo} alt="photos" className="w-10 h-10 rounded-full" />
            }
            <div className="">
              <div className="flex gap-6">
                <h6 className="text-primaryBlue font-semibold">{data.title}</h6>
                <p>{formatISODate(newestMessage.date)}</p>
              </div>
              <p>{newestMessage.message}</p>
            </div>
          </div>
          <hr />
        </div>
      }
    </>
  )
}

export default ChartCard