# RELAYS TO JOB AFTER COMMIT

class Message < ApplicationRecord
  # belongs_to :user
  # belongs_to :chatroom

  after_create_commit {MessageBroadcastJob.perform_later self}
end

# after the message is committed the Job will be peformed on the message
# Job should broadcast the message to all subscribers
