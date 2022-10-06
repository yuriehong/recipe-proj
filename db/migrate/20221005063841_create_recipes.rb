class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :category
      t.string :image
      t.text :description
      t.text :ingredients
      t.text :instructions
      t.integer :user_id
      

      t.timestamps
    end
  end
end
