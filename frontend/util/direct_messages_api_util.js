export const fetchDirectMessages = () => {
  return (
    $.ajax({
      method: 'get',
      url: 'api/direct_messages'
    })
  );
};

export const createDirectMessage = (directMessage) => {
  return (
    $.ajax({
      method: 'post',
      url: 'api/direct_messages',
      data: directMessage
    })
  );
};

export const deleteDirectMessage = (directMessageId) => {
  return (
    $.ajax({
      method: 'delete',
      url: `api/direct_messages/${directMessageId}`
    })
  );
};
// NOT SURE HOW TO DO THIS YET, GOING TO NEED BOTH USER ID AND DM ID
export const updateDirectMessage = (payload) => {
  return (
    $.ajax({
      method: 'patch',
      url: `api/direct_messages/${payload.directMessageId}`,
      data: payload
    })
  );
}
