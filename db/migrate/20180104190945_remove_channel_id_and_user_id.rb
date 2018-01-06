class RemoveChannelIdAndUserId < ActiveRecord::Migration[5.1]
  def change
    remove_column :messages, :user_id
    remove_column :messages, :chatroom_id
  end
end
