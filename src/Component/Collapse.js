import React, { useState } from 'react';
import MenuTask from "./MenuTask";
import { countDay, formatDate } from "../utils/util";

const Collapse = ({ data, children, onDelete, onUpdateTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [complete, setComplete] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleComplete = (e) => {
    const newValue = e.target.checked
    onUpdateTask(data.id, { completed: newValue })
    setComplete(newValue)
  }

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between p-2" >

        <input type="checkbox" name="completed" checked={data.completed} onChange={(e) => handleComplete(e)} />
        <div className="cursor-pointer flex gap-8" onClick={handleToggle}>
          <div className="flex items-center gap-4">
            <p className="text-xs font-semibold max-w-[230px] min-w-[230px] ">
              {data.completed ? <del>{data.title}</del> : data.title}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs min-w-[70px] text-center text-red-400">{countDay(data.date)}</p>
            <p className="text-xs ">{formatDate(data.date)}</p>
            <svg
              className={`w-4 h-4 ${isOpen ? 'transform rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        <div className="mb-3">
          <MenuTask id={data.id} onDelete={onDelete} />
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
