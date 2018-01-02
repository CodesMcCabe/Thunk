class ReplaceSessionKeyWithToken < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :session_key, :string
    add_column :users, :session_token, :string
  end
end
