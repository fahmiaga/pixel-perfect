import fetchData from "./data";

const generateRandomDate = () => {
  const startDate = new Date(2022, 0, 1).getTime();
  const endDate = new Date().getTime();
  const randomDate = new Date(startDate + Math.random() * (endDate - startDate));
  return randomDate.toISOString();
};

const updateChatData = async () => {
  try {
    const data = await fetchData();
    const targetUserId = 1;
    if (data && data.data && Array.isArray(data.data)) {
      const newData = data.data.slice(0, 3).map((user, index) => ({
        id: index + 1,
        title: index + 1 === 3 ? '19112023-Group Chat' : `Chat from ${user.first_name}`,
        members: [
          {
            name: user.first_name,
            email: user.email,
            photo: user.avatar,
            id: user.id,
          },
        ],
        type: index + 1 === 3 ? 'group' : 'private',
        messages: index + 1 === 3 ? [] : [
          {
            date: generateRandomDate(),
            message: 'Hey there',
            sender: index + 1 === targetUserId ? user : '',
          },
        ],
      }));

      newData.forEach((message) => {
        if (message.type === 'group') {
          message.messages.push({
            date: generateRandomDate(),
            message: 'Attention to all members',
            sender: data.data[4]
          })
          const additionalMembers = [
            {
              name: data.data[4].first_name,
              email: data.data[4].email,
              photo: data.data[4].avatar,
              id: data.data[4].id,
            },
            {
              name: data.data[3].first_name,
              email: data.data[3].email,
              photo: data.data[3].avatar,
              id: data.data[3].id,
            },
          ];
          message.members.push(...additionalMembers)
        }
      })

      return newData;
    } else {
      console.error('Data from API is not in the expected format:', data);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default updateChatData;

