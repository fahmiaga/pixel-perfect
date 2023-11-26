export const formatISODate = (isoDateString) => {
  const isoDate = new Date(isoDateString);

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  return isoDate.toLocaleString('en-US', options);
};

export const formatHourMinute = (isoDateString) => {
  const timestamp = isoDateString;
  const dateObject = new Date(timestamp);

  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

  return formattedTime;
}

export const formatDate = (inputDate) => {
  const date = new Date(inputDate);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

export const countDay = (inputDate) => {
  const currentDate = new Date();
  const selectedDate = new Date(inputDate);
  const timeDifference = selectedDate.getTime() - currentDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  console.log(timeDifference, daysDifference)

  let formattedDate;
  if (daysDifference === 0) {
    formattedDate = 'today';
  } else if (daysDifference === 1) {
    formattedDate = '1 day';
  } else if (daysDifference > 1) {
    formattedDate = `${daysDifference} days Left`;
  } else {
    formattedDate = 'outdated';
  }

  return formattedDate;
}
