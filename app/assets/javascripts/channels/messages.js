App.messages = App.cable.subscriptions.create ("MessagesChannel", {
  received: function(data) {
    $("#messages").removeClass('hidden');
    return $("[data-chatroom='" + data.chatroom_id + "']").append(
      data.message);
  }
});

// current pulling messages from the html partial and putting into chatroom
