class DirectMessage < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user

  has_many :direct_message_subs

  has_many :subscribers,
  through: :direct_message_subs
end
