# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts("Destroying seeds")
User.destroy_all
Recipe.destroy_all
Comment.destroy_all

puts("Reseeding")

u1 = User.create!({
    name: "Yurie",
    username: "yhong",
    email: "yurie.hong@yahoo.com",
    password: "meep",
})

r1 = Recipe.create!({
    name: "SALTED BROWN BUTTER CHOCOLATE CHIP COOKIES",
    category: "Cookie",
    image: "https://zhangcatherine.com/wp-content/uploads/2021/03/P1012596.jpg",
    description: "These salted brown butter chocolate chip cookies have a depth of flavour from the browned butter, an extra richness and chew from an added egg yolk, balance of flavour through the use of salted butter and the perfect distribution of bitter-sweet chocolate puddles. I hope you love these cookies as much as I love them!",
    ingredients:"110 g Salted butter (½ cup) 
    100 g Brown sugar (½ cup)
    70 g White sugar (⅓ cup)
    200 g Plain flour (1 ⅔ cup)
    ½ tsp Baking powder
    ½ tsp Baking soda
    1 Large egg
    1 Egg yolk
    200 g Dark chocolate (3.5oz)
    Flakey salt",
    instructions:"In a small saucepan heat the butter over medium heat until dark golden brown (there should be specks of brown milk solids at the bottom of the pan)
    Remove from heat and cool for 5 minutes
    In another bowl whisk together the plain flour, baking powder and baking soda
    Add white and brown sugars into the cooled brown butter, along with the egg and egg yolk, mix until well combined
    Add the dry ingredients into the wet mixture and stir until just combined
    Fold in the chopped dark chocolate
    Divide the dough into 9 even balls, flatten slightly and place in the freezer to chill for 30 minutes (or fridge for an hour)
    Bake at 180C/ 355F for 15 minutes",
    user_id: u1.id

})

Comment.create!({
    rating: 5,
    description: "Delicious - crispy and perfectly chewy with a nice nuttiness coming through from the brown butter.",
    user_id: u1.id,
    recipe_id: r1.id,

})

puts("Done")