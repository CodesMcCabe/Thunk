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
  validates :title, :admin_id, presence: true

  belongs_to :admin,
  foreign_key: :admin_id,
  class_name: 'User'

  has_many :messages

  has_many :channel_subscriptions

  has_many :subscribers,
  through: :channel_subscriptions

end
