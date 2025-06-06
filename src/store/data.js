const fetchData = async () => {
  try {
    const response = await fetch('https://reqres.in/api/users/', {
      headers: {
        'x-api-key': 'reqres-free-v1',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchData;


