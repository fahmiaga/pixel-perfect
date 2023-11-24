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
