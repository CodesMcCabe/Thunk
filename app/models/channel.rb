# == Schema Information
#
# Table name: channels
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  admin_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
  validates :admin_id, presence: true
  validates :title, presence: true, length: {maximum: 22}

  belongs_to :admin,
  foreign_key: :admin_id,
  class_name: 'User'

  has_many :messages

  has_many :channel_subscriptions

  has_many :users,
  through: :channel_subscriptions

  # def messages_id
  #   messages.map do |message|
  #     message.id
  #   end
  # end
  after_create_commit do
    ChannelBroadcastJob.perform_later(self) if !self.is_dm
  end

  def subscriber_ids
    subscribers.map do |sub|
      sub.id
    end
  end

end
