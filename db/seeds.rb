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
    password: "moop",
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
    instructions:"In a small saucepan heat the butter over medium heat until dark golden brown (there should be specks of brown milk solids at the bottom of the pan). 
    Remove from heat and cool for 5 minutes. 
    In another bowl whisk together the plain flour, baking powder and baking soda. 
    Add white and brown sugars into the cooled brown butter, along with the egg and egg yolk, mix until well combined. 
    Add the dry ingredients into the wet mixture and stir until just combined.   
    Fold in the chopped dark chocolate. 
    Divide the dough into 9 even balls, flatten slightly and place in the freezer to chill for 30 minutes (or fridge for an hour). 
    Bake at 180C/ 355F for 15 minutes.",
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
r3 = Recipe.create!({
    name: "Hojicha Cream Puffs",
    category: "Other",
    image: "https://onehappybite.com/wp-content/uploads/2020/09/Hojicha-Cream-Puffs2.jpg",
    description: "These Hojicha Cream Puffs are filled with vanilla and hojicha whipped cream, and dusted with powdered sugar. They are full of nutty, toasty, and earthy flavors with sweet and creamy undertone.    ",
    ingredients:"80 g unsalted butter, softened
    90 g granulated sugar
    90 g all purpose flour
    3 tsp hojicha powder 
    100 ml water
    50 g unsalted butter
    ¼ tsp salt
    75 g all purpose flour
    2 large eggs, beaten, room temperature
    1 cup (240g) heavy whipping cream
    2 tbsp (20g) granulated sugar
    2 tsp vanilla extract
    1 cup (240g) heavy whipping cream
    2 tbsp (20g) granulated sugar
    4 tsp hojicha powder",
    instructions:"Craquelin
    In a large mixing bowl, mix butter (softened) and sugar together using a spatula or a mixer with paddle attachment. Add flour and hojicha powder, mix until well combined.
    Form the dough into a ball and transfer onto a sheet of parchment paper. Cover with another sheet of parchment paper on top. Roll the dough to about 2 mm thickness.
    Freeze the flattened dough for an hour or until ready to use.
    Choux Pastry
    Preheat the oven to 400°F. Line two baking sheets with parchment paper.
    Add butter, water, and salt into a small pot. Place over medium heat and bring it to a boil. When the butter melts completely and little bubbles start to appear, reduce the heat to low. Add sifted flour and immediately start mixing using a spatula.
    Continue to cook on low heat for another minute or so, while constantly mixing the flour. The dough should be thick and smooth. As soon as you see a thin glossy film on the bottom of the pan, turn the heat off.
    Transfer the dough to a clean mixing bowl. Let cool for about 2-3 minutes. If the dough is too hot, it will cook the eggs. The dough should be warm to touch.
    Beat the eggs in a small mixing bowl. Slowly add 1/3 of the beaten eggs into the batter and mix well using a spatula. Add another 1/3 and mix. The dough should be sticky, like a thick paste. When you lift the spatula up, it should form and hold a V shape. 
    Transfer the choux pastry to a piping bag fitted with round tip. Pipe 13-15 choux mounds onto the prepared baking sheets lined with parchment paper. The size of choux mounds depends on your circles/round cutter. You want to match the size with the craquelin tops.
    Smooth the choux peaks with a wet fingertip.
    Remove craquelin from the freezer. Stamp out craquelin with a round cookie cutter. Gently place each round craquelin on top of a choux pastry mound. Sprinkle some water onto the baking sheet.
    Baking
Bake at 400°F for 12 minutes. You should see the choux pastry rise and puff up.
Turn down the heat to 350°F and bake for another 10 minutes. This extra baking time gives the craquelin top a beautiful crisp and dark brown color.
Once done, do not take the cream puffs out of the oven right away. Turn the oven off and use a wooden spoon to slightly prop the oven door open. Let cool in the oven for 15 minutes before taking them out.",
     user_id: u1.id

})




c1 = Comment.create!({
    rating: 5,
    description: "Delicious - crispy and perfectly chewy with a nice nuttiness coming through from the brown butter.",
    user_id: u1.id,
    recipe_id: r1.id,

})

c2 = Comment.create!({
    rating: 4,
    description: "Need to make sure not to overmix. I used half the sugar which turned out well!",
    user_id: u1.id,
    recipe_id: r2.id,

})

c3 = Comment.create!({
    rating: 4,
    description: "Took 2 hours to make. Delicious, but need to eat quickly after assembling",
    user_id: u1.id,
    recipe_id: r3.id,

})

c4 = Comment.create!({
    rating: 5,
    description: "Used half the sugar amount.",
    user_id: u1.id,
    recipe_id: r1.id,

})

puts("Done")