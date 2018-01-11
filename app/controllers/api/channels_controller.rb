class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    # debugger
    @channel = Channel.new(channel_params)
    if @channel.save
      # debugger
      payload = {channel_id: @channel.id, user_id: @channel.admin_id}
      update(payload)
      render 'api/channels/show'
    else
      render json: {}
    end
  end

  def destroy
    # if current_user.id == @channel.id
    #   # DELETE CHANNEL FROM DB
    # else
    #   render json: ['Invalid permissions!']
    # end
  end

  def update(payload)
    # debugger
    ChannelSubscription.create(payload)
  end


  private

  def channel_params
    params.require(:channel).permit(:title, :admin_id)
  end
end
