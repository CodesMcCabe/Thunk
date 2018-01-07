# SERVER SIDE

class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chatroom_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # creating message in database using the data passed in by the form
  #
  def speak

  end
end
