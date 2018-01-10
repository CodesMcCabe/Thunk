# == Schema Information
#
# Table name: chatrooms
#
#  id         :integer          not null, primary key
#  topic      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chatroom < ApplicationRecord
  has_many :messages
end
