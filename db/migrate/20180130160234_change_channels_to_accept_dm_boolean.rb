class ChangeChannelsToAcceptDmBoolean < ActiveRecord::Migration[5.1]
  def change
    change_table :channels do |t|
      t.boolean :is_dm?, default: false
      t.boolean :is_private?, default: false
    end
  end
end
