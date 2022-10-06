class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :recipe

    validates :description, presence: true
    validates :rating, presence: true, inclusion: 1..5


end
