import React from 'react'

const Chat = ({ data, onClose }) => {
  const handleClick = () => {
    onClose()
  }

  return (
    <>
      <div className="bg-white z-30 absolute top-4 left-4 w-[543px] h-[537px]">
        <div className="flex justify-between items-center p-5">
          <div className="flex items-center gap-4">
            <button onClick={handleClick} className="w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21 21" fill="none">
                <path d="M20.9883 8.83041H5.68683L12.7152 1.80204L10.9298 0.0292358L0.871338 10.0877L10.9298 20.1462L12.7026 18.3734L5.68683 11.345H20.9883V8.83041Z" fill="black" />
              </svg>
            </button>
            <div>
              <h6 className="text-primaryBlue font-semibold">{data.title}</h6>
              {data.type === 'group' ?
                <p>{data.members.length} Participants</p>
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
      </div>
    </>
  )
}

export default Chat