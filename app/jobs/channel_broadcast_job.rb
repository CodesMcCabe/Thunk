class ChannelBroadcastJob < ApplicationJob
  queue_as :default

  def perform(channel)
    ActionCable.server.broadcast('chatroom_channel',
      action: 'receiveChannel',
      channel: channel)
  end

end
