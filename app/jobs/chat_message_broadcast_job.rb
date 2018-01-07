class ChatMessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(chat_message)
    ActionCable.server.broadcast('chatroom_channel',
      id: chat_message.id, content: chat_message.content)
  end
end
