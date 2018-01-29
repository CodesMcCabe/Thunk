require 'byebug'

class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      payload = {channel_id: @channel.id, user_id: @channel.admin_id}
      ChannelSubscription.create(payload)
      render 'api/channels/show'
    else
      render json: {}
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    @channel.destroy if current_user.id == @channel.admin_id
    render json: {}
  end
  
  def update
    @channel = Channel.find_by(id: params[:channelId])
    payload = {channel_id: params[:channelId], user_id: current_user.id}
    ChannelSubscription.create(payload)
    render 'api/channels/show'
  end


  private

  def channel_params
    params.require(:channel).permit(:title, :admin_id)
  end
end
