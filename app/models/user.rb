class User < ApplicationRecord
    has_secure_password
    has_many :recipes
    has_many :comments, dependent: :destroy

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true

  validates :password, presence: true
  validates :name, presence: true
end
