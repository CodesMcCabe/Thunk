# SERVER SIDE

class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'chatroom_channel'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # creating message in database using the data passed in by the form
  #
  def create(opts)
    Message.create(
      content: opts.fetch('content'),
      user_id: opts.fetch('user_id'),
      channel_id: opts.fetch('channel_id'))
  end
end
