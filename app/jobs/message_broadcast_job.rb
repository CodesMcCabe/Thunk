class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast('chatroom_channel',
      action: 'receiveMessage',
      # id: chat_message.id,
      # content: chat_message.content)
      message: message)
  end
end
