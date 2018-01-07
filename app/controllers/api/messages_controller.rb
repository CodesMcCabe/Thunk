class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all
    render 'api/messages/index'
  end

  def create
    @message = Message.new(msg_params)
    if @message.save
      MessageBroadcastJob.perform_later(@message)
      render 'api/messages/show'
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
