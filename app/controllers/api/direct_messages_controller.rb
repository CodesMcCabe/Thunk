class Api::DirectMessagesController < ApplicationController
  def index
    @direct_messages = DirectMessage.all
  end
  # MIGHT BREAK BECAUSE ALSO PASSING IN invitations
  # IF BREAK THEN JUST NEED TO PARSE OUT user_id ON NEW
  # ADD CREATOR TO INVITATIONS
  # FOR MESSAGES STATE, WILL NEED TO UPDATE THE MODEL TO TAKE IN A DM ID AS WELL
  def create
    @direct_message = DirectMessage.new(dm_params)
    if @direct_message.save
      dm_params.invitations.each do |id|
        DirectMessageSub.create({direct_message_id: @direct_message.id,
          user_id: id})
      end
      render 'api/direct_messages/show'
    else
      render json: {}
    end
  end

  def destroy

  end
  # WILL NEED TO PASS IN USERS THAT ARE BEING ADDED AND CHANNEL ID
  def update
    # @direct_message = DirectMessage.find_by(id: params[:directMessageId])
    # D
  end

  private

  def dm_params
    params.require(:direct_message).permit(:user_id, :invitations)
  end
end
