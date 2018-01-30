class CreateDirectMessageSubs < ActiveRecord::Migration[5.1]
  def change
    create_table :direct_message_subs do |t|
      t.integer :direct_message_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :direct_message_subs, :user_id
    add_index :direct_message_subs,
    [:direct_message_id, :user_id], unique: true
  end
end
