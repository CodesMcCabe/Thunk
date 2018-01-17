export const fetchMessages = () => {
  return (
    $.ajax({
      method: 'get',
      url: 'api/messages'
    })
  );
};

export const fetchMessage = (id) => {
  return (
    $.ajax({
      method: 'get',
      url: `api/messages/${id}`
    })
  );
};

export const sendMessage = (message) => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/messages',
      data: { message }
    })
  );
};
