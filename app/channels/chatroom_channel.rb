class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chatroom_channel'
  end

  def unsubscribed
  end

  def create(opts)
    Message.create(
      content: opts.fetch('content'),
      user_id: opts.fetch('user_id'),
      channel_id: opts.fetch('channel_id'))
  end
end
