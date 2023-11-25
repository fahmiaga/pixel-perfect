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
