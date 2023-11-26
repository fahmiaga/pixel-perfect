import React, { useState } from 'react'
import Submit from "./Submit";

const TaskForm = ({ dataList, onUpdateTask }) => {
  const [desc, setDesc] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setTaskDate(newDate);
    onUpdateTask(dataList.id, { date: newDate });
  };

  const handleClick = () => {
    setIsFormOpen(!isFormOpen)
  }
  const handleSubmit = () => {
    onUpdateTask(dataList.id, { description: desc })
    setIsFormOpen(false)
  }

  console.log(desc)
  return (
    <>
      <div className="ml-10">
        <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 26 26" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.2508 0.514648C6.31048 0.514648 0.690308 6.1474 0.690308 13.0877C0.690308 20.0281 6.31048 25.6608 13.2508 25.6608C20.2038 25.6608 25.8365 20.0281 25.8365 13.0877C25.8365 6.1474 20.2038 0.514648 13.2508 0.514648ZM13.2637 23.1462C7.70636 23.1462 3.20519 18.6451 3.20519 13.0878C3.20519 7.53045 7.70636 3.02928 13.2637 3.02928C18.821 3.02928 23.3221 7.53045 23.3221 13.0878C23.3221 18.6451 18.821 23.1462 13.2637 23.1462ZM12.0061 6.80121H13.8921V13.4021L19.55 16.7591L18.607 18.3056L12.0061 14.3451V6.80121Z" fill="#2F80ED" />
          </svg>
          <input type="date" className="border border-black rounded-sm px-2 py-1" onChange={handleDateChange} value={dataList.date} />
        </div>
        <div className="flex items-start gap-4 mt-4">
          <button onClick={handleClick} className="mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 23" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M19.3092 0C18.9949 0 18.668 0.125731 18.4291 0.36462L16.1282 2.6655L20.8431 7.38041L23.144 5.07953C23.6343 4.58918 23.6343 3.79708 23.144 3.30673L20.2019 0.36462C19.9504 0.113158 19.6361 0 19.3092 0ZM14.7831 7.569L15.9398 8.72573L4.54857 20.117H3.39185V18.9602L14.7831 7.569ZM0.877197 17.9167L14.783 4.01081L19.498 8.72572L5.59211 22.6316H0.877197V17.9167Z" fill="#2F80ED" />
            </svg>
          </button>
          {isFormOpen ?
            <div className="w-full flex flex-col">
              <textarea name="description" className="w-1/2 border border-black rounded-sm" onChange={(e) => setDesc(e.target.value)}>{dataList.description}</textarea>
              <div className="w-20 mt-4">
                <Submit text="Submit" onClick={handleSubmit} />
              </div>
            </div>
            :
            <div>
              {dataList.description === '' ? <p className="italic">No Description</p> : <p className="">{dataList.description}</p>}
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default TaskForm;
