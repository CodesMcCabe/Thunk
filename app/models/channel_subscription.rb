# == Schema Information
#
# Table name: channel_subscriptions
#
#  id         :integer          not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelSubscription < ApplicationRecord
  validates :channel_id, :user_id, presence: true

  belongs_to :channel
  
  belongs_to :user
end
