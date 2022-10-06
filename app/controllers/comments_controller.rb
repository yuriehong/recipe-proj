class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    before_action :authorize
    skip_before_action :authorize, only: [:index,:show]

    

    def index
        comments = Comment.all
        render json: comments, status: :ok
    end

    def show
        comment = Comment.find(params[:id])
        render json: comment, status: :ok
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created

    end

    def destroy
        Comment.find(params[:id]).destroy
        head :no_content
    end

    def update
        comment = Comment.find(params[:id])
        comment.update(comment_params)
        render json: comment, status: :ok
    end

    private 
    def comment_params
       params.permit([:rating, :description, :recipe_id, :user_id]) 
    end


    def invalid
        render json: { error: "Invalid" }, status: :unprocessable_entity
    end
end
