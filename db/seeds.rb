# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
demo = User.create(email:'demo@gmail.com', password:'12345678');
user1 = User.create(email:'test1@gmail.com', password:'12345678');
user2 = User.create(email:'test2@gmail.com', password:'12345678');
user3 = User.create((email:'test3@gmail.com', password:'12345678');
user4 = User.create(email:'test4@gmail.com', password:'12345678');