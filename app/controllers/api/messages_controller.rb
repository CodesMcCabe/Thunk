class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
  end

  def create
    @message = Message.new(msg_params)
    if @message.save
      MessageBroadcastJob.perform_later(@message)
    else
    end
  end

  def show

  end

  private

  def msg_params
    params.require(:message).permit(:content)
  end
end
