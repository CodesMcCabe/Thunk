# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)





User.delete_all
Message.delete_all
Channel.delete_all
ChannelSubscription.delete_all

u1 = User.create!(username: 'admin', password: 'password')
u2 = User.create!(username: 'demo-user', password: 'password')
c1 = Channel.create!(title: 'default', admin_id: u2.id)
s1 = ChannelSubscription.create!(channel_id: c1.id, user_id: u2.id)
s2 = ChannelSubscription.create!(channel_id: c1.id, user_id: u1.id)
