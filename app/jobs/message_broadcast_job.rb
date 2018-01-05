# SERVER SIDE

# BROADCASTS DATA TO THE CHANNEL

class MessageBroadcastJob < ApplicationJob
  queue_as :default

  # invoked from the message model after creation
  # broadcasts message the the specificed chatroom
  # could make dynamic by adding a chatroom_id to each message and interpolating
  def perform(message)
    ActionCable.server.broadcast 'chatroom_channel', {action: 'message', 
      message: message}
  end

  private
  # believe this is way to call the message render w/o creating a message controller
  # renders the partial calling the class of message
  # not sure what locals is. Do we need this specifically as the key?
  def render_message(message)
    ApplicationController.renderer.render(partial: 'messages/message', locals: { message: message })
  end
end
