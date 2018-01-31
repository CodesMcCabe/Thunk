export const fetchChannels = () => {
  return(
    $.ajax({
      method: 'get',
      url: 'api/channels'
    })
  );
};

export const fetchChannel = (channelId) => {
  return(
    $.ajax({
      method: 'get',
      url: `api/channels/${channelId}`
    })
  );
};

export const createChannel = (channel) => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/channels',
      data: channel
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

export const subscribeChannel = (channelId) => {
  return (
    $.ajax({
      method: 'patch',
      url: `api/channels/${channelId}`,
      data: {channelId}
    })
  );
};
