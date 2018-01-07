class ChatroomsController < ApplicationController
  def show
    # @messages = Message.all
  end

  # can create a chatroom here which would have a topic
  # would have to create has_many association for users that are subscribed
  # render json partials for the front end of show and create the channel component
  # state of channel should pull in the subscribed users and the all messages associated to those users


end
