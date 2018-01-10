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

u1 = User.create!(username: "demo-user", password: "password")
u2 = User.create!(username: "cody", password: "password")
c1 = Channel.create!(title: 'general', admin_id: u1.id)
c2 = Channel.create!(title: 'random', admin_id: u2.id)
Message.create!(user_id: u1.id, channel_id: c1.id, content: "hey")
Message.create!(user_id: u2.id, channel_id: c1.id, content: "hello!")
Message.create!(user_id: u1.id, channel_id: c2.id, content: "hi")
Message.create!(user_id: u1.id, channel_id: c2.id, content: ":D")
