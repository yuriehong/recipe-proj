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
    email: "yurie.hong@gmail.com",
    password: "meep",
})
u2 = User.create!({
    name: "Haley",
    username: "hail9",
    email: "hailee@gmail.com",
    password: "meep",
})

r1 = Recipe.create!({
    name: "SALTED BROWN BUTTER CHOCOLATE CHIP COOKIES",
    category: "Cookies",
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

r2 = Recipe.create!({
    name: "Lemon Blueberry Cupcakes",
    category: "Cakes",
    image: "https://sallysbakingaddiction.com/wp-content/uploads/2016/04/lemon-and-blueberry-cupcakes-2.jpg",
    description: "Deliciously simple lemon blueberry cupcakes topped with cream cheese frosting. They’re sweet, fluffy, and make any day feel like summertime!",
    ingredients:"1 and 1/2 cups (188g) all-purpose flour (spoon & leveled)
    2 teaspoons baking powder
    1/2 teaspoon salt
    1/2 cup (115g) unsalted butter, softened to room temperature
    1 cup (200g) granulated sugar
    1 Tablespoon lemon zest (about 3 lemons)
    2 large eggs, at room temperature
    1 and 1/2 teaspoons pure vanilla extract
    1/2 cup (120ml) whole milk or buttermilk, at room temperature
    1/4 cup (60ml) lemon juice (about 2 lemons)
    1 cup (115g) fresh or frozen blueberries, tossed in 1 Tablespoon flour",
    instructions:"Preheat the oven to 350°F (177°C). Line a 12-cup muffin pan with cupcake liners. This recipes yields about 15 cupcakes, so you’ll have a 2nd batch. Make the batter: Whisk the flour, baking powder, and salt together in a large bowl. Set aside. Using a handheld or stand mixer fitted with a paddle attachment, beat the butter, sugar, and lemon zest together on medium-high speed in a large bowl until creamed, about 2 minutes. Scrape down the sides and bottom of the bowl as needed. Add eggs and vanilla extract, and then beat on medium-high speed until combined, about 1 minute. Scrape down the sides and bottom of the bowl as needed. Add the dry ingredients and then turn the mixer on low speed and slowly pour in the milk and lemon juice. Beat until just combined. Fold in the floured blueberries. Do not overmix. Pour/spoon the batter into the liners—fill only 2/3 full to avoid spilling over the sides. Bake for 18–21 minutes, or until a toothpick inserted in the center comes out clean. For around 30–36 mini cupcakes, bake for about 11–13 minutes, same oven temperature. Allow the cupcakes to cool completely before frosting.",
    user_id: u1.id

})



c1 = Comment.create!({
    rating: 5,
    description: "Delicious - crispy and perfectly chewy with a nice nuttiness coming through from the brown butter.",
    user_id: u1.id,
    recipe_id: r1.id,

})

c2 = Comment.create!({
    rating: 4.5,
    description: "Need to make sure not to overmix. I used half the sugar which turned out well!",
    user_id: u1.id,
    recipe_id: r2.id,

})

puts("Done")