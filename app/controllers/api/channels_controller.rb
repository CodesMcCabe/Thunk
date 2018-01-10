class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      create_sub(@channel.id, @channel.admin_id)
      render
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
    ChannelSubscription.create(payload.channel_id, payload.user_id)
  end


  private

  def channel_params
    params.require(:channel).permit(:title, :admin_id)
  end
end
