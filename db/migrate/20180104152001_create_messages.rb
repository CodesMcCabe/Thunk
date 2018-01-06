class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :user_id, null: false
      t.string :content, null: false
      t.integer :chatroom_id, null: false
      t.timestamps
    end

    add_index :messages, :user_id
    add_index :messages, :chatroom_id
  end
end
