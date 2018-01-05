# SERVER SIDE

# CREATES MESSAGE HERE BEFORE JOB IS PERFORMED

class ChatroomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chatroom_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # creating message in database using the data passed in by the form
  #
  def speak(data)
    Message.create! content: data['message']
  end
end
