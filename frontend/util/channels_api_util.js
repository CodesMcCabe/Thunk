export const fetchChannels = () => {
  return(
    $.ajax({
      method: 'get',
      url: 'api/channels'
    })
  );
};

export const createChannel = (channel) => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/channels',
      data: {channel}
    })
  );
};

export const deleteChannel = (channelId) => {
  return (
    $.ajax({
      method: 'delete',
      url: `api/channels/${channelId}`
    })
  );
};

// export const subscribeChannel = (id) => {
//   return (
//     $.ajax({
//       method: 'patch',
//       url: `api/channels/${id}`,
//       data:
//     })
//   );
// };
