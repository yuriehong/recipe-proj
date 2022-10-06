class Recipe < ApplicationRecord
    has_many :comments
    belongs_to :user

    validates :name, presence: true
    validates :image, presence: true
    validates :category, presence: true
    validates :description, presence: true
    validates :ingredients, presence: true
    validates :instructions, presence: true



end
