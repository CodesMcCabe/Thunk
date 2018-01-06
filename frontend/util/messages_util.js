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
// message content,
export const sendMessage = (msg) => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/messages',
    })
  );
};
