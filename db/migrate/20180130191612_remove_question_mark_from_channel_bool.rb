class RemoveQuestionMarkFromChannelBool < ActiveRecord::Migration[5.1]
  def change
    change_table :channels do |t|
      t.rename :is_dm?, :is_dm
      t.rename :is_private?, :is_private
    end
  end
end
