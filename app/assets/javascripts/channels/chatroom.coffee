App.chatroom = App.cable.subscriptions.create "ChatroomChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    # checks chatsrooms show for id of messages and appends 'message' with key of data
    $('#messages').append data['message']

  speak: (message) ->
    @perform 'speak', message: message

$(document).on 'keypress', '[data-behavior~=chatroom_speaker]', (event) ->
  if event.keyCode is 13 # return = send
    App.chatroom.speak event.target.value # accesses this channels speak method whose data argument is the input on our frontend html file(soon to be FE js component)
    event.target.value = '' # believe this resets our target value, this could be done in the FE component within our form
    event.preventDefault() # this would be called in our handleSubmit function on the frontend

# belive i can build out a FE subscription component withi this channels folder using JS
# would look just like our regular presentational component
# can create a container to set up the state of the chatroom
# state would be pulling in all the messages associated to the chatroom
# QUESTION: is a subscribed user a user that is currently within the chatroom? Or are you always subscribed?
# I think it would be that they need to be within the chatroom.
