class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast('chatroom_channel',
      action: 'receiveMessage',
      message: message)
  end

end
