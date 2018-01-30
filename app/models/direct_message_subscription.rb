class DirectMessageSub < ApplicationRecord
  validates :direct_message_id, :user_id, presence: true

  belongs_to :direct_message

  belongs_to :user
end
