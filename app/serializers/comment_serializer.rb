class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :rating
end
