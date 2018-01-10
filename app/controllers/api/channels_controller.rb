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

  def update
    
  end

  def destroy
    # if current_user.id == @channel.id
    #   # DELETE CHANNEL FROM DB
    # else
    #   render json: ['Invalid permissions!']
    # end
  end

  def create_sub(channel_id, user_id)
    ChannelSubscription.create(channel_id, user_id)
  end


  private

  def channel_params
    params.require(:channel).permit(:title, :admin_id)
  end
end
