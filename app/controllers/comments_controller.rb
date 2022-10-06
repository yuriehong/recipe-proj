class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    before_action :authorize
    skip_before_action :authorize, only: [:index,:show]

    

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show
        comment = comment.find(params[:id])
        render json: comment, status: :ok
    end

    def create
        recipe = Comment.create!(comment_params)
        render json: comment, status: :created

    end

    def destroy
        comment.find(params[:id]).destroy
        head :no_content
    end

    private 
    def comment_params
       params.permit([:rating, :description, :recipe_id, :user_id]) 
    end


    def invalid
        render json: { error: "Invalid" }, status: :unprocessable_entity
    end
end
