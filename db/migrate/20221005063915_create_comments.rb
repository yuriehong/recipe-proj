class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :rating
      t.text :description
      t.integer :recipe_id
      t.integer :user_id

      t.timestamps
    end
  end
end
