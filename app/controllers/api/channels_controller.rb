class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      payload = {channel_id: @channel.id, user_id: @channel.admin_id}
      update(payload)
      render 'api/channels/show'
    else
      render json: {}
    end
  end

  def destroy
    # @channel = Channel.find_by(id: params[:id])
    # @channel.destroy
    # render json: {}
  end

  def update(payload)
    ChannelSubscription.create(payload)
  end


  private

  def channel_params
    params.require(:channel).permit(:title, :admin_id)
  end
end
