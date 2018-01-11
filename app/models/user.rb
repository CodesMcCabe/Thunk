# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  session_token   :string           not null
#  password_digest :string           not null
#

class User < ApplicationRecord
  validates :password, length: {minimum: 1, allow_nil: true}
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true

  attr_reader :password

  has_many :messages



  has_many :channel_subscriptions

  has_many :channels,
  through: :channel_subscriptions,
  source: :channel


  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
