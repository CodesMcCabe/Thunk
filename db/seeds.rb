# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Channel.destroy_all

channels = [
  ['test channel 1', 1],
  ['test channel 2', 2]
]

channels.each do |channel|
  Channel.create!(title: channel[0], admin_id: channel[1])
end



User.destroy_all

users = [
  ['demo-user', 'password'],
  ['cody', 'password']]

users.each do |user|
  User.create!(username: user[0], password: user[1])
end

Message.destroy_all

messages = [
  [1, "CONTENT 1", 1],
  [2, "CONTENT 2", 1],
  [1, "CONTENT 3", 1],
  [2, "CONTENT 4", 1]
]

message.each do |message|
  Message.create!(user_id: messages[0], content: messages[1],
    channel_id: messages[2] )
end
