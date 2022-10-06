class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :image,:description, :ingredients, :instructions

  has_many :comments
end
