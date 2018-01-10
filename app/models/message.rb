# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  content    :text             not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ApplicationRecord
  validates :user_id, :content, :channel_id, presence: true

  belongs_to :user

  belongs_to :channel



  after_create_commit do
    MessageBroadcastJob.perform_later(self)
  end


end
