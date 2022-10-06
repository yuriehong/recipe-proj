class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :ingredients, :instructions

  has_many :comments
end
