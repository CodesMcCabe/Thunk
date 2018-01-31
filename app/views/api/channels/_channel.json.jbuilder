json.extract! channel, :title, :admin_id, :id, :is_dm, :is_private

json.messageIds channel.message_ids

json.subscriberIds channel.user_ids
